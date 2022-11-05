import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import {
    DECREASE_VALUE,
    INCREASE_VALUE,
    PLAY_PAUSE,
    RESET_ALL,
    START_TIMER,
    TOGGLE_TIMER_LABEL
} from "./actions";

const AppContext = createContext();
const initialState = {
    breakValue: 5,
    sessionValue: 25,
    isPaused: true,
    timerLabel: "Session",
    timerValue: 1500,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increaseValue = (type) => {
        return dispatch({ type: INCREASE_VALUE, payload: type });
    }

    const decreaseValue = (type) => {
        return dispatch({ type: DECREASE_VALUE, payload: type });
    }

    const playPause = () => {
        return dispatch({ type: PLAY_PAUSE });
    }

    const startTimer = (value) => {
        return dispatch({ type: START_TIMER, payload: value });
    }

    const toggleTimerLabel = (value) => {
        return dispatch({ type: TOGGLE_TIMER_LABEL, payload: value });
    }

    const resetAll = () => {
        return dispatch({ type: RESET_ALL });
    }

    return <AppContext.Provider
        value={{
            ...state,
            state,
            increaseValue,
            decreaseValue,
            playPause,
            startTimer,
            toggleTimerLabel,
            resetAll,
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { initialState, AppContext, AppProvider };