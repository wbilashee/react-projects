import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Review({ review, prevReview, nextReview, surprise }) {
    const { img, name, job, text } = review;

    return (
        <article className="review">
            <div className="img-div">
                <img src={img} alt={name} />
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button onClick={prevReview} className="prev-btn">
                    <FiChevronLeft />
                </button>
                <button onClick={nextReview} className="next-btn">
                    <FiChevronRight />
                </button>
            </div>
            <button onClick={surprise} className="random-btn">surprise me</button>
        </article>
    )
}
