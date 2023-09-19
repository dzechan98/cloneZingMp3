import React from "react";

const Category = ({ className, children }) => {
    return (
        <span
            className={`px-1 absolute left-[105%] top-1/2 translate-y-[-50%] text-[8px] rounded-lg font-bold inline-block text-at ${className}`}
        >
            {children}
        </span>
    );
};

export default Category;
