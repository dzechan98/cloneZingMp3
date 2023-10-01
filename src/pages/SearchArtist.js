import React from "react";
import { Artists } from "./SearchAll";
import { useSelector } from "react-redux";
const SearchArtist = () => {
    const { searchData } = useSelector((state) => state.player);
    return <Artists active searchData={searchData}></Artists>;
};

export default SearchArtist;
