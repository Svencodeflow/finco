import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const Search = ({
  setShowResult = () => {},
}) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products?search=${search}`
        );
        setFiltered(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (search) {
      setTimeout(fetchData, 500);
    } else {
      setFiltered([]);
    }
  }, [search]);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleClick = () => {
    // Implement your logic here
  };

  return (
    <div className="search-page">
      <div>
        <section>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
           
            }}
            value={search}
            onClick={handleClick}
          />

          <AiFillCloseCircle
            className="close-icon"
            size={30}
            onClick={reloadPage}
          />
        </section>

        <section>
          {filtered.map((product) => {
            return (
              <ProductItems
                key={product._id}
                // Render product details
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Search;
