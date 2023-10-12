import React from "react";
import { useSelector } from "react-redux";
import {
    Outlet,
    NavLink,
    useSearchParams,
    createSearchParams,
} from "react-router-dom";

const active =
    "relative text-dark dark:text-light cursor-pointer h-full font-semibold before:absolute before:h-[2px] before:w-full before:bg-b-button before:bottom-0";
const notActive =
    "text-dark hover:text-dark dark:text-main-100-dark dark:hover:text-light cursor-pointer h-full font-semibold ";
const Filter = ({ title, filter, searchData, data = false, children }) => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    return (
        <div className="w-full">
            <div className="flex mb-10 items-center gap-5 h-8 lg:h-[50px] text-sm border-b border-t-border">
                <h2 className="text-dark dark:text-light hidden sm:block h-full text-[12px] sm:text-sm lg:text-lg font-semibold">
                    {title}
                </h2>
                <div className="h-full flex items-center gap-2 sm:gap-8 text-[12px] sm:text-sm lg:text-lg">
                    {filter.map((item, index) => (
                        <NavLink
                            to={{
                                pathname: item.path,
                                search:
                                    q != null
                                        ? createSearchParams({
                                              q,
                                          }).toString()
                                        : "",
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
                {searchData?.counter?.song !== 0 || data ? (
                    <Outlet></Outlet>
                ) : (
                    <div className="w-full h-[300px] bg-b-active dark:bg-b-active-dark flex items-center justify-center">
                        <h2 className="text-center font-bold text-2xl text-main">
                            Không có kết quả được tìm thấy
                        </h2>
                    </div>
                )}
            </div>
            {data && <div className="w-full">{children}</div>}
        </div>
    );
};

export default Filter;
