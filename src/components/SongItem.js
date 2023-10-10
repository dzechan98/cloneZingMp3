import React from "react";
import { ThirdHeading, TogglePlaySong } from "./";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";

const SongItem = ({
    bg = "bg-b-active",
    bgDark = "bg-b-active-dark",
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
                active
                    ? bg
                    : encodeId === songId
                    ? `${bg} dark:${bgDark}`
                    : `hover:${bg} dark:hover:${bgDark}`
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
            <div className="text-main dark:text-main-100-dark flex flex-col text-[12px]">
                {type && <span>{type}</span>}
                <ThirdHeading
                    title={title}
                    description={artistsNames}
                    sizeDesc={20}
                    fontSizeDesc="text-[12px]"
                    artists={artists}
                />
                {releaseDate && (
                    <span>{moment(1000 * releaseDate).fromNow()}</span>
                )}
            </div>
        </div>
    );
};

export default SongItem;
