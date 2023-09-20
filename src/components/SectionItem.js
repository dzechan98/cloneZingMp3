import React from "react";
import icons from "../ultis/icons";
import { useNavigate } from "react-router-dom";

const { BsPlayCircle } = icons;
const SectionItem = ({ data }) => {
    const navigate = useNavigate();
    console.log(data);
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="group">
                <div className="relative w-full rounded-lg overflow-hidden">
                    <img
                        src={data?.thumbnail}
                        alt=""
                        className="w-full rounded-lg group-hover:scale-110 transition-all"
                    />
                    <span
                        className="rounded-lg bg-overlay hidden absolute inset-0 items-center justify-center cursor-pointer group-hover:flex"
                        onClick={() => navigate(data?.link.split(".")[0])}
                    >
                        <BsPlayCircle size={40} />
                    </span>
                </div>
            </div>
            <p className="text-sx text-[#ffffff80]">
                {data?.sortDescription.length > 40
                    ? `${data?.sortDescription.slice(0, 40)}...`
                    : data?.sortDescription}
            </p>
        </div>
    );
};

export default SectionItem;
