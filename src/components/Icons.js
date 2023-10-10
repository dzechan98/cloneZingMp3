import React from "react";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../features/songFavouriteSlice";

const { AiOutlineHeart, MdOutlineMoreHoriz } = icons;
const Icons = ({ className, size = 20, bg = "", song }) => {
    const dispatch = useDispatch();
    const { songFavourite } = useSelector((state) => state.songFavourite);
    const check = songFavourite.findIndex(
        (item) => item.encodeId === song?.encodeId
    );

    const handleToggleHeart = () => {
        const index = songFavourite.findIndex(
            (item) => item.encodeId === song?.encodeId
        );
        if (index != -1) {
            dispatch(removeSong(index));
        } else dispatch(addSong(song));
    };
    return (
        <div
            className={`flex items-center gap-2 ${className} text-main dark:text-main-dark`}
        >
            <span
                className={`block p-2 hover:bg-b-active dark:hover:bg-b-active-dark rounded-full cursor-pointer ${bg}
                ${check !== -1 ? "!bg-red-500" : ""}`}
                onClick={handleToggleHeart}
            >
                <AiOutlineHeart size={size} />
            </span>
            <span
                className={`block p-2 hover:bg-b-active dark:hover:bg-b-active-dark rounded-full cursor-pointer ${bg}`}
            >
                <MdOutlineMoreHoriz size={size} />
            </span>
        </div>
    );
};

export default Icons;
