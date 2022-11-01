import React, { useState } from "react";
import useFetch from "../../useFetch";
import "./Tabs.scss";
import loading from "../../images/loading.gif";
const binId = "63639eb765b57a31e6aba8fa";

export default function Tabs() {
    const [tabs, isLoading] = useFetch(binId);
    const [value, setValue] = useState(0);

    if (isLoading) {
        return <div className="page-loading">
            <img src={loading} alt="loading" />
        </div>
    }

    const { image, title, desc, places } = tabs[value];

    return (
        <section className="tab-container">
            <article className="btn-container">
                {tabs.map((tab, index) => {
                    return <button
                        key={tab.id}
                        onClick={() => setValue(index)}
                        className={`btn ${value === index && "active"}`}
                    >{tab.title}</button>
                })}
            </article>
            <article className="tab">
                <div className="tab-img">
                    <img src={image} alt={title} />
                </div>
                <div className="tab-info">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <p>Some beautiful places of {title} are:</p>
                    <ul>
                        {places.map((place, index) => {
                            return <li key={index}>{place}</li>;
                        })}
                    </ul>
                </div>
            </article>
        </section>
    )
}
