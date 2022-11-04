import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_STORY, SET_LOADING, SET_STORIES } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };
        case SET_STORIES:
            return { ...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages };
        case REMOVE_STORY:
            return { ...state, hits: state.hits.filter(hit => hit.objectID !== action.payload) };
        case HANDLE_SEARCH:
            return { ...state, query: action.payload, page: 0 };
        case HANDLE_PAGE:
            if (action.payload === "decrement") {
                let prevPage = state.page - 1;
                if (prevPage < 0) {
                    prevPage = state.nbPages - 1;
                }
                return { ...state, page: prevPage };
            }
            if (action.payload === "increment") {
                let nextPage = state.page + 1;
                if (nextPage > state.nbPages - 1) {
                    nextPage = 0;
                }
                return { ...state, page: nextPage };
            }
            break;
        default:
            throw new Error(`no matching ${action.type} action found!`);
    }
}

export default reducer;