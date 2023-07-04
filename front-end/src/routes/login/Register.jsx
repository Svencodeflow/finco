import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../style/register.css";
import Logo from "../../images/Logo.svg";
import axios from "axios";
import { useState } from "react";

// We'll use this to keep track of any errors we encounter
//1. We use Object.freeze to freeze the object so that nothing can be added to it or removed from it. This is a good practice to follow as it prevents bugs from accidentally adding or removing properties from the object. 2. We also set the default value of the state to this object.
const defaultErrorState = Object.freeze({
  general: "",
  name: "",
  email: "",
  password: "",
});

// This is the data we will send to the server
//1. The Object.freeze() method freezes an object. A frozen object can no longer be changed. 2. The name, email and password fields are set to empty strings to start with.
const defaultData = Object.freeze({
  name: "",
  email: "",
  password: "",
});

//--------------REGISTER--------------\\
export default function Register() {
  const navigate = useNavigate(); // get the navigate function
  const location = useLocation(); // get the location object
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(defaultErrorState);

  //1. The handleSubmit function is called when the form is submitted. 2. The e.preventDefault() method prevents the default action of the event from happening. In this case, it prevents the form from being submitted to the server. 3. The error state is reset to the default value. 4. The data is sent to the server with the axios.post() method. If the request is successful, the user is redirected to the login page. If the request fails, the errors are displayed. 5. The errors are displayed by using the setError() hook. The error object is created from the errors object returned by the server. To do that, we use the Object.entries() method to get an array of the error properties and their values. Then, we use the reduce() method to transform the array into an object. Finally, we use the setError() hook to set the error state to the new object.6. If the request fails for a reason other than validation errors, the error message returned by the server is displayed in the general error message. The error message is displayed by using the setError() hook. The error message is retrieved from the error object returned by the server. If the error object does not contain an error message, an empty string is used
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(defaultErrorState);
    try {
      await axios.post("/api/signup", data);
      setData(defaultData);
      navigate("/accset"); // navigate to the relative path
      console.log(location.pathname); // log the current path
    } catch (error) {
      console.log(error);

      let responseError = error?.response?.data?.error;

      // 1. We are checking if the responseError has a property called errors. 2. If it does, we create an object called propertyMessageMap that will hold all the property name and its error message. 3. We loop through the errors property using Object.entries(). 4. We use the reduce() function to create a new object. 5. The reduce() function will loop through the entries array and return a new object. 6. In the callback function of the reduce() function, we destructure the entries array into two variables, key and value. 7. We then use the key to assign the value to the new object. 8. We then return the new object on line 86. 9. We then set the error state to the new object. 10. If the responseError doesn't have an errors property, we set the error state to the error message from the response. 
      if (responseError?.errors) {
        const propertyMessageMap = Object.entries(responseError.errors).renduce(
          (acc, [key, value]) => {
            acc[key] = value.message;
            return acc;
          },
          {}
        )
        console.log(propertyMessageMap);
        setError(propertyMessageMap);
      } else {
        setError((prevError) => ({
          ...prevError,
          general: error?.response?.data?.error?.message || "",
        }));
      }
    }
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
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.currentTarget.value })
                }}
              />
              <small className="register_error-message">
                {error.name && error.name};
              </small>
            </div>
            <div>
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.currentTarget.value });
                }}
              />
              <small className="register_error-message">
                {error.email && error.email}
              </small>
            </div>
            <div>
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.currentTarget.value });
                }}
              />
              <small className="register_error-message">
                {error.password && error.password}
              </small>
            </div>
            {/* <div>
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
            </div>*/}
          </div>
          <div className="register_form_btn">
            <button type="submit" onClick={handleSubmit}>
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
