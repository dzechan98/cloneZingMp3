// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./store/reducers/rootReducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice";

const rootReducer = combineReducers({
    home: homeReducer,
});

const reduxConfig = () => {
    // const store = createStore(rootReducer, applyMiddleware(thunk));
    const store = configureStore({
        reducer: {
            home: homeReducer,
        },
    });
    return store;
};

export default reduxConfig;
