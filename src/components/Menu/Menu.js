import React, { useState } from "react";
import "./Menu.scss";
import items from "./data";
import MenuItem from "./MenuItem";
const categories = ["all", ...new Set(items.map(item => item.category))];

export default function Menu() {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter(item => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <section className="menu">
            <h2 className="title">Our Menu</h2>
            <div className="btn-container">
                {categories.map((category, index) => {
                    return <button
                        key={index}
                        className="btn"
                        onClick={() => filterItems(category)}
                    >{category}</button>
                })}
            </div>
            <div className="menu-container">
                {menuItems.map(item => <MenuItem key={item.id} {...item} />)}
            </div>
        </section>
    )
}
