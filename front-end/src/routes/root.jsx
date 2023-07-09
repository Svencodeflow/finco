import { Outlet, Route } from "react-router-dom";
import React from "react";

export default function Root() {
    return (
        <>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
