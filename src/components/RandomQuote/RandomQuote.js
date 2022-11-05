import React, { useEffect, useState } from "react";
import "./RandomQuote.scss";
import loadingImg from "../../images/loading.gif";
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";
const url = "https://type.fit/api/quotes";
const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

export default function RandomQuote() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchQuotes = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setQuotes(data);
        setQuote(data[0]);
        setLoading(false);
    }

    useEffect(() => {
        fetchQuotes();
    }, []);

    if (loading) {
        return <div className="page-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    if (quote) {
        const { text, author } = quote;
        const color = colors[Math.ceil(Math.random() * colors.length)];
        const getRandomQuote = () => {
            const randomNumber = Math.ceil(Math.random() * quotes.length);
            setQuote(quotes[randomNumber]);
        }

        return (
            <section id="quote" style={{
                color: `${color}`,
                backgroundColor: `${color}`
            }}>
                <div id="quote-box">
                    <div id="quote-text">
                        <FaQuoteLeft />
                        <span id="text">{text}</span>
                    </div>
                    <div id="quote-author">
                        <span id="author">- {author}</span>
                    </div>
                    <div id="quote-buttons" style={{
                        backgroundColor: `${color}`
                    }}>
                        <a
                            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + text + '" ' + author)}`}
                            className="button"
                            id="tweet_quote"
                        ><FaTwitter /></a>
                        <a
                            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(author) + '&content=' + encodeURIComponent(text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                            className="button"
                            id="tumblr_quote"
                        ><FaTumblr /></a>
                        <button
                            className="button"
                            id="new-quote"
                            onClick={getRandomQuote}
                        >New quote</button>
                    </div>
                </div>
            </section>
        )
    }
}
