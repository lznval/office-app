import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {placeReducer} from "./reducers/placeReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    places: placeReducer
})

export const store = createStore(rootReducer);
