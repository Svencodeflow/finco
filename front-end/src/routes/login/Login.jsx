import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import "../../style/login.css";

export default function Login() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    return (
        <div id="Login">
            <div className="Login_logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="Login_text">
                <h2>Welcome Back</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adip sicing elit,
                    sed do eiusmod.
                </p>
            </div>
            <div className="Login_form">
                <form>
                    <div className="Login_form_input">
                        <div>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="Login_form_btn">
                        <button type="submit" onClick={handleClick}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="Login_text">
                <p>
                    Don’t have any account? <Link to={"/accset"}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}
