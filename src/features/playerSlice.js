import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songId: "",
    isPlaying: false,
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
    },
});

export const { setSongId, setIsPlaying, setListSong } = playerSlice.actions;
export default playerSlice.reducer;
