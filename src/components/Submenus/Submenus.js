import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import { AppProvider } from "./context";

export default function Submenus() {
    return (
        <AppProvider>
            <Navbar />
            <Submenu />
        </AppProvider>
    )
}
