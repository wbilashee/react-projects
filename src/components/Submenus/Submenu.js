import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import "./Submenu.scss";

export default function Submenu() {
    const { isSubmenuOpen, page: { page, links }, location } = useGlobalContext();
    const container = useRef(null);

    useEffect(() => {
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [page, location]);

    return (
        <aside className=
            {`submenu ${isSubmenuOpen ? "show" : null}`}
            ref={container}
        >
            <h4>{page}</h4>
            <div className="submenu-links">
                {links.map((link, index) => {
                    return <a key={index} href={link.url}>
                        {link.icon} {link.label}
                    </a>
                })}
            </div>
        </aside>
    )
}
