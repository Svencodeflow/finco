import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import "../../style/login.css";

export default function Login() {
  const { state: navState } = useLocation(); // get the location object
  const nav = useNavigate();
  const [error, setError] = useState(navState?.redirectReason || "");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("/api/login", user);
      nav("/")
    } catch (error) {
      const responseError = error?.response?.data?.error?.message;
      if (responseError) {
        setError(responseError);
      } else {
        setError("Something went wrong. Please try again later")
      }
    }
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
        <form onSubmit={loginHandler}>
          <div className="Login_form_input">
            <div>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.currentTarget.value });
                }}
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                required
                placeholder="password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.currentTarget.value });
                }}
              />
              <small className="login_error-message">{error}</small>
            </div>
          </div>
          <div className="Login_form_btn">
            <button>Login</button>
          </div>
        </form>
      </div>
      <div className="Login_text">
        <p>
          Don’t have any account? <Link to={"/register"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}