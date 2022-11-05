import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const API_ENDPOINT = "https://opentdb.com/api.php?";
const table = {
    sports: 21,
    history: 23,
    politics: 24,
}

const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "history",
        difficulty: "easy",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuestions = async (url) => {
        setLoading(true);
        setWaiting(false);
        try {
            const response = await fetch(url);
            const data = await response.json();
            const results = data.results;
            if (results.length > 0) {
                setQuestions(results);
                setLoading(false);
                setWaiting(false);
                setError(false);
            } else {
                setWaiting(true);
                setError(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex + 1;
            if (index > questions.length - 1) {
                openModal();
                return 0;
            } else {
                return index;
            }
        });
    }

    const checkAnswer = (value) => {
        if (value) {
            setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setWaiting(true);
        setCorrect(0);
        setIsModalOpen(false);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({ ...quiz, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { amount, category, difficulty } = quiz;
        const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
        fetchQuestions(url);
    }

    return <AppContext.Provider
        value={{
            waiting,
            loading,
            questions,
            index,
            correct,
            error,
            isModalOpen,
            nextQuestion,
            checkAnswer,
            closeModal,
            quiz,
            handleChange,
            handleSubmit,
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };