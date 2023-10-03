import React from "react";
import { Category } from "./";
import { NavLink } from "react-router-dom";
const ThirdHeading = ({
    title,
    description,
    status,
    sizeTitle = 20,
    sizeDesc = 20,
    fontSizeDesc = "text-sm",
    height,
    artists,
    onClick = () => {},
}) => {
    let length = 0;
    return (
        <>
            {title && (
                <div className="text-left max-w-max relative">
                    <h2
                        className={`text-left font-bold inline text-sm text-at ${
                            onClick ? "hover:text-main-hv cursor-pointer" : ""
                        }`}
                        onClick={onClick}
                    >
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
                    className={`w-full text-left font-semibold ${fontSizeDesc} text-main-100 ${height}`}
                >
                    {artists?.length > 0
                        ? artists.map((item, index) => {
                              if (length + item.name.length < sizeDesc) {
                                  if (artists.length === 1) {
                                      length += item.name.length;
                                      return (
                                          <NavLink
                                              className="hover:underline hover:text-main-hv"
                                              key={index}
                                              to={item?.link}
                                          >
                                              {item.name}
                                          </NavLink>
                                      );
                                  }
                                  length += item.name.length + 2;
                                  return (
                                      <NavLink
                                          className="hover:underline hover:text-main-hv"
                                          key={index}
                                          to={item?.link}
                                      >
                                          {`${item.name}, `}
                                      </NavLink>
                                  );
                              }
                              if (length < sizeDesc) {
                                  length += item.name.length;
                                  return (
                                      <NavLink
                                          className="hover:underline hover:text-main-hv"
                                          key={index}
                                          to={item?.link}
                                      >
                                          ...
                                      </NavLink>
                                  );
                              }
                          })
                        : description.length > sizeDesc
                        ? `${description.slice(0, sizeDesc)}...`
                        : description}
                </p>
            )}
        </>
    );
};

export default ThirdHeading;
