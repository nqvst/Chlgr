const initialState = {
    all: [],
    loading: false,
    error: false,
};

export default function challenges(state = initialState, action) {
    console.log(state.all);
    switch (action.type) {
        

        case "SET_INITIAL_CHALLANGES":
            console.log('8888888', action.payload)
            return {
                ...state,
                all: action.payload
            };

        case "ADDL_NEW_CHALLANGE":
            return {
                ...state,
                all: [...state.all, action.payload]
            };

        case "DELETE_CHALLANGE":
            let reversedChallegesList = (state.all).filter((item) => {
                console.log(item.key);
                console.log(action.payload.key);
                return item.key !== action.payload.key;
            })
            return {
                ...state,
                all: reversedChallegesList
            };

        case "CHANGE_CHALLANGE":
            let updatedChallegesList = (state.all).map((item) => { 
                if(item.key === action.payload.key){ 
                    return Object.assign({}, item, {value: action.payload.val()}) //Object assign === merge the old object with the new object.
                } else
                return item;
            })
            return {
                ...state,
                all: updatedChallegesList
            };
        

        default:
        return state;
    }
}