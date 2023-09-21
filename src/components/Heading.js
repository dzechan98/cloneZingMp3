import React from "react";

const Heading = ({ className = "", children }) => {
    return (
        <h2 className={`text-at text-[20px] font-semibold ${className}`}>
            {children}
        </h2>
    );
};

export default Heading;
