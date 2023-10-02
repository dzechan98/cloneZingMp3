import React from "react";
import ThirdHeading from "./ThirdHeading";
import moment from "moment";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const SlideRanking = ({ item, index }) => {
    const dispatch = useDispatch();
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
        <div className="flex gap-2 bg-at rounded-lg p-[10px] m-[10px]">
            <div className="w-[40%] ">
                <Image data={item} size={40} onClick={handleClick} />
            </div>
            <div className="flex flex-col justify-between gap-4">
                <div className="w-full">
                    <ThirdHeading
                        title={item.title}
                        sizeTitle={20}
                        artists={item.artists}
                        description={item.artistsNames}
                        height="h-10"
                    />
                </div>
                <div className="flex justify-between items-end">
                    <span
                        style={{
                            opacity: 0.4,
                            WebkitTextStroke: "1px #fff",
                            lineHeight: 1,
                            fontSize: "40px",
                            fontWeight: 900,
                            color: "transparent",
                        }}
                    >
                        #{index + 1}
                    </span>
                    <span className="text-main-100">
                        {moment(item?.releaseDate * 1000).format("DD.MM.YYYY")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SlideRanking;
