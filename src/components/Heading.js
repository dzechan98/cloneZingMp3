import React from "react";

const Heading = ({ className = "", text = "text-[20px]", children }) => {
    return (
        <h2 className={`text-at ${text} font-semibold ${className}`}>
            {children}
        </h2>
    );
};

export default Heading;
