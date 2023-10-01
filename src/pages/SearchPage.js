import React from "react";
import {
    Outlet,
    NavLink,
    useSearchParams,
    createSearchParams,
} from "react-router-dom";

const searchFilter = [
    {
        title: "TẤT CẢ",
        path: "/tim-kiem/tat-ca",
    },
    {
        title: "BÀI HÁT",
        path: "/tim-kiem/bai-hat",
    },
    {
        title: "PLAYLIST/ALBUM",
        path: "/tim-kiem/playlist",
    },
    {
        title: "NGHỆ SĨ/OA",
        path: "/tim-kiem/artist",
    },
];

const active =
    "relative text-at cursor-pointer p-1 h-full font-semibold before:absolute before:h-[2px] before:w-full before:bg-[#9b4de0] before:bottom-[-22px]";
const notActive = "hover:text-at p-1 cursor-pointer h-full font-semibold ";
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    console.log(q);
    return (
        <div className="w-full">
            <div className="flex items-center pb-5 mb-10 gap-5 h-[50px] text-sm border-b border-[#ffffff80]">
                <span className="text-3xl font-semibold">Kết Quả Tìm Kiếm</span>
                <div className="h-full flex items-center gap-8 text-xl">
                    {searchFilter.map((item, index) => (
                        <NavLink
                            to={{
                                pathname: item.path,
                                search: createSearchParams({
                                    q,
                                }).toString(),
                            }}
                            key={index}
                            className={({ isActive }) =>
                                isActive ? active : notActive
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default SearchPage;
