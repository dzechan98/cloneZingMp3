import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingComponents: false,
};

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loadingComponents = action.payload;
        },
    },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
