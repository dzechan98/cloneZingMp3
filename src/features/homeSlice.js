import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: [],
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getHome: (state, action) => {
            state.banner = action.payload?.items.find(
                (item) => item.sectionType === "banner"
            ).items;
        },
    },
});

export const { getHome } = homeSlice.actions;
export default homeSlice.reducer;
