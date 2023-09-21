import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Image, ThirdHeading } from "./";
import { setIsAddRecentyly } from "../features/playlistRecentlySlice";

const SectionItem = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickPlaySong = () => {
        dispatch(setIsAddRecentyly(true));
        navigate(data?.link.split(".")[0]);
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <Image data={data} onClick={handleClickPlaySong} size={40} />
            <ThirdHeading description={data?.sortDescription} />
        </div>
    );
};

export default SectionItem;
