import React from "react";
import { NavLink } from "react-router-dom";
const ThirdHeading = ({
    title,
    description,
    sizeTitle = 20,
    sizeDesc = 20,
    fontSizeDesc = "text-[12px] lg:text-sm ",
    height,
    status,
    artists,
    hideArtist = false,
    fontSizeTitle = "lg:text-sm text-[12px]",
    onClick = () => {},
}) => {
    let length = 0;
    return (
        <>
            {title && (
                <div className="text-left max-w-max relative">
                    <h2
                        className={`${fontSizeTitle} text-left font-bold inline-block ${
                            status === 2
                                ? "dark:text-main-100-dark"
                                : "text-dark dark:text-light"
                        } ${
                            onClick
                                ? "hover:text-main-hv dark:hover:text-main-hv-dark cursor-pointer"
                                : ""
                        }`}
                        onClick={onClick}
                    >
                        {title.length > sizeTitle
                            ? `${title.slice(0, sizeTitle)}...`
                            : title}
                    </h2>
                </div>
            )}
            {!hideArtist && description && (
                <p
                    className={`w-full text-left ${fontSizeDesc} text-main dark:text-main-100-dark ${height}`}
                >
                    {artists?.length > 0
                        ? artists.map((item, index) => {
                              if (length + item.name.length < sizeDesc) {
                                  if (artists.length === 1) {
                                      length += item.name.length;
                                      return (
                                          <NavLink
                                              className="hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
                                              key={index}
                                              to={item?.link}
                                          >
                                              {item.name}
                                          </NavLink>
                                      );
                                  }
                                  length += item.name.length + 2;
                                  if (index === artists.length - 1) {
                                      length -= 2;
                                      return (
                                          <NavLink
                                              className="hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
                                              key={index}
                                              to={item?.link}
                                          >
                                              {`${item.name}`}
                                          </NavLink>
                                      );
                                  }
                                  return (
                                      <NavLink
                                          className="hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
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
                                          className="hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
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
