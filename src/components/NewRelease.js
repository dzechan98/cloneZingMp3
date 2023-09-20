import React, { useState } from "react";
import { Button, Heading } from "./";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import PlayingIc from "../assets/icon-playing.gif";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const { IoIosArrowForward, BsPlayCircle } = icons;
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
    console.log("new", newRelease);

    const handleClick = (encodeId) => {
        dispatch(setSongId(encodeId));
        dispatch(setIsPlaying(true));
    };
    const handleChangeRegion = (value) => {
        setRegion(value);
    };
    return (
        <div className="w-full mb-20">
            <Heading>{newRelease?.title}</Heading>
            <div className="flex items-center justify-between mb-10">
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
                <div className="flex items-center hover:text-main-hv transition-all font-semibold gap-1 cursor-pointer">
                    <Button className="!p-0">TẤT CẢ</Button>
                    <span>
                        <IoIosArrowForward size={20} />
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-3">
                {newRelease &&
                    newRelease?.items?.[region]?.slice(0, 12).map((item) => (
                        <div
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
                                    onClick={() => handleClick(item.encodeId)}
                                >
                                    {item.encodeId === songId && isPlaying ? (
                                        <img
                                            src={PlayingIc}
                                            alt=""
                                            className="w-4 h-4"
                                        />
                                    ) : (
                                        <BsPlayCircle size={20} />
                                    )}
                                </span>
                            </div>
                            <div className="text-[#ffffff80] flex flex-col">
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
