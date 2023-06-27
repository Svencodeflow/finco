import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Root from "./routes/root";
import Splash from "./routes/onboard/splash";
import Onboard1 from "./routes/onboard/Onboard1.jsx";
import Onboard2 from "./routes/onboard/Onboard2.jsx";
import Register from "./routes/login/register";

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
