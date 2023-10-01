import React, { useState } from "react";
import { Button, Heading, SecondHeading, SongItem } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const optionFilter = [
    {
        title: "TẤT CẢ",
        region: "all",
    },
    {
        title: " VIỆT NAM",
        region: "vPop",
    },
    {
        title: "QUỐC TẾ",
        region: "others",
    },
];
const NewRelease = () => {
    const { isPlaying } = useSelector((state) => state.player);
    const { newRelease } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    const [region, setRegion] = useState("all");

    const handleClick = (item) => {
        if (!isPlaying) {
            if (item.streamingStatus === 1) {
                dispatch(setIsPlaying(true));
            } else {
                dispatch(setIsPlaying(false));
            }
            dispatch(setSongId(item.encodeId));
        } else {
            dispatch(setIsPlaying(false));
        }
    };
    const handleChangeRegion = (value) => {
        setRegion(value);
    };
    return (
        <div className="w-full mb-20">
            <Heading className="mb-5">{newRelease?.title}</Heading>
            <SecondHeading>
                <div className="flex items-center gap-5">
                    {optionFilter.map((item, index) => (
                        <Button
                            key={index}
                            className={`min-w-[100px] border transition-all text-at rounded-full font-semibold ${
                                region === item.region
                                    ? "bg-[#9b4de0] border-[#9b4de0]"
                                    : "bg-transparent border-main"
                            }`}
                            onClick={() => handleChangeRegion(item.region)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </SecondHeading>
            <div className="grid grid-cols-3 gap-x-3">
                {newRelease &&
                    newRelease?.items?.[region]
                        ?.slice(0, 12)
                        .map((item, index) => (
                            <SongItem
                                key={index}
                                encodeId={item.encodeId}
                                title={item.title}
                                artistsNames={item.artistsNames}
                                releaseDate={item.releaseDate}
                                thumbnail={item.thumbnail}
                                imgSize="w-[60px]"
                                onClick={() => handleClick(item)}
                            />
                        ))}
            </div>
        </div>
    );
};

export default NewRelease;
