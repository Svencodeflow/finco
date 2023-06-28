import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Search = ({
  setShowCategories,
  setShowResult,
  setShowDetails,
  setShowRandom = () => {},
}) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (products) {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => {
          return (
            product.strMeal.toLowerCase().includes(search.toLowerCase()) ||
            product.strArea.toLowerCase().includes(search.toLowerCase()) ||
            (product.strTags &&
              product.strTags.toLowerCase().includes(search.toLowerCase())) ||
            product.strCategory.toLowerCase().includes(search.toLowerCase())
          );
        });
        setFiltered(filteredProducts);
      }, 500);
    }
  }, [search, products]);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
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
                setShowCategories(false);
                setShowResult(false);
                setShowDetails(false);
                setShowRandom(false);
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
            {search &&
              filtered.map((product) => {
                return (
                  <ProductItems
                   // selektion
                  />
                );
              })}
          </section>
        </div>

    </div>
    

  );
};
export default Search;