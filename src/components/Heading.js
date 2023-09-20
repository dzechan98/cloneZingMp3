import React from "react";

const Heading = ({ className, children }) => {
    return (
        <h2 className={`text-at text-[20px] font-semibold mb-5 ${className}`}>
            {children}
        </h2>
    );
};

export default Heading;
