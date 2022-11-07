import React from "react";
import { Link } from "react-router-dom";

export default function Poster({ imdbID, Poster, Title, Year, }) {
    return (
        <Link to={`movie/${imdbID}`}>
            <div className="poster">
                <img src={Poster} alt={imdbID} />
                <div className="poster-info">
                    <p>{Title}</p>
                    <p>{Year}</p>
                </div>
            </div>
        </Link>
    )
}
