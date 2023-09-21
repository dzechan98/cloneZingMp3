import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import homeReducer from "./features/homeSlice";
import playerReducer from "./features/playerSlice";
import playlistRecentlyReducer from "./features/playlistRecentlySlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["home", "playlistRecently"],
};

const playerPersistConfig = {
    key: "player",
    storage: storage,
    blacklist: ["isPlaying"],
};

const rootReducer = combineReducers({
    home: homeReducer,
    player: persistReducer(playerPersistConfig, playerReducer),
    playlistRecently: playlistRecentlyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
