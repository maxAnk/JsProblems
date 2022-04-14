import { createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "../reducers/countReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers(
    { count: countReducer }
)


const configureStore = () => {
    return createStore(rootReducer,{},applyMiddleware(thunk))
}

export default configureStore;