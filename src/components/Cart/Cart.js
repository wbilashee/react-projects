import React from "react";
import "./Cart.scss";
import { AppProvider } from "./context";
import CartContainer from "./CartContainer";

export default function Cart() {
    return (
        <AppProvider>
            <CartContainer />
        </AppProvider>
    )
}
