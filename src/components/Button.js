import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({
    className,
    type = "button",
    to,
    text = "lg:text-sm text-[12px]",
    onClick = () => {},
    children,
}) => {
    const style = `p-2 sm:px-4 sm:py-2 font-medium ${text} cursor-pointer flex items-center justify-center ${className}`;

    if (to) {
        return (
            <NavLink to={to} className={style}>
                {children}
            </NavLink>
        );
    }

    return (
        <button type={type} className={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
