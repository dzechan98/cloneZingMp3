import React from "react";
import { Button } from "./";
import icons from "../ultis/icons";
const { IoIosArrowForward } = icons;
const SecondHeading = ({ children }) => {
    return (
        <div className="flex items-center justify-between mb-10">
            {children}
            <div className="flex items-center hover:text-main-hv transition-all font-semibold gap-1 cursor-pointer">
                <Button className="!p-0">TẤT CẢ</Button>
                <span>
                    <IoIosArrowForward size={20} />
                </span>
            </div>
        </div>
    );
};

export default SecondHeading;
