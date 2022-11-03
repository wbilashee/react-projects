import React from "react";
import { useGlobalContext } from "./context";
import loadingImg from "../../images/loading.gif";
import { Link } from "react-router-dom";

export default function Container() {
    const { loading, cocktails } = useGlobalContext();

    if (loading) {
        return <div className="section-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    if (cocktails.length === 0) {
        return <h2 style={{ margin: "3rem auto", textAlign: "center" }}>No Cocktail Found</h2>;
    }

    return (
        <section className="cocktails-container">
            {cocktails.map(drink => {
                const { id, name, image } = drink;
                return <Link key={id} to={`cocktail/${id}`}>
                    <article className="cocktail">
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                    </article>
                </Link>
            })}
        </section>
    )
}
