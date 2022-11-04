import React, { useEffect, useRef, useState } from "react";
import "./Movies.scss";
import Poster from "./Poster";
import loadingImg from "../../images/loading.gif";

export default function Home() {
    const searchValue = useRef("");
    const [movies, setMovies] = useState(null);
    const [value, setValue] = useState("pirates");
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        setLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=${process.env.REACT_APP_MOVIES_KEY}`);
        const data = await response.json();
        setMovies(data.Search);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="search-form">
                <h2>Search Movies</h2>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={value}
                    ref={searchValue}
                    autoComplete="off"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            {!loading && !movies && <h3>No movie found</h3>}
            {loading && <div className="section-loading">
                <img src={loadingImg} alt="loading" />
            </div>}
            {!loading && <div className="movies">
                {movies && movies.map(movie => <Poster key={movie.imdbID} {...movie} />)}
            </div>}
        </>
    )
}
