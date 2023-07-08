import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Root from "./routes/root";

// Onboarding Screens
import Splash from "./routes/onboard/splash.jsx";
import Onboard1 from "./routes/onboard/Onboard1.jsx";
import Onboard2 from "./routes/onboard/Onboard2.jsx";

// Login and Register
import Register from "./routes/login/Register.jsx";
import Login from "./routes/login/Login.jsx";
import Accset from "./routes/login/Accset.jsx";
import Setting from "./routes/Accountsetting.jsx";

// addTransaction Screens
import Addtransaction from "./routes/addtransaction/Addtransaction.jsx";
import Income from "./routes/addtransaction/Income.jsx";
import Expense from "./routes/addtransaction/Expenses.jsx";

// transactiontotal Screens
import Home from "./routes/home.jsx";
import Reports from "./routes/reports.jsx";

// Seach Screens
import Onlysearch from "./routes/transaction/onlysearch.jsx";
import Searchtransaction from "./routes/transaction/searchtransaction.jsx";
import Transactiontotal from "./routes/transaction/transactiontotal.jsx";
import Footernav from "./routes/transaction/footernav.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
    {
        path: "/reports",
        element: <Reports />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/accountsetting",
        element: <Setting />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/transactiontotal",
        element: <Transactiontotal />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/footernav",
        element: <Footernav />,
    },

    {
        path: "/onlysearch",
        element: <Onlysearch />,
    },
    {
        path: "/searchtransaction",
        element: <Searchtransaction />,
    },
]);

// render the app
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// export default function main() {
//     return (
//         // use the router as the root element of your app
//         <div className="main">{router}</div>
//     );
// }
