import { combineReducers, createStore } from "redux";
import { MainReducer } from "./main-reducer";

const rootReducer = combineReducers ({
    main: MainReducer,
})

export const store = createStore (rootReducer)