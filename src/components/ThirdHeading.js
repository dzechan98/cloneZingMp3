import React from "react";
import { Category } from "./";
import { NavLink } from "react-router-dom";
const ThirdHeading = ({
    title,
    description,
    status,
    sizeTitle = 25,
    sizeDesc = 40,
    fontSizeDesc = "text-sm",
    height,
    artists,
}) => {
    return (
        <>
            {title && (
                <div className="text-left max-w-max relative">
                    <h2 className="text-left font-bold inline text-sm text-at">
                        {title.length > sizeTitle
                            ? `${title.slice(0, sizeTitle)}...`
                            : title}
                    </h2>
                    {status === 2 && (
                        <Category className="bg-bmodal">PREMIUM</Category>
                    )}
                </div>
            )}
            {description && (
                <p
                    className={`w-full text-left font-semibold ${fontSizeDesc} text-main-100`}
                >
                    {artists?.length > 0
                        ? artists.map((item, index) => (
                              <NavLink
                                  className="hover:underline hover:text-main-hv"
                                  key={index}
                                  to={item?.link}
                              >
                                  {index === artists?.length - 1
                                      ? item?.name
                                      : `${item?.name}, `}
                              </NavLink>
                          ))
                        : description.length > sizeDesc
                        ? `${description.slice(0, sizeDesc)}...`
                        : description}
                </p>
            )}
        </>
    );
};

export default ThirdHeading;
