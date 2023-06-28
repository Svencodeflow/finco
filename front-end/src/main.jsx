import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Root from "./routes/root";

// Onboarding Screens
import Splash from "./routes/onboard/splash";
import Onboard1 from "./routes/onboard/Onboard1.jsx";
import Onboard2 from "./routes/onboard/Onboard2.jsx";

// Login and Register
import Register from "./routes/login/Register";
import Login from "./routes/login/Login";
import Accset from "./routes/login/Accset";

// addTransaction Screens
import Addtransaction from "./routes/addtransaction/Addtransaction";
import Income from "./routes/addtransaction/Income";
import Expense from "./routes/addtransaction/Expenses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/splash",
        element: <Splash />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/onboard1",
        element: <Onboard1 />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/onboard2",
        element: <Onboard2 />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/accset",
        element: <Accset />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/addtransaction",
        element: <Addtransaction />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Income />,
            },
            {
                path: "expense",
                element: <Expense />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

// render the app
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

export default function main() {
    return (
        // use the router as the root element of your app
        <div className="main">{router}</div>
    );
}
