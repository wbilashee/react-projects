import React from "react";
import "./Quiz.scss";
import { AppProvider } from "./context";
import Home from "./Home";

export default function Quiz() {
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    )
}
