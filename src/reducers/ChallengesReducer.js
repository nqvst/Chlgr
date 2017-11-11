const initialState = {
    all: [],
    loading: false,
    error: null,
    current: null,
};

export default function challenges(state = initialState, action) {
    switch (action.type) {

        case "SET_CURRENT_CHALLENGE":
            return {
                ...state,
                current: action.payload,
            };

        case "SET_INITIAL_CHALLANGES":
            return {
                ...state,
                all: action.payload
            };

        case "CHALLANGE_ADDED":
            return {
                ...state,
                all: [...state.all, action.payload]
            };

        case "CHALLANGE_DELETED":
            let reversedChallegesList = (state.all).filter((item) => {
                return item.id !== action.payload.id;
            })
            return {
                ...state,
                all: reversedChallegesList
            };

        case "CHALLANGE_CHANGED":
            let updatedChallegesList = (state.all).map((item) => {
                if(item.id === action.payload.id){
                    return Object.assign({}, item, {value: action.payload.val()}) //Object assign === merge the old object with the new object.
                } else
                return item;
            })
            return {
                ...state,
                all: updatedChallegesList
            };

        case "ADD_CHALLENGE":
            return {
                ...state,
                error: null,
                loading: true,
            }

        case "ADD_CHALLENGE_SUCCESS":
            return {
                ...state,
                error: null,
                loading: false,
            }

        case "ADD_CHALLENGE_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case "ACCEPT_CHALLENGE":
            return {
                ...state,
                error: null,
                loading: true,
            }

        case "ACCEPT_CHALLENGE_SUCCESS":
            return {
                ...state,
                error: null,
                loading: false,
            }

        case "ACCEPT_CHALLENGE_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default:
        return state;
    }
}