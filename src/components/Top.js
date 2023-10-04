import React from "react";

const Top = ({
    index,
    color = "#fff",
    size = "40px",
    show = false,
    opacity = 0.4,
    className = "",
}) => {
    return (
        <span
            className={className}
            style={{
                opacity: opacity,
                WebkitTextStroke: `1px ${color}`,
                lineHeight: 1,
                fontSize: size,
                fontWeight: 900,
                color: "transparent",
            }}
        >
            {show ? `#${index + 1}` : index + 1}
        </span>
    );
};

export default Top;
