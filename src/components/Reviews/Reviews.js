import React, { useState } from "react";
import useFetch from "../../useFetch";
import Review from "./Review";
import "./Reviews.scss";
import loading from "../../images/loading.gif";
const binId = "636261232b3499323bf2d366";

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const [reviews, isLoading] = useFetch(binId);
    const review = reviews[index];

    const checkIndex = (index) => {
        if (index < 0) {
            index = reviews.length - 1;
        }

        if (index > reviews.length - 1) {
            index = 0;
        }

        return index;
    }

    const nextReview = () => {
        setIndex(checkIndex(index + 1));
    }

    const prevReview = () => {
        setIndex(checkIndex(index - 1));
    }

    const surprise = () => {
        const randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(checkIndex(randomNumber));
    }

    return (
        <section className="container">
            <h2 className="title">Reviews</h2>
            {isLoading && <div className="loading">
                <img src={loading} alt="loading" />
            </div>}
            {!isLoading && review && <Review review={review} nextReview={nextReview} prevReview={prevReview} surprise={surprise} />}
        </section>
    )
}
