import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();
const url = "https://api.jsonbin.io/v3/b/636660d665b57a31e6ae1f2c";

const initialState = {
    loading: false,
    cart: [],
    amount: 0,
    total: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: "LOADING" });
        const response = await fetch(url, {
            headers: {
                "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
                "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
            }
        });
        const data = await response.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: data.record });
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const clear = () => {
        dispatch({ type: "CLEAR_ITEMS" });
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: "GET_TOTALS" });
    }, [state.cart]);

    return <AppContext.Provider
        value={{
            ...state,
            fetchData,
            toggleAmount,
            removeItem,
            clear,
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };