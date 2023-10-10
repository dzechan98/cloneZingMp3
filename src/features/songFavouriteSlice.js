import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    songFavourite: [],
};

const songFavouriteSlice = createSlice({
    name: "songFavourite",
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.songFavourite.push(action.payload);
        },
        removeSong: (state, action) => {
            state.songFavourite.splice(action.payload, 1);
        },
    },
});

export const { addSong, removeSong } = songFavouriteSlice.actions;

export default songFavouriteSlice.reducer;
