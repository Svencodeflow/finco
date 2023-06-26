import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Root from "./routes/root";
import Splash from "./routes/onboard/splash";
import Onboard from "./routes/onboard/onboard_1";
import Onboard_1 from "./routes/onboard/onboard_2";

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
        path: "/onboard",
        element: <Onboard />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/onboard_1",
        element: <Onboard_1 />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
