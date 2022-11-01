import React, { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import "./Slider.scss";
import loading from "../../images/loading.gif";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const binId = "6363a9492b3499323bf3f224";

export default function Slider() {
    const [slides, isLoading] = useFetch(binId);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slides.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, slides]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, [5000]);

        return () => {
            clearInterval(slider);
        }
    }, [index]);


    if (isLoading) {
        return <div className="page-loading">
            <img src={loading} alt="loading" />
        </div>
    }

    return (
        <section className="slider">
            <h2 className="title">Slider</h2>
            <section className="slide-container">
                {slides.map((slide, slideIndex) => {
                    let position = "next";
                    const { img, name, job, text } = slide;

                    if (slideIndex === index) {
                        position = "active";
                    }

                    if (slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
                        position = "last";
                    }

                    return <article key={slide.id} className={`slide ${position}`}>
                        <img src={img} className="img" alt={name} />
                        <h4>{name}</h4>
                        <p className="job">{job}</p>
                        <p className="text">{text}</p>
                        <div className="quote-icon">
                            <FaQuoteRight />
                        </div>
                    </article>
                })}
            </section>
            <button onClick={() => setIndex(index - 1)}
                className="btn prev-btn"
            ><FaChevronLeft />
            </button>
            <button onClick={() => setIndex(index + 1)}
                className="btn next-btn"
            ><FaChevronRight />
            </button>
        </section>
    )
}
