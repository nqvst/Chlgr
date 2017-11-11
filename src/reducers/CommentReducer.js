const initialState = {
    loading: false,
    error: null,
};

export default function comments(state = initialState, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                ...state,
                error: null,
                loading: true,
            }
        case "ADD_COMMENT_SUCCESS":
            return {
                ...state,
                error: null,
                loading: false,
            }
        case "ADD_COMMENT_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
    }
}