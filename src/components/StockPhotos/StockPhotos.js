import React, { useEffect, useRef, useState } from "react";
import "./StockPhotos.scss";
import { createClient } from "pexels";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import loadingImg from "../../images/loading.gif";

export default function StockPhotos() {
    const client = createClient(process.env.REACT_APP_KEY);
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState("fruits");
    const [loading, setLoading] = useState(false);
    const [newPhotos, setNewPhotos] = useState(false);
    const mounted = useRef(false);

    const fetchPhotos = () => {
        client.photos.search({ query, per_page: 12, page: page }).then(photos => {
            setLoading(true);
            try {
                setPhotos((oldPhotos) => {
                    if (query && page === 1) {
                        return photos.photos;
                    } else if (query) {
                        return [...oldPhotos, ...photos.photos];
                    } else {
                        return photos.photos;
                    }
                });
                setNewPhotos(false);
                setLoading(false);
            } catch (error) {
                setNewPhotos(false);
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        fetchPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        if (!newPhotos) return;
        if (loading) return;
        setPage((oldPage) => oldPage + 1);
    }, [loading, newPhotos]);

    const event = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            setNewPhotos(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", event);
        return () => window.removeEventListener("scroll", event);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        if (page === 1) {
            fetchPhotos();
        }
        setPage(1);
    }

    return (
        <section className="stock-photos">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    placeholder="Search here..."
                />
                <button type="submit"><FaSearch /></button>
            </form>
            <div className="photos-container">
                {photos.map(photo => <Photo key={photo.alt} {...photo} />)}
            </div>
            {loading && <div className="section-loading">
                <img src={loadingImg} alt="loading" />
            </div>}
        </section>
    )
}
