import React from "react";
import { PlaylistAlbum } from "./SearchAll";
import { useSelector } from "react-redux";
const SearchPlaylists = () => {
    const { searchData } = useSelector((state) => state.player);
    return (
        <PlaylistAlbum
            searchData={searchData}
            size={searchData.playlists.length}
            active
        />
    );
};

export default SearchPlaylists;
