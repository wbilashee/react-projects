import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaFacebook, FaTwitter, FaBehance, FaLinkedin, FaSketch } from "react-icons/fa";

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-header">
                    <h3>JavaScript</h3>
                    <button
                        className="nav-toggle"
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                <ul className={`nav-links ${showLinks ? "show-links" : null}`}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contacts">Contact</a></li>
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
