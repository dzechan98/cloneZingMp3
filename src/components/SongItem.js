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
    status,
    active,
    type,
    artists,
    onClick = () => {},
    imgSize = "w-[40px]",
}) => {
    const { songId, isPlaying } = useSelector((state) => state.player);
    const { width } = useSelector((state) => state.width);
    return (
        <div
            className={`w-full p-[10px] flex gap-2 transition-all rounded-lg group ${
                active
                    ? `${bg} dark:${bgDark}`
                    : encodeId === songId
                    ? `${bg} dark:${bgDark}`
                    : `hover:${bg} dark:hover:${bgDark}`
            }`}
        >
            <div className={`relative h-full`}>
                <img
                    src={thumbnail}
                    alt=""
                    className={`${imgSize} h-full object-cover rounded-lg`}
                />
                <span
                    className={`text-light overlay rounded-lg bg-overlay absolute inset-0 items-center justify-center cursor-pointer ${
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
                    sizeTitle={
                        width < 320
                            ? 12
                            : width <= 520
                            ? 25
                            : width > 768 && width < 1023
                            ? 15
                            : 20
                    }
                    description={artistsNames}
                    sizeDesc={20}
                    status={status}
                    fontSizeTitle="lg:text-sm text-[12px]"
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
