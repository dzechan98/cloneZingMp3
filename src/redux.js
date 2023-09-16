import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice";

const rootReducer = combineReducers({
    home: homeReducer,
});

const reduxConfig = () => {
    const store = configureStore({
        reducer: {
            home: homeReducer,
        },
    });
    return store;
};

export default reduxConfig;
