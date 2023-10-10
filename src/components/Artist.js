import React from "react";
import { NavLink } from "react-router-dom";
import { HeadingSearchComponent } from "../pages/SearchAll";
import { handleNumber } from "../ultis/func";
import Button from "./Button";

const Artist = ({ data, q, link, title = " Nghệ Sĩ/OA", active }) => {
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active} link={link} q={q}>
                {title}
            </HeadingSearchComponent>
            <div className="w-full grid grid-cols-5 gap-6">
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
                            <span className="text-main-100 dark:text-main-100 text-[12px] mb-2">
                                {`${handleNumber(
                                    Number(item.totalFollow)
                                )} quan tâm`}
                            </span>
                            <Button className="bg-b-button dark:bg-b-button text-at rounded-full border border-t-border">
                                QUAN TÂM
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Artist;
