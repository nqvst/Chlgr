const initialState = {
    heading: '',
    description: '',
    selectedDay: '',
    category: '',
    createdBy: '',
    loading: false,
    error: false,
};

export default function challengers(state = initialState, action) {
    switch (action.type) {
        case "ADD_CHALLENGE":
            return {
                ...state,
                ...action.payload,
            }  
    }
}