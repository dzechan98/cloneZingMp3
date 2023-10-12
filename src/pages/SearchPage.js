import React from "react";
import { useSelector } from "react-redux";
import { Filter } from "./";

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
        title: "PLAYLIST",
        path: "/tim-kiem/playlist",
    },
    {
        title: "NGHỆ SĨ",
        path: "/tim-kiem/artist",
    },
];

const SearchPage = () => {
    const { searchData } = useSelector((state) => state.player);
    return (
        <Filter
            title="Kết Quả Tìm Kiếm"
            filter={searchFilter}
            searchData={searchData}
        ></Filter>
    );
};

export default SearchPage;
