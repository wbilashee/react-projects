import React, { useState } from "react";
import Color from "./Color";
import "./ColorGen.scss";
import Values from "values.js";

export default function ColorGen() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("salmon").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return (
        <section className="color-generator">
            <form onSubmit={handleSubmit} className="lorem-form">
                <div className="form-group">
                    <label htmlFor="color">Color Generator</label>
                    <input
                        id="color"
                        type="text"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className={error ? "error" : null}
                    />
                </div>
                <div className="form-group">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
            </form>
            <article className="colors">
                {list.map((color, index) => <Color key={index} index={index} {...color} hexColor={color.hex} />)}
            </article>
        </section>
    )
}
