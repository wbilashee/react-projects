import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaFacebook, FaTwitter, FaBehance, FaLinkedin, FaSketch } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const { openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom + 20;
        openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("btn")) {
            closeSubmenu();
        }
    }

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-container">
                <div className="nav-header">
                    <h3>Menus</h3>
                    <button
                        className="nav-toggle"
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                <ul className={`nav-links ${showLinks ? "show-links" : null}`}>
                    <li>
                        <a className="btn" onMouseOver={displaySubmenu} href="/product">Product</a>
                    </li>
                    <li>
                        <a className="btn" onMouseOver={displaySubmenu} href="/company">Company</a>
                    </li>
                    <li>
                        <a className="btn" onMouseOver={displaySubmenu} href="/connect">Connect</a>
                    </li>
                </ul>
                <ul className="nav-social">
                    <li>
                        <a href="https://facebook.com"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com"><FaTwitter /></a>
                    </li>
                    <li>
                        <a href="https://behance.net"><FaBehance /></a>
                    </li>
                    <li>
                        <a href="https://linkedin.com"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://sketch.com"><FaSketch /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
