import React from "react";
import { NavLink } from "react-router-dom";
import { HeadingSearchComponent } from "../pages/SearchAll";
import { handleNumber } from "../ultis/func";
import Button from "./Button";
import { useSelector } from "react-redux";

const Artist = ({ data, q, link, title = " Nghệ Sĩ/OA", active }) => {
    const { width } = useSelector((state) => state.width);
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active} link={link} q={q}>
                {title}
            </HeadingSearchComponent>
            <div
                className={`w-full grid gap-3 lg:gap-6 ${
                    width > 468 && width < 640
                        ? "grid-cols-3"
                        : width <= 468 && width > 368
                        ? "grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }`}
            >
                {data?.artists?.length > 0 &&
                    data?.artists.slice(0, 5).map((item) => (
                        <div
                            className="flex items-center flex-col"
                            key={item.id}
                        >
                            <div className="w-full overflow-hidden cursor-pointer rounded-full mb-5">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-full rounded-full transition-all hover:scale-110"
                                />
                            </div>
                            <NavLink
                                className="text-main dark:text-main-dark font-bold text-sm hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
                                to={item.link}
                            >
                                {item.name}
                            </NavLink>
                            <span className="text-main-100 dark:text-main-100-dark text-[12px] mb-2">
                                {`${handleNumber(
                                    Number(item.totalFollow)
                                )} quan tâm`}
                            </span>
                            <Button className="bg-b-button dark:bg-b-button-dark text-light rounded-full shadow-2xl ">
                                QUAN TÂM
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Artist;
