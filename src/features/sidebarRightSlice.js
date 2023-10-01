import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const sidebarRightSlice = createSlice({
    name: "sidebarRight",
    initialState,
    reducers: {
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});
export const { setIsOpen } = sidebarRightSlice.actions;
export default sidebarRightSlice.reducer;
