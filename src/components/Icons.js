import React from "react";
import icons from "../ultis/icons";

const { AiOutlineHeart, MdOutlineMoreHoriz } = icons;
const Icons = ({ className, size = 20, bg = "", onClick = () => {} }) => {
    return (
        <div className={`flex items-center gap-2 ${className} text-main`}>
            <span
                className={`block p-2 hover:bg-at rounded-full cursor-pointer ${bg}`}
                onClick={onClick}
            >
                <AiOutlineHeart size={size} />
            </span>
            <span
                className={`block p-2 hover:bg-at rounded-full cursor-pointer ${bg}`}
            >
                <MdOutlineMoreHoriz size={size} />
            </span>
        </div>
    );
};

export default Icons;
