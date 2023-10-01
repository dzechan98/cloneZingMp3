import React from "react";
import { ListSongSearch } from "./SearchAll";
import { useSelector } from "react-redux";
const SearchSongs = () => {
    const { searchData } = useSelector((state) => state.player);
    return (
        <ListSongSearch
            searchData={searchData}
            size={searchData.songs.length}
            col="grid-cols-1"
            active
        ></ListSongSearch>
    );
};

export default SearchSongs;
