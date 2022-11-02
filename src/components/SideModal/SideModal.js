import React, { useState } from "react";
import "./SideModal.scss";
import { FaFacebook, FaTwitter, FaBehance, FaLinkedin, FaSketch, FaBars, FaTimes } from "react-icons/fa";

export default function SideModal() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="side-modal">
            <button
                className="sidebar-toggle"
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <FaBars />
            </button>
            <aside
                className={`sidebar ${showSidebar ? "show-sidebar" : null}`}
            >
                <header>
                    <h3>JavaScript</h3>
                    <button
                        className="close-btn"
                        onClick={() => setShowSidebar(false)}
                    >
                        <FaTimes />
                    </button>
                </header>
                <ul className="links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <ul className="social-icons">
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
            </aside>
            <button
                className="modal-btn"
                onClick={() => setShowModal(true)}
            >Open modal</button>
            <div
                className={`modal-overlay ${showModal ? "show-modal" : null}`}
            >
                <div className="modal-container">
                    <h3>Modal Content</h3>
                    <button
                        className="close-btn"
                        onClick={() => setShowModal(false)}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </section>
    )
}