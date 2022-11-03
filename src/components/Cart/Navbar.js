import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
    const { amount } = useGlobalContext();

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Cart</h2>
                </div>
                <div className="nav-cart">
                    <FaShoppingCart />
                    <div className="nav-cart-amount">
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
