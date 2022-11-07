import React from "react";
import "./Home.scss";
import projects from "./data";
import girl from "../../images/girl.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="home">
            <header className="header">
                <div className="header-wrapper">
                    <div className="header-text">
                        <h1>React Projects</h1>
                        <p>
                            Project based learning gives you the opportunity to learn through practical exercises with real hands-on projects and experiences. That's why I created some
                            react projects which are shown below.
                        </p>
                        <a
                            href="https://github.com/wbilashee/react-projects"
                            target="_blank" rel="noopener noreferrer"
                            className="button header-btn"
                        >Source Code</a
                        >
                    </div>
                    <div className="header-image">
                        <img src={girl} alt="girl" />
                    </div>
                </div>
            </header>
            <section className="projects">
                <div className="projects-container">
                    {projects && projects.map(item => {
                        const { id, image, title } = item;
                        const link = encodeURIComponent(title);
                        return <Link key={id} to={`/${link}`} className="tile">
                            <div className="tile-img">
                                <img src={image} alt={title} />
                            </div>
                            <div className="tile-info">
                                <h3>{title}</h3>
                            </div>
                        </Link>
                    })}
                </div>
            </section>
        </section>
    )
}
