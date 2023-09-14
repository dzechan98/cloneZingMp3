import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

const Layout = () => {
    return (
        <div className="w-full flex bg-[#170f23] text-[#dadada]">
            <div className="w-[240px] flex-none">
                <SidebarLeft />
            </div>
            <div className="flex-auto">
                <Outlet></Outlet>
            </div>
            {/* <div className="w-[330px] flex-none">
                <SidebarRight />
            </div> */}
        </div>
    );
};

export default Layout;
