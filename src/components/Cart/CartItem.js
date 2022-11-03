import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function CartItem({ id, image, title, price, amount }) {
    const { removeItem, toggleAmount } = useGlobalContext();

    return (
        <div className="cart-item">
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
                <button
                    className="remove-btn"
                    onClick={() => removeItem(id)}
                >remove</button>
            </div>
            <div>
                <button
                    className="increase-btn"
                    onClick={() => toggleAmount(id, "increase")}
                >
                    <FaChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="decrease-btn"
                    onClick={() => toggleAmount(id, "decrease")}
                >
                    <FaChevronDown />
                </button>
            </div>
        </div>
    )
}
