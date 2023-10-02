import React from "react";
import { useSelector } from "react-redux";
import { Artist } from "../components";
const SearchArtist = () => {
    const { searchData } = useSelector((state) => state.player);
    return <Artist active data={searchData}></Artist>;
};

export default SearchArtist;
