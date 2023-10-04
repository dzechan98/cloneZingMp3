import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({
    className,
    type = "button",
    to,
    onClick = () => {},
    children,
}) => {
    const style = `px-4 py-2 font-medium text-sm cursor-pointer flex items-center justify-center ${className}`;

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
