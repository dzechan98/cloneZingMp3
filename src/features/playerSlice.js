import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songId: "",
    songData: {},
    isPlaying: false,
    isRepeating: false,
    isRandomSong: false,
    listSong: [],
    searchData: {},
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
        setSongData: (state, action) => {
            state.songData = action.payload;
        },
        setSearchData: (state, action) => {
            state.searchData = action.payload;
        },
    },
});

export const {
    setSongId,
    setIsPlaying,
    setListSong,
    setIsRepeating,
    setIsRandomSong,
    setSongData,
    setSearchData,
} = playerSlice.actions;
export default playerSlice.reducer;
