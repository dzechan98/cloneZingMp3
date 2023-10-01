import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Player, Header, SidebarRight } from "../components";
const Layout = () => {
    return (
        <div className="flex text-main">
            <div className="w-[240px] flex-none relative bg-sb">
                <SidebarLeft />
            </div>
            <div className="w-[calc(100%-240px)] bg-main min-h-screen px-[59px]">
                <div className="h-[70px] flex items-center mb-5">
                    <Header />
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="h-[80px] w-screen fixed bottom-0 bg-player z-[9999]">
                <Player />
            </div>
            <SidebarRight />
        </div>
    );
};

export default Layout;
