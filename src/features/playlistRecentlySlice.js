import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "Gần đây",
    isAddRecently: false,
    recently: [],
};

const playlistRecentlySlice = createSlice({
    name: "playlistRecently",
    initialState,
    reducers: {
        setIsAddRecentyly: (state, action) => {
            state.isAddRecently = action.payload;
        },
        addPlaylistRecently: (state, action) => {
            const check = state.recently.some(
                (item) => item.encodeId === action.payload.encodeId
            );

            if (!check) {
                state.recently.unshift(action.payload);
            }
        },
    },
});

export const { setIsAddRecentyly, addPlaylistRecently } =
    playlistRecentlySlice.actions;
export default playlistRecentlySlice.reducer;
