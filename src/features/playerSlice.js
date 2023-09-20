import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songId: "",
    isPlaying: false,
    isRepeating: false,
    isRandomSong: false,
    listSong: [],
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setSongId: (state, action) => {
            state.songId = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setListSong: (state, action) => {
            state.listSong = action.payload;
        },
        setIsRepeating: (state, action) => {
            state.isRepeating = action.payload;
        },
        setIsRandomSong: (state, action) => {
            state.isRandomSong = action.payload;
        },
    },
});

export const {
    setSongId,
    setIsPlaying,
    setListSong,
    setIsRepeating,
    setIsRandomSong,
} = playerSlice.actions;
export default playerSlice.reducer;
