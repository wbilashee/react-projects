import React, { useState } from "react";
import "./DarkMode.scss";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <section className={`mode ${darkMode ? "dark" : "light"}`}>
            <div className="mode-container">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <h2>{darkMode ? "Dark" : "Light"} Mode</h2>
            </div>
        </section>
    )
}
