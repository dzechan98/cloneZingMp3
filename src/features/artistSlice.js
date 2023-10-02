import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artistId: "",
};

const artistSlice = createSlice({
    name: "artist",
    initialState,
    reducers: {
        setArtistId: (state, action) => {
            state.artistId = action.payload;
        },
    },
});

export const { setArtistId } = artistSlice.actions;

export default artistSlice.reducer;
