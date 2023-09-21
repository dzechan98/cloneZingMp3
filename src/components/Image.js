import React from "react";
import { useSelector } from "react-redux";
import { TogglePlaySong } from "./";

const Image = ({ data, onClick = () => {}, size = "20" }) => {
    const { isPlaying } = useSelector((state) => state.player);

    return (
        <div className="group w-full">
            <div className="relative w-full rounded-lg overflow-hidden">
                <img
                    src={data?.thumbnailM}
                    alt=""
                    className="w-full rounded-lg group-hover:scale-110 transition-all"
                />
                <span
                    className="rounded-lg bg-overlay hidden absolute inset-0 items-center justify-center cursor-pointer group-hover:flex"
                    onClick={onClick}
                >
                    <TogglePlaySong
                        isPlaying={isPlaying}
                        p2={data.encodeId}
                        size={size}
                    />
                </span>
            </div>
        </div>
    );
};

export default Image;
