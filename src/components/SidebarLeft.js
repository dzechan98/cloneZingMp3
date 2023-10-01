import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
    sidebarMenu,
    sidebarSecondaryMenu,
    sidebarThirdaryMenu,
} from "../ultis/menu";
import icons from "../ultis/icons";
const { FaRegPlayCircle, AiFillPlusCircle } = icons;

const activeStyle =
    "relative px-[21px] py-3 flex items-center gap-x-4 text-at text-[14px] font-semibold bg-at before:w-[3px] before:h-full before:bg-[#9b4de0] before:absolute before:left-[0]";
const notActiveStyle =
    "relative px-[21px] py-3 flex items-center gap-x-4 text-main text-[14px] font-semibold hover:text-at group";

const SidebarLeft = () => {
    return (
        <div className="max-h-[calc(100vh-80px)] w-[240px] fixed z-20">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-[120px] h-[40px]" />
                </NavLink>
            </div>
            <div>
                {sidebarMenu.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.end}
                        key={index}
                        className={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }
                    >
                        {item.icons}
                        <span>{item.title}</span>
                        <FaRegPlayCircle
                            size={20}
                            className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                        />
                    </NavLink>
                ))}
            </div>
            <div className="w-full py-4 px-[21px]">
                <div className="w-full h-[1px] bg-[#393243]"></div>
            </div>
            <div className="w-full h-[240px] overflow-y-scroll pb-2">
                {sidebarSecondaryMenu.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.end}
                        key={index}
                        className={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }
                    >
                        {item.icons}
                        <span>{item.title}</span>
                        <FaRegPlayCircle
                            size={20}
                            className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                        />
                    </NavLink>
                ))}
                <div className="my-5 px-[21px]">
                    <div className="p-3 bg-gradient-to-r from-[#614de6] to-[#ba60d7] rounded-lg flex items-center flex-col gap-3">
                        <p className="text-center text-at text-[12px] font-bold">
                            Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
                        </p>
                        <button className="text-[#32323d] px-3 py-[6px] bg-modal text-[12px] font-bold rounded-[999px]">
                            NÂNG CẤP TÀI KHOẢN
                        </button>
                    </div>
                </div>
                {sidebarThirdaryMenu.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.end}
                        key={index}
                        className={notActiveStyle}
                    >
                        {item.icons}
                        <span>{item.title}</span>
                        {item.isHoverIcons && (
                            <FaRegPlayCircle
                                size={20}
                                className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                            />
                        )}
                    </NavLink>
                ))}
            </div>
            <div className="border-t border-[#393243] px-[21px] py-3 cursor-pointer">
                <div className="flex items-center gap-3">
                    <AiFillPlusCircle size={25} />
                    <span className="text-[14px] font-bold">
                        Tạo playlist mới
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;
