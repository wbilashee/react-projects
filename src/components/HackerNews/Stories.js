import React from "react";
import { useGlobalContext } from "./context";
import loadingImg from "../../images/loading.gif";

export default function Stories() {
    const { isLoading, hits, removeStory } = useGlobalContext();

    if (isLoading) {
        return <div className="section-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    return (
        <section className="stories">
            {hits.map(hit => {
                const { objectID, title, points, author, num_comments, url } = hit;
                return <article key={objectID} className="story">
                    <h4 className="story-title">{title}</h4>
                    <p className="story-info">{points} points by <span>{author} | </span> {num_comments} comments</p>
                    <div>
                        <a href={url} className="story-link" target="_blank" rel="noopener noreferrer">read more</a>
                        <button
                            className="remove-btn"
                            onClick={() => removeStory(objectID)
                            }>remove</button>
                    </div>
                </article>
            })}
        </section>
    )
}
