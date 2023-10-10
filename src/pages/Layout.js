import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Player, Header, SidebarRight } from "../components";
import { useSelector } from "react-redux";
const Layout = () => {
    const [open, setOpen] = useState(false);
    const { width } = useSelector((state) => state.width);
    const headerRef = useRef(null);

    return (
        <div className="flex text-main w-full">
            <SidebarLeft open={open} setOpen={setOpen} width={width} />
            <div className="relative left-[60px] lg:left-[240px] lg:w-[calc(100%-240px)] w-[calc(100%-60px)] bg-b-main dark:bg-b-main-dark min-h-screen transition-all">
                <div
                    className="px-[10px] md:px-[40px] lg:px-[59px] transition-all h-[70px] flex items-center mb-5 fixed z-[9997] bg-[#c1ccd5] dark:bg-[#191226] lg:w-[calc(100%-240px)] lg:left-[240px] w-[calc(100%-60px)] left-[60px]"
                    ref={headerRef}
                >
                    <Header width={width} />
                </div>
                <div className="w-full mt-[70px] mb-[120px] transition-all px-[10px] md:px-[40px] lg:px-[59px] overflow-hidden">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="h-[80px] w-screen fixed bottom-0 bg-player dark:bg-player-dark z-[10003]">
                <Player width={width} />
            </div>
            <SidebarRight />
        </div>
    );
};

export default Layout;
