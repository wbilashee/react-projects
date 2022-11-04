import React from "react";

export default function Photo({ src, alt, photographer, photographer_url }) {
    return (
        <div className="photo">
            <img src={src.large} alt={alt} />
            <div className="photo-info">
                <a href={photographer_url}>{photographer}</a>
            </div>
        </div>
    )
}
