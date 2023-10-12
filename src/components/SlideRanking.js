import React from "react";
import ThirdHeading from "./ThirdHeading";
import moment from "moment";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId } from "../features/playerSlice";
import Top from "./Top";

const SlideRanking = ({ item, index }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const { isPlaying } = useSelector((state) => state.player);

    const handleClick = () => {
        if (isPlaying) {
            dispatch(setIsPlaying(false));
            return null;
        }
        dispatch(setSongId(item?.encodeId));
        dispatch(setIsPlaying(true));
    };
    return (
        <div className="flex gap-2 bg-b-active dark:bg-b-active-dark rounded-lg p-[10px] m-[10px]">
            <div className="w-[40%] ">
                <Image data={item} size={40} onClick={handleClick} />
            </div>
            <div className="w-full flex flex-col justify-between gap-4">
                <div className="w-full">
                    <ThirdHeading
                        title={item.title}
                        sizeTitle={20}
                        artists={item.artists}
                        sizeDesc={20}
                        description={item.artistsNames}
                        height="h-10"
                    />
                </div>
                <div className="w-full flex justify-between items-end">
                    <Top
                        index={index}
                        show
                        color={theme === "dark" ? "#fff" : "#6b3483"}
                    />
                    <span className="text-main-100 dark:text-main-100-dark">
                        {moment(item?.releaseDate * 1000).format("DD.MM.YYYY")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SlideRanking;
