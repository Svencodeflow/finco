import { Outlet, Route } from "react-router-dom";
import React from 'react';


export default function Root() {
    return (
        <>
            <div id="header">
                <h1>alles läuft theoretisch hier drüber</h1>
            
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
