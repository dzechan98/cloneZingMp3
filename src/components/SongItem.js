import React from "react";
import { ThirdHeading, TogglePlaySong } from "./";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";

const SongItem = ({
    bg = "bg-at",
    title,
    encodeId,
    releaseDate,
    artistsNames,
    thumbnail,
    active,
    type,
    artists,
    onClick = () => {},
    imgSize = "w-[40px]",
}) => {
    const { songId, isPlaying } = useSelector((state) => state.player);
    return (
        <div
            className={`w-full p-[10px] flex gap-2 transition-all rounded-lg group ${
                active ? bg : encodeId === songId ? bg : `hover:${bg}`
            }`}
        >
            <div className="relative">
                <img
                    src={thumbnail}
                    alt=""
                    className={`${imgSize} rounded-lg`}
                />
                <span
                    className={`overlay rounded-lg bg-overlay absolute inset-0 items-center justify-center cursor-pointer ${
                        encodeId === songId ? "flex" : "hidden group-hover:flex"
                    }`}
                    onClick={onClick}
                >
                    <TogglePlaySong
                        size={25}
                        isPlaying={isPlaying}
                        p1={encodeId}
                        p2={songId}
                    />
                </span>
            </div>
            <div className="text-main-100 flex flex-col">
                {type && <span className="text-[12px]">{type}</span>}
                <ThirdHeading
                    title={title}
                    description={artistsNames}
                    sizeDesc={20}
                    fontSizeDesc="text-[12px]"
                    artists={artists}
                />
                {releaseDate && (
                    <span className="text-[12px]">
                        {moment(1000 * releaseDate).fromNow()}
                    </span>
                )}
            </div>
        </div>
    );
};

export default SongItem;
