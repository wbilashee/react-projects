import React, { useState } from "react";
import useFetch from "../../useFetch";
import "./LoremIpsum.scss";
import loading from "../../images/loading.gif";
const binId = "63642b3a2b3499323bf47a77";

export default function LoremIpsum() {
    const [data, isLoading] = useFetch(binId);
    const [text, setText] = useState([]);
    const [value, setValue] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(value);

        if (value <= 0) {
            amount = 1;
        }

        if (value > 8) {
            amount = 8;
        }

        setText(data.slice(0, amount));
    }

    if (isLoading) {
        return <div className="page-loading">
            <img src={loading} alt="loading" />
        </div>
    }

    return (
        <section className="lorem-container">
            <h2 className="title">Lorem Ipsum</h2>
            <form onSubmit={handleSubmit} className="lorem-form">
                <div className="form-group">
                    <label htmlFor="amount">Paragraphs:</label>
                    <input
                        id="amount"
                        type="number"
                        name="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input className="submit-btn" type="submit" value="Generate" />
                </div>
            </form>
            <article className="lorem-text">
                {text.map((item, index) => <p key={index}>{item}</p>)}
            </article>
        </section>
    )
}
