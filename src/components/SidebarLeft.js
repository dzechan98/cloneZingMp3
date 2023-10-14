import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo192.png";
import {
    sidebarMenu,
    sidebarSecondaryMenu,
    sidebarThirdaryMenu,
} from "../ultis/menu";
import icons from "../ultis/icons";

const { FaRegPlayCircle, AiFillPlusCircle, IoIosArrowForward, IoIosArrowBack } =
    icons;

const SidebarLeft = ({ open, setOpen, width }) => {
    const activeStyle = `relative lg:px-[21px] py-3 flex items-center ${
        open ? "justify-stretch px-[21px]" : "justify-center"
    } lg:justify-stretch gap-x-4 text-main-100 dark:text-light text-[14px] font-medium bg-b-active dark:bg-b-active-dark before:w-[3px] before:h-full before:bg-b-button dark:before:bg-b-button-dark before:absolute before:left-[0]`;
    const notActiveStyle = `relative lg:px-[21px] py-3 flex items-center ${
        open ? "justify-stretch px-[21px]" : "justify-center"
    } lg:justify-stretch gap-x-4 text-main dark:text-main-dark text-[14px] font-medium hover:text-main-100 dark:hover:text-light group`;

    const handleClickOpenSidebar = () => {
        setOpen(!open);
    };
    return (
        <div
            className={`bg-sb dark:bg-sb-dark min-h-[calc(100vh-80px)] transition-all duration-500 lg:w-[240px] fixed z-[1009] shadow-2xl ${
                !open ? "w-[50px] sm:w-[70px]" : "w-[240px]"
            }`}
        >
            <div
                className={`w-full h-[50px] flex items-center ${
                    width > 1023 || open
                        ? "justify-start py-[15px] px-[25px]"
                        : "justify-center"
                }`}
            >
                <NavLink to="/">
                    <img
                        src={width > 1023 || open ? logo : logo2}
                        alt="logo"
                        className={`transition-all ${
                            width > 1023 || open
                                ? "w-[120px] h-[40px]"
                                : "w-10 h-10 object-cover"
                        }`}
                    />
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
                        {(width > 1023 || open) && (
                            <>
                                <span>{item.title}</span>
                                <FaRegPlayCircle
                                    size={20}
                                    className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                                />
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
            <div className="w-full py-4 px-[21px]">
                <div className="w-full h-[1px] bg-t-border"></div>
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
                        {(width > 1023 || open) && (
                            <>
                                <span>{item.title}</span>
                                <FaRegPlayCircle
                                    size={20}
                                    className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                                />
                            </>
                        )}
                    </NavLink>
                ))}
                {width > 1023 && (
                    <div className="my-5 px-[21px]">
                        <div className="p-3 bg-gradient-to-r from-[#614de6] to-[#ba60d7] rounded-lg flex items-center flex-col gap-3">
                            <p className="text-center text-dark text-[12px] font-bold">
                                Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
                            </p>
                            <button className="text-dark px-3 py-[6px] bg-bmodal text-[12px] font-bold rounded-[999px]">
                                NÂNG CẤP TÀI KHOẢN
                            </button>
                        </div>
                    </div>
                )}
                {sidebarThirdaryMenu.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.end}
                        key={index}
                        className={notActiveStyle}
                    >
                        {item.icons}
                        {(width > 1023 || open) && (
                            <>
                                <span>{item.title}</span>
                                {item.isHoverIcons && (
                                    <FaRegPlayCircle
                                        size={20}
                                        className="absolute opacity-0 right-[21px] group-hover:opacity-100 transition-all"
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>

            <div
                className={`h-full border-t-border p-2 lg:px-[21px] lg:py-3 cursor-pointer ${
                    width > 1023 || open ? "border-t" : ""
                }`}
            >
                <div className="h-full flex items-center justify-center gap-2">
                    {(width > 1023 || open) && (
                        <>
                            <AiFillPlusCircle size={25} />
                            <span className="text-[14px] font-bold">
                                Tạo playlist mới
                            </span>
                        </>
                    )}
                    {width <= 1023 && (
                        <span
                            className="bg-light dark:bg-b-button-dark p-[2px] rounded-full text-dark dark:text-light"
                            onClick={handleClickOpenSidebar}
                        >
                            {open && <IoIosArrowBack size={20} />}
                            {!open && <IoIosArrowForward size={20} />}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;
