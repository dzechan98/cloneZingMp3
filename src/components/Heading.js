import React from "react";

const Heading = ({
    className = "",
    text = "sm:text-[20px] text-sm",
    children,
}) => {
    return (
        <h2
            className={`text-dark dark:text-light ${text} font-semibold ${className}`}
        >
            {children}
        </h2>
    );
};

export default Heading;
