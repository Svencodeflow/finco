import { useNavigate, useLocation } from "react-router-dom";
import "../../style/register.css";

export default function Register() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/accsetup"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    return (
        <div id="register">
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
                        <label htmlFor="name">Name</label>
                        <div>
                            <input type="text" id="name" />
                        </div>

                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" id="email" />
                        </div>

                        <label htmlFor="password">Password</label>
                        <div>
                            <input type="password" id="password" />
                        </div>

                        <label htmlFor="password">Confirm Password</label>
                        <div>
                            <input type="password" id="password" />
                        </div>

                        <label htmlFor="Terms & Service">
                            Agree to Terms & Service
                        </label>
                        <div>
                            <input type="checkbox" id="Terms & Service" />
                        </div>
                    </div>
                    <div className="register_form_btn">
                        <button onClick={handleClick}>Register Now</button>
                    </div>
                </form>
            </div>
            <div className="register_text">
                <p>
                    All ready have any account? <a href="#">Login</a>
                </p>
            </div>
        </div>
    );
}
