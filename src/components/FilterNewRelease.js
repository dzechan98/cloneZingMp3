import React from "react";
import Button from "./Button";

const optionFilter = [
    {
        title: "TẤT CẢ",
        region: "all",
    },
    {
        title: " VIỆT NAM",
        region: "vPop",
    },
    {
        title: "QUỐC TẾ",
        region: "others",
    },
];
const FilterNewRelease = ({ region, setRegion }) => {
    const handleChangeRegion = (value) => {
        setRegion(value);
    };
    return (
        <>
            {optionFilter.map((item, index) => (
                <Button
                    key={index}
                    className={`min-w-[100px] border transition-all text-at rounded-full font-semibold ${
                        region === item.region
                            ? "bg-[#9b4de0] border-[#9b4de0]"
                            : "bg-transparent border-main"
                    }`}
                    onClick={() => handleChangeRegion(item.region)}
                >
                    {item.title}
                </Button>
            ))}
        </>
    );
};

export default FilterNewRelease;
