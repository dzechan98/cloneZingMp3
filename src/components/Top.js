import React from "react";

const Top = ({
    index,
    color = "#fff",
    show = false,
    opacity = 0.4,
    className = "",
}) => {
    return (
        <span
            className={`text-xl sm:text-[30px] ${className}`}
            style={{
                opacity: opacity,
                WebkitTextStroke: `1px ${color}`,
                lineHeight: 1,
                fontWeight: 900,
                color: "transparent",
            }}
        >
            {show ? `#${index + 1}` : index + 1}
        </span>
    );
};

export default Top;
