import React, { useEffect, useState } from "react";
import "./GroceryBud.scss";
import Alert from "./Alert";
import Item from "./Item";
const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("list")));
    } else {
        return [];
    }
}

export default function GroceryBud() {
    const [grocery, setGrocery] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!grocery) {
            showAlert(true, "Please enter value", "danger");
        } else if (grocery && isEditing) {
            const newList = list.map(item => {
                if (item.id === editID) {
                    return { ...item, title: grocery };
                }
                return item;
            });
            setList(newList);
            setGrocery("");
            setEditID(null);
            setIsEditing(false);
            showAlert(true, "Value changed", "success");
        } else {
            showAlert(true, "Item added to list", "success");
            const item = { id: new Date().getTime().toString(), title: grocery };
            setList([...list, item]);
            setGrocery("");
        }
    }

    const showAlert = (show = false, msg = "", type = "") => {
        setAlert({ show, msg, type });
    }

    const clearList = () => {
        showAlert(true, "Empty List", "danger");
        setList([]);
    }

    const editItem = (id) => {
        setEditID(id);
        setIsEditing(true);
        const item = list.filter(item => item.id === id)[0];
        setGrocery(item.title);
    }

    const removeItem = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
        showAlert(true, "Item removed", "danger");
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <main className="grocery-bud">
            {alert.show && <Alert
                {...alert}
                list={list}
                removeAlert={showAlert}
            />}
            <h3>Grocery Bud</h3>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    id="grocery"
                    name="grocery"
                    value={grocery}
                    autoComplete="off"
                    placeholder="e.g. eggs"
                    onChange={(e) => setGrocery(e.target.value)}
                />
                <input
                    type="submit"
                    id="submit-btn"
                    value={isEditing ? "Edit" : "Submit"}
                />
            </form>
            {list.length > 0 &&
                <section className="grocery-container">
                    <div className="grocery-list">
                        {list.map(item => <Item
                            key={item.id}
                            {...item}
                            editItem={editItem}
                            removeItem={removeItem}
                        />)}
                    </div>
                    <button
                        onClick={clearList}
                        className="clear-btn"
                    >clear items</button>
                </section>
            }
        </main>
    )
}
