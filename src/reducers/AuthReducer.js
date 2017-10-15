
const initialState = {
    authenticated: false,
    error: null,
    user: null,
    loading: false
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_USER":
            return {
                ...state,
                ...action.payload,
            }  
            
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }  
        
        case "REGISTER_USER_ERROR":
            return {
                ...state,
                ...action.payload,
            } 

        default:
            return state;
    }
}
