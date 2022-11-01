import React from "react";
import "./Questions.scss";
import useFetch from "../../useFetch";
import Question from "./Question";
import loading from "../../images/loading.gif";
const binId = "63634de90e6a79321e3d7910";

export default function Questions() {
    const [questions, isLoading] = useFetch(binId);

    return (
        <section className="questions-container">
            <h2 className="title">General Questions</h2>
            {isLoading && <div className="loading">
                <img src={loading} alt="loading" />
            </div>}
            <div className="questions">
                {!isLoading && questions && questions.map(question => <Question key={question.id} {...question} />)}
            </div>
        </section>
    )
}
