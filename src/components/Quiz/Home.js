import React from "react";
import Modal from "./Modal";
import SetupForm from "./SetupForm";
import { useGlobalContext } from "./context";
import loadingImg from "../../images/loading.gif";

export default function Home() {
    const { waiting, loading, questions, correct, index, checkAnswer, nextQuestion } = useGlobalContext();

    if (waiting) {
        return <SetupForm />
    }

    if (loading) {
        return <div className="page-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);

    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }

    return (
        <main className="quiz-container">
            <Modal />
            <section className="quiz-content">
                <p className="correct-answers">
                    correct answers : {correct}/{index}
                </p>
                <article className="container">
                    <h2 dangerouslySetInnerHTML={{ __html: question }} />
                    <div className="btn-container">
                        {answers.map((answer, index) => {
                            return (
                                <button
                                    key={index}
                                    className="answer-btn"
                                    onClick={() => checkAnswer(correct_answer === answer)}
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                />
                            )
                        })}
                    </div>
                </article>
                <button className="next-question" onClick={nextQuestion}>
                    next question
                </button>
            </section>
        </main>
    )
}
