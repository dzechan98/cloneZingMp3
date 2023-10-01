import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSongRecently: [],
};

const songRecentlySlice = createSlice({
    name: "songRecently",
    initialState,
    reducers: {
        setListSongRecently: (state, action) => {
            const newArr = state.listSongRecently.filter(
                (item) => item.encodeId !== action.payload.encodeId
            );
            newArr.push(action.payload);
            state.listSongRecently = newArr;
        },
    },
});

export const { setListSongRecently } = songRecentlySlice.actions;
export default songRecentlySlice.reducer;
