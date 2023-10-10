import React from "react";
import { Heading, ListSong } from "../components";
import { useSelector } from "react-redux";

const SongFavouritePage = () => {
    const { songFavourite } = useSelector((state) => state.songFavourite);
    console.log(songFavourite);
    return (
        <div className="w-full">
            <Heading className="mb-5" text="text-2xl">
                Bài hát yêu thích
            </Heading>
            <ListSong
                songs={songFavourite}
                scroll={false}
                showCategory={false}
            />
        </div>
    );
};

export default SongFavouritePage;
