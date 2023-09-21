import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Player, Header } from "../components";
const Layout = () => {
    return (
        <div className="flex text-main">
            <div className="w-[240px] flex-none relative bg-sb">
                <SidebarLeft />
            </div>
            <div className="flex-auto bg-main min-h-screen px-[59px]">
                <div className="h-[70px] flex items-center mb-5">
                    <Header />
                </div>
                <Outlet></Outlet>
            </div>
            <div className="h-[80px] w-screen fixed bottom-0 bg-player z-30">
                <Player />
            </div>
        </div>
    );
};

export default Layout;
