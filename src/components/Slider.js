import React from "react";
import { useSelector } from "react-redux";
const Slider = () => {
    const { banner } = useSelector((state) => state.home);
    return (
        <div className="w-full grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
            {banner?.map((item, index) => (
                <figure key={index} className="w-full">
                    <img
                        src={item.banner}
                        alt=""
                        className="w-full rounded-lg"
                    />
                </figure>
            ))}
        </div>
    );
};

export default Slider;
