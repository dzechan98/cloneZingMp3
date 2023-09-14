import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";
const { BsArrowRight, BsArrowLeft } = icons;

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-6 w-full">
                <div className="flex items-center gap-4">
                    <span>
                        <BsArrowLeft size={24} />
                    </span>
                    <span>
                        <BsArrowRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div>dang nhap</div>
        </div>
    );
};

export default Header;
