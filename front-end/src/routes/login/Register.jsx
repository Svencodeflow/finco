import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../style/register.css";
import Logo from "../../images/Logo.svg";

export default function Register() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/accset"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    return (
        <div id="register">
            <div className="register_logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="register_text">
                <h2>Create an account</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adip sicing elit,
                    sed do eiusmod.
                </p>
            </div>
            <div className="register_form">
                <form>
                    <div className="register_form_input">
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

                        <div>
                            <input
                                type="password"
                                id="password"
                                required
                                placeholder="Password"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                id="password"
                                required
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="terms">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">
                                Agree to <span>Terms & Service</span>
                            </label>
                        </div>
                    </div>
                    <div className="register_form_btn">
                        <button type="submit" onClick={handleClick}>
                            Register Now
                        </button>
                    </div>
                </form>
            </div>
            <div className="register_text">
                <p>
                    All ready have any account? <Link to={"/login"}>Login</Link>
                </p>
            </div>
        </div>
    );
}
