import React, { useState } from "react";
import { Button, Heading, TogglePlaySong, SecondHeading } from "./";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const { IoIosArrowForward } = icons;
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
    const { isPlaying, songId } = useSelector((state) => state.player);
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
                    newRelease?.items?.[region]?.slice(0, 12).map((item) => (
                        <div
                            key={item.encodeId}
                            className={`p-[10px] flex gap-2 transition-all rounded-lg group ${
                                item.encodeId === songId
                                    ? "bg-at"
                                    : "hover:bg-at"
                            }`}
                        >
                            <div className="relative">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-[60px] h-[60px] rounded-lg"
                                />
                                <span
                                    className={`overlay rounded-lg bg-overlay absolute inset-0 items-center justify-center cursor-pointer ${
                                        item.encodeId === songId
                                            ? "flex"
                                            : "hidden group-hover:flex"
                                    }`}
                                    onClick={() => handleClick(item)}
                                >
                                    <TogglePlaySong
                                        size={25}
                                        isPlaying={isPlaying}
                                        p1={item.encodeId}
                                        p2={songId}
                                    />
                                </span>
                            </div>
                            <div className="text-main-100 flex flex-col">
                                <h2 className="text-at text-semibold">
                                    {item.title}
                                </h2>
                                <span className="text-[12px]">
                                    {item.artistsNames}
                                </span>
                                <span className="text-[12px]">
                                    {moment(1000 * item.releaseDate).fromNow()}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewRelease;
