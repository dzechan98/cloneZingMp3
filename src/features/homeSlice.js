import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: [],
    newRelease: {},
    hEditorTheme: {},
    hEditorTheme2: {},
    hEditorTheme3: {},
    hEditorTheme4: {},
    hArtistTheme: {},
    hNewrelease: {},
    h100: {},
    hAlbum: {},
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getHome: (state, action) => {
            state.banner = action.payload?.items.find(
                (item) => item.sectionType === "banner"
            ).items;
            state.newRelease = action.payload?.items.find(
                (item) => item.sectionType === "new-release"
            );
            state.hEditorTheme = action.payload?.items.find(
                (item) => item.sectionId === "hEditorTheme"
            );
            state.hEditorTheme2 = action.payload?.items.find(
                (item) => item.sectionId === "hEditorTheme2"
            );
            state.hEditorTheme3 = action.payload?.items.find(
                (item) => item.sectionId === "hEditorTheme3"
            );
            state.hEditorTheme4 = action.payload?.items.find(
                (item) => item.sectionId === "hEditorTheme4"
            ).items;
            state.hArtistTheme = action.payload?.items.find(
                (item) => item.sectionId === "hArtistTheme"
            );
            state.hNewrelease = action.payload?.items.find(
                (item) => item.sectionId === "hNewrelease"
            );
            state.h100 = action.payload?.items.find(
                (item) => item.sectionId === "h100"
            );
            state.hAlbum = action.payload?.items.find(
                (item) => item.sectionId === "hAlbum"
            );
        },
    },
});

export const { getHome } = homeSlice.actions;
export default homeSlice.reducer;
