import React, { useEffect, useState } from "react";
import { ListSongSearch } from "./SearchAll";
import { useSelector } from "react-redux";
import Zingmp3Api from "../apis/Zingmp3Api";
const SearchSongs = () => {
    const { searchData } = useSelector((state) => state.player);
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const fecthListArtistSong = async () => {
            try {
                const res = await Zingmp3Api.getListAritstSong(
                    searchData.artists[0].id,
                    1,
                    200
                );
                if (res.err === 0) {
                    setSongs(res.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fecthListArtistSong();
    }, []);
    return (
        <ListSongSearch
            searchData={searchData}
            size={songs?.length}
            col="grid-cols-1"
            active
            songs={songs}
        />
    );
};

export default SearchSongs;
