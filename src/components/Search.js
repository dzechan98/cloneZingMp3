import React, { useRef, useState } from "react";
import icons from "../ultis/icons";

const { AiOutlineSearch, MdShowChart, AiOutlineClose } = icons;
const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const handleFocus = () => {
        searchRef.current.style.borderRadius = "24px 24px 0 0";
        searchRef.current.style.backgroundColor = "#34224f";
    };
    const handleBlur = () => {
        searchRef.current.style.borderRadius = "24px";
        searchRef.current.style.backgroundColor = "#2f2739";
    };
    return (
        <div
            className="bg-[#2f2739] w-full rounded-[999px] relative"
            ref={searchRef}
        >
            <div className="flex items-center">
                <AiOutlineSearch size={30} className="mx-2" />
                <input
                    type="text"
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="py-2 bg-[transparent] flex-auto peer pr-12"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                <div className="absolute hidden peer-focus:block top-9 left-0 right-0 z-40 bg-[#34224f] text-[14px] px-[10px] py-[13px] text-[#fff] rounded-b-3xl">
                    <h2 className="font-bold px-[10px] mb-2 pt-2">
                        Đề xuất cho bạn
                    </h2>
                    <ul>
                        <li className="py-2 px-[10px] flex items-center gap-2">
                            <MdShowChart />
                            <a href="">tu noi toi sinh ra</a>
                        </li>
                        <li className="py-2 px-[10px] flex items-center gap-2">
                            <MdShowChart />
                            <a href="">tu noi toi sinh ra</a>
                        </li>
                        <li className="py-2 px-[10px] flex items-center gap-2">
                            <MdShowChart />
                            <a href="">tu noi toi sinh ra</a>
                        </li>
                        <li className="py-2 px-[10px] flex items-center gap-2">
                            <MdShowChart />
                            <a href="">tu noi toi sinh ra</a>
                        </li>
                        <li className="py-2 px-[10px] flex items-center gap-2">
                            <MdShowChart />
                            <a href="">tu noi toi sinh ra</a>
                        </li>
                    </ul>
                </div>
            </div>

            {searchValue && (
                <span
                    className="absolute right-5 top-1/2 translate-y-[-50%] cursor-pointer"
                    onClick={() => {
                        setSearchValue("");
                        inputRef.current.focus();
                    }}
                >
                    <AiOutlineClose size={20} />
                </span>
            )}
        </div>
    );
};

export default Search;
