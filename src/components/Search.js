import React from "react";
import icons from "../ultis/icons";

const { AiOutlineSearch } = icons;
const Search = () => {
    return (
        <div className="bg-[#2f2739] flex items-center w-full rounded-[999px] px-2">
            <div>
                <AiOutlineSearch size={30} />
            </div>
            <input
                type="text"
                className="py-2 bg-[transparent] flex-auto"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
};

export default Search;
