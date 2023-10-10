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
                    className={`min-w-[100px] border transition-all text-dark dark:text-light rounded-full font-semibold ${
                        region === item.region
                            ? "bg-b-button dark:bg-b-button-dark border-transparent"
                            : "bg-transparent border-main dark:border-main-dark"
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
