import React, { useEffect, useState } from "react";
import Follower from "./Follower";
import "./Pagination.scss";
import { useFetch } from "./useFetch";
import loadingImg from "../../images/loading.gif";

export default function Pagination() {
    const { loading, data } = useFetch();
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [data, loading, page]);

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        });
    }

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        });
    }

    const handlePage = (index) => {
        setPage(index);
    }

    if (loading) {
        return <div className="page-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    return (
        <section className="followers">
            <h2 className="title">Pagination</h2>
            <div className="followers-container">
                {followers.map(follower => <Follower key={follower.id} {...follower} />)}
            </div>
            {!loading && <div className="btn-container">
                <button className="prev-btn" onClick={prevPage}>
                    prev
                </button>
                {data.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={`page-btn ${index === page ? "active-btn" : null}`}
                            onClick={() => handlePage(index)}
                        >
                            {index + 1}
                        </button>
                    )
                })}
                <button className="next-btn" onClick={nextPage}>
                    next
                </button>
            </div>}
        </section>
    )
}
