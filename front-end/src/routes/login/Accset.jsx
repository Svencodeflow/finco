import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import "../../style/accset.css";

export default function Accset() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    // replace img src="placeholder" with your own image
    const [src, setSrc] = useState("https://example.com/image.jpg");

    const handleImageUpload = async () => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        const response = await axios.post("/upload", formData);
        setSrc(`/profile?imageId=${response.data}`);
    };

    return (
        <div id="accset">
            <div className="accset_logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="accset_text">
                <h2>Setup your Account</h2>
            </div>

            <div className="accset_profil_img">
                <div className="accset_profil_text">
                    <h4>Profil picture</h4>
                </div>
                <img
                    src={src}
                    alt={"logo"}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://example.com/image.jpg";
                    }}
                />
            </div>
            <div className="accset_profil_button">
                <img
                    src={profil_logo}
                    alt="logo"
                    type="file"
                    onChange={handleImageUpload}
                />
            </div>
            <div className="accset_form">
                <form>
                    <div className="accset_form_input">
                        <input
                            type="number"
                            id="c_number"
                            required
                            placeholder="Card Number"
                        />
                    </div>
                </form>
            </div>
            <div className="accset_btn">
                <button type="submit" onClick={handleClick}>
                    Profil Complete
                </button>
            </div>
        </div>
    );
}
