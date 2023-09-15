import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Zingmp3Api from "../apis/Zingmp3Api";

const initialState = {
    banner: [],
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHome.fulfilled, (state, action) => {
            state.banner = action.payload?.items.find(
                (item) => item.sectionType === "banner"
            ).items;
        });
    },
});

export const getHome = createAsyncThunk("home/getHome", async () => {
    try {
        const response = await Zingmp3Api.getHome();
        return response.data;
    } catch (error) {
        return [];
    }
});

export default homeSlice.reducer;
