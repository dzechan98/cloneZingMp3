import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Player, Header, SidebarRight } from "../components";
const Layout = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 100) {
                headerRef.current.style.backgroundColor = "#191226";
            } else {
                headerRef.current.style.backgroundColor = "#170f23";
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="flex text-main">
            <div className="w-[240px] flex-none relative bg-sb">
                <SidebarLeft />
            </div>
            <div className="w-[calc(100%-240px)] bg-main min-h-screen">
                <div
                    className="px-[59px] h-[70px] flex items-center mb-5 transition-all fixed w-[calc(100%-240px)] left-[240px] z-[9997]"
                    ref={headerRef}
                >
                    <Header />
                </div>
                <div className="w-full mt-[70px] mb-[120px]">
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
