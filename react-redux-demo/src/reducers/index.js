import { combineReducers } from "redux";
import counterReducer from "./CounterReducers";
import devideReducer from "./DevideReducers";

export default combineReducers({
    count: counterReducer,
    //devideResult:devideReducer
})