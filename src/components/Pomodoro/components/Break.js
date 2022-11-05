import React from "react";
import { useGlobalContext } from "../context";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Break() {
    const { increaseValue, decreaseValue, breakValue } = useGlobalContext();
    return (
        <div className="length-control">
            <div id="break-label">Break Length</div>
            <button className="btn-level" id="break-decrement" value="-"
                onClick={() => decreaseValue("break")}>
                <FaArrowDown />
            </button>
            <div className="btn-level" id="break-length">{breakValue}</div>
            <button className="btn-level" id="break-increment" value="+"
                onClick={() => increaseValue("break")}>
                <FaArrowUp />
            </button>
        </div>
    )
}