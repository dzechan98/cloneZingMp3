import React from "react";
import { Heading, Image } from "./";
import { useNavigate } from "react-router-dom";
const PlaylistRecently = ({ title, recently }) => {
    const navigate = useNavigate();
    const handleClickPlaySong = (item) => {
        navigate(item?.link.split(".")[0]);
    };
    return (
        <div className="w-full mb-20">
            <Heading className="mb-5">{title}</Heading>
            <div className="grid grid-cols-7 gap-3">
                {recently.length > 0 &&
                    recently
                        .slice(0, 7)
                        .map((item) => (
                            <Image
                                data={item}
                                key={item.encodeId}
                                size={40}
                                onClick={() => handleClickPlaySong(item)}
                            />
                        ))}
            </div>
        </div>
    );
};

export default PlaylistRecently;
