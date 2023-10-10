import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongId } from "../features/playerSlice";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const BannerSlider = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { banner } = useSelector((state) => state.home);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                },
            },
        ],
    };
    const handleClickBanner = (item) => {
        //type=1 la bai hat

        if (item?.type === 1) {
            dispatch(setSongId(item?.encodeId));
        } else {
            navigate(`${item?.link.split(".")[0]}`);
        }
    };

    // console.log(banner);

    return (
        <div className="w-full">
            <Slider {...settings}>
                {banner?.map((item, index) => (
                    <div key={index} className="p-[10px] cursor-pointer">
                        <img
                            src={item.banner}
                            onClick={() => handleClickBanner(item)}
                            alt=""
                            className="w-full rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
