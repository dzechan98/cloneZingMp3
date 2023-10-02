import React from "react";
import { useSelector } from "react-redux";
import { TogglePlaySong } from "./";

const Image = ({ data, onClick = () => {}, size = "20" }) => {
    const { isPlaying, songId } = useSelector((state) => state.player);

    return (
        <div className="group w-full h-full">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                    src={data?.thumbnailM}
                    alt=""
                    className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all"
                />
                <span
                    className={`rounded-lg bg-overlay absolute inset-0 items-center justify-center cursor-pointer 
                    ${
                        songId === data.encodeId && isPlaying
                            ? "flex"
                            : "hidden group-hover:flex"
                    }`}
                    onClick={onClick}
                >
                    <TogglePlaySong
                        isPlaying={isPlaying}
                        p1={songId}
                        p2={data.encodeId}
                        size={size}
                    />
                </span>
            </div>
        </div>
    );
};

export default Image;
