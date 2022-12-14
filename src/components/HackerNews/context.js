import React, { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer";
import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
} from "./actions";

const AppContext = createContext();
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    hits: [],
    query: "python",
    page: 0,
    nbPages: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: SET_STORIES,
                payload: { hits: data.hits, nbPages: data.nbPages }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const removeStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id });
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value });
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query });
    }

    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return <AppContext.Provider
        value={{
            ...state,
            removeStory,
            handlePage,
            handleSearch,
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };