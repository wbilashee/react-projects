import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import "./Tours.scss";
import loading from "../../images/loading.gif";

export default function Tours() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://api.jsonbin.io/v3/b/63624d952b3499323bf2bf44";

    const fetchTours = () => {
        setIsLoading(true);
        fetch(url, {
            headers: {
                "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
                "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
            }
        })
            .then(res => res.json())
            .then(data => {
                setTours(data.record);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchTours();
    }, []);

    const removeTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    }

    if (!isLoading && tours.length === 0) {
        return (
            <section className="container">
                <h2 className="title">No tours left</h2>
                <button onClick={fetchTours} className="button">Refresh</button>
            </section>
        )
    }

    return (
        <section className="tours-container">
            <h2 className="title">Our Tours</h2>
            {isLoading && <div className="section-loading">
                <img src={loading} alt="loading" />
            </div>
            }
            <div className="tours">
                {!isLoading && tours && tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={removeTour} />)}
            </div>
        </section>
    )
}
