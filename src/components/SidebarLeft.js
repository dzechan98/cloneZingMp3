import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../ultis/menu";

const activeStyle =
    "px-[21px] py-3 flex items-center gap-x-4 text-[#fff] text-[14px] font-semibold bg-[#3a3344]";
const notActiveStyle =
    "px-[21px] py-3 flex items-center gap-x-4 text-[#dadada] text-[14px] font-semibold hover:text-[#fff]";

const SidebarLeft = () => {
    return (
        <div className="bg-[#231b2e] h-[100vh] w-full overflow-y-auto">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-[120px] h-[40px]" />
                </NavLink>
            </div>
            <div className="">
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
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
