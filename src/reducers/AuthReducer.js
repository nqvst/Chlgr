
const initialState = {
    authenticated: false,
    user: null,
    loading: false,
    error: null,
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_USER":
            return {
                ...state,
                authenticated: false,
                error: null,
                user: null,
                loading: true,
            }
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                authenticated: true,
                error: null,
                loading: false,
                user: action.payload,
            }

        case "REGISTER_USER_ERROR":
            return {
                ...state,
                authenticated: false,
                user: null,
                loading: false,
                error: action.payload,
            }

        case "LOGIN_USER":
            return {
                ...state,
                authenticated: false,
                error: null,
                user: null,
                loading: true,
            }

        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                authenticated: true,
                error: null,
                loading: false,
                user: action.payload,
            }

        case "LOGIN_USER_ERROR":
            return {
                ...state,
                authenticated: false,
                user: null,
                loading: false,
                error: action.payload,
            }

        case "LOGOUT_USER":
            return {
                ...state,
                authenticated: false,
                error: null,
                user: null,
                loading: false,

            }

        case "LOGOUT_USER_ERROR":
            return {
                ...state,
                authenticated: false,
                user: null,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
}
