import React, { useRef, useState } from "react";
import icons from "../ultis/icons";
import Zingmp3Api from "../apis/Zingmp3Api";
import { useDispatch } from "react-redux";
import { setSearchData } from "../features/playerSlice";
import { useNavigate, createSearchParams } from "react-router-dom";

const { AiOutlineSearch, AiOutlineClose } = icons;
const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            try {
                const response = await Zingmp3Api.search(searchValue);
                if (response?.err === 0) {
                    dispatch(setSearchData(response?.data));
                } else {
                    dispatch(setSearchData([]));
                }
                navigate({
                    pathname: `/tim-kiem/tat-ca`,
                    search: createSearchParams({
                        q: searchValue,
                    }).toString(),
                });
            } catch (error) {
                dispatch(setSearchData([]));
            }
        }
    };

    return (
        <div
            className="bg-search dark:bg-search-dark w-full rounded-[999px] relative"
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
                    onKeyUp={handleSearch}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
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
