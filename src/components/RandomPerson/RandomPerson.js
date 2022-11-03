import React, { useEffect, useState } from "react";
import "./RandomPerson.scss";
import { FaEnvelope, FaLocationArrow, FaLock, FaUser } from "react-icons/fa";
import { ImPhone } from "react-icons/im";

export default function RandomPerson() {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const url = "https://randomuser.me/api/";

    const fetchPerson = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const person = data.results[0];
        const { gender, email, phone } = person;
        const { city: location } = person.location;
        const { large: image } = person.picture;
        const { password } = person.login;
        const { first, last } = person.name;
        const newPerson = {
            name: `${first} ${last}`,
            gender,
            email,
            phone,
            location,
            image,
            password
        };
        setPerson(newPerson);
        setLoading(false);
        setTitle("name");
        setValue(newPerson.name);
    }

    useEffect(() => {
        fetchPerson();
    }, []);

    const handleValue = (e) => {
        if (e.target.classList.contains("icon")) {
            const newValue = e.target.dataset.label;
            setTitle(newValue);
            setValue(person[newValue]);
            console.log(newValue);
        }
    }

    if (person) {
        const { name, image } = person;
        return (
            <section className="random-person-container">
                <article className="random-person">
                    <img
                        src={image}
                        alt={name}
                        className="random-person-img"
                    />
                    <h2 className="text">{title}: {value}</h2>
                    <div className="random-person-info">
                        <button
                            className="icon"
                            data-label="name"
                            onMouseOver={handleValue}
                        ><FaUser /></button>
                        <button
                            className="icon"
                            data-label="email"
                            onMouseOver={handleValue}
                        ><FaEnvelope /></button>
                        <button
                            className="icon"
                            data-label="phone"
                            onMouseOver={handleValue}
                        ><ImPhone /></button>
                        <button
                            className="icon"
                            data-label="location"
                            onMouseOver={handleValue}
                        ><FaLocationArrow /></button>
                        <button
                            className="icon"
                            data-label="password"
                            onMouseOver={handleValue}
                        ><FaLock /></button>
                    </div>
                    <button
                        onClick={fetchPerson}
                        className="btn"
                    >{loading ? "Loading..." : "Random Person"}</button>
                </article>
            </section>
        )
    }
}
