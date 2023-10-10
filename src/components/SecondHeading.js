import React from "react";
import { Button } from "./";
import icons from "../ultis/icons";
import { useNavigate } from "react-router-dom";
const { IoIosArrowForward } = icons;
const SecondHeading = ({ children, to }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (to) {
            navigate(to);
        }
    };
    return (
        <div className="flex items-center justify-between mb-5">
            {children}
            <div className="flex items-center hover:text-main-hv dark:hover:text-main-hv-dark transition-all font-semibold gap-1 cursor-pointer">
                <Button className="!p-0" onClick={handleClick}>
                    TẤT CẢ
                </Button>
                <span>
                    <IoIosArrowForward size={20} />
                </span>
            </div>
        </div>
    );
};

export default SecondHeading;
