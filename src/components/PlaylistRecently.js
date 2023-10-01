import React from "react";
import { Heading, Image } from "./";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
const PlaylistRecently = ({ title, recently }) => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
    };
    const navigate = useNavigate();
    const handleClickPlaySong = (item) => {
        navigate(item?.link.split(".")[0]);
    };
    return (
        <div className="w-full mb-20">
            <Heading className="mb-5">{title}</Heading>
            <Slider {...settings}>
                {recently.length > 0 &&
                    recently?.map((item) => (
                        <div className="p-[10px]" key={item.encodeId}>
                            <Image
                                data={item}
                                size={40}
                                onClick={() => handleClickPlaySong(item)}
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default PlaylistRecently;
