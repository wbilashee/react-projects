import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loadingImg from "../../images/loading.gif";

export default function SingleMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchSingleMovie = async () => {
            setLoading(true);
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_MOVIES_KEY}`);
            const data = await response.json();
            setMovie(data);
            setLoading(false);
        }
        fetchSingleMovie();
    }, [id]);

    if (loading) {
        return <div className="section-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    if (!movie) {
        return <h2 className="title">No movie found</h2>
    } else {
        const { Poster, Title, Plot, Actors } = movie;
        return (
            <section className="single-movie">
                <img src={Poster} alt={Title} />
                <div className="single-movie-info">
                    <h2>{Title}</h2>
                    <h4>{Plot}</h4>
                    <h4>Actors: {Actors}</h4>
                    <Link to={"/"} className="btn">Back to movies</Link>
                </div>
            </section>
        )
    }
}
