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
                    className={`md:min-w-[100px] border transition-all rounded-full font-semibold ${
                        region === item.region
                            ? "bg-b-button text-light dark:bg-b-button-dark border-transparent"
                            : "bg-transparent text-dark dark:text-light border-main dark:border-main-dark"
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
