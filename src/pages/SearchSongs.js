import React, { useEffect, useState } from "react";
import { ListSongSearch } from "./SearchAll";
import { useDispatch, useSelector } from "react-redux";
import Zingmp3Api from "../apis/Zingmp3Api";
import { setLoading } from "../features/loadingSlice";
import { Loading } from "../components";
const SearchSongs = () => {
    const dispatch = useDispatch();
    const { searchData } = useSelector((state) => state.player);
    const { loadingComponents } = useSelector((state) => state.loading);
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const fecthListArtistSong = async () => {
            try {
                dispatch(setLoading(true));
                const res = await Zingmp3Api.getListAritstSong(
                    searchData.artists[0].id,
                    1,
                    200
                );
                if (res.err === 0) {
                    setSongs(res.data.items);
                }
                dispatch(setLoading(false));
            } catch (error) {
                console.log(error);
            }
        };
        fecthListArtistSong();
    }, []);
    return (
        <>
            {!loadingComponents && (
                <ListSongSearch
                    searchData={searchData}
                    size={songs?.length}
                    col="grid-cols-1"
                    active
                    songs={songs}
                />
            )}
            {loadingComponents && <Loading />}
        </>
    );
};

export default SearchSongs;
