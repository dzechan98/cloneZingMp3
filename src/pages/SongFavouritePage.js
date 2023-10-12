import React from "react";
import { Heading, ListSong } from "../components";
import { useSelector } from "react-redux";

const SongFavouritePage = () => {
    const { songFavourite } = useSelector((state) => state.songFavourite);
    return (
        <div className="w-full">
            <Heading className="mb-5" text="sm:text-2xl text-xl">
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
