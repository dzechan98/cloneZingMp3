import React from "react";
import { Filter } from "./";
import { useSelector } from "react-redux";
import { ListSong, Section } from "../components";
import { useParams } from "react-router-dom";

const filter = [
    {
        title: "BÀI HÁT",
        path: "/mymusic/history/song",
    },
    {
        title: "PLAYLIST",
        path: "/mymusic/history/playlist",
    },
    {
        title: "MV",
        path: "/mymusic/history/video",
    },
    {
        title: "RADIO",
        path: "/mymusic/history/radio",
    },
    {
        title: "PODCAST",
        path: "/mymusic/history/podcast",
    },
];

const RecentlyPage = () => {
    const { listSongRecently } = useSelector((state) => state.songRecently);
    const { recently } = useSelector((state) => state.playlistRecently);
    const data = {
        items: recently,
    };
    const { category } = useParams();
    return (
        <Filter title="Phát gần đây" filter={filter} data>
            {category === "song" ? (
                <ListSong
                    scroll={false}
                    songs={listSongRecently}
                    showCategory={false}
                />
            ) : category === "playlist" ? (
                <Section data={data} size={recently.length} artists />
            ) : (
                <div className="w-full h-[300px] bg-b-active flex items-center justify-center">
                    <h2 className="text-center font-bold text-2xl text-main">
                        {`Không có ${category} nghe gần đây`}
                    </h2>
                </div>
            )}
        </Filter>
    );
};

export default RecentlyPage;
