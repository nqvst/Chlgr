import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

//Reducers
import AuthReducer from "./AuthReducer.js";
import ChallengesReducer from "./ChallengesReducer.js";


const rootReducer = combineReducers({
    auth: AuthReducer,
    challenges: ChallengesReducer,
    // router: routerReducer
});

export default rootReducer;
