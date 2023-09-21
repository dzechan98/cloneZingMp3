import React from "react";
import icons from "../ultis/icons";
import PlayingIc from "../assets/icon-playing.gif";
const { BsPlayCircle } = icons;
const TogglePlaySong = ({ isPlaying, p1, p2, size }) => {
    return (
        <>
            {p1 === p2 && isPlaying ? (
                <img src={PlayingIc} alt="" className="w-5" />
            ) : (
                <BsPlayCircle size={size} />
            )}
        </>
    );
};

export default TogglePlaySong;
