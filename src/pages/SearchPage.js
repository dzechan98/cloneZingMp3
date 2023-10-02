import React from "react";
import { useSelector } from "react-redux";
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
    "relative text-at cursor-pointer h-full font-semibold before:absolute before:h-[2px] before:w-full before:bg-[#9b4de0] before:bottom-[-22px]";
const notActive = "hover:text-at cursor-pointer h-full font-semibold ";
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const { searchData } = useSelector((state) => state.player);
    return (
        <div className="w-full px-[59px]">
            <div className="flex pb-4 mb-10 items-center gap-5 h-[50px] text-sm border-b border-[#ffffff80]">
                <h2 className="text-[18px] font-semibold">Kết Quả Tìm Kiếm</h2>
                <div className="flex items-center gap-8 text-[18px]">
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
            <div className="w-full">
                {searchData?.counter?.song !== 0 ? (
                    <Outlet></Outlet>
                ) : (
                    <div className="w-full h-[300px] bg-at flex items-center justify-center">
                        <h2 className="text-center font-bold text-2xl text-main">
                            Không có kết quả được tìm thấy
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
