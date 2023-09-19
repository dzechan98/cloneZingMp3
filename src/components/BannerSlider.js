import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import icons from "../ultis/icons";
import { setSongId } from "../features/playerSlice";
import { useNavigate } from "react-router-dom";

const { TfiArrowCircleLeft, TfiArrowCircleRight } = icons;
const currentSlide = [0, 1, 2];
const slideFirst = ["animate-slide-left", "order-first", "z-10"];
const slideSecond = ["animate-slide-left2", "order-2", "z-2"];
const slideThird = ["animate-slide-right", "order-last", "z-20"];

const BannerSlider = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { banner } = useSelector((state) => state.home);
    const [resetDelay, setResetDelay] = useState(false);
    const sliders = document.querySelectorAll(".slider-item");
    const size = sliders.length - 1;

    const animationSlide = () => {
        sliders.forEach((slide, index) => {
            slide?.classList.remove(
                ...slideFirst,
                ...slideSecond,
                ...slideThird
            );

            if (currentSlide.some((item) => item === index)) {
                sliders[index].style.display = "block";
            } else {
                sliders[index].style.display = "none";
            }
        });
        currentSlide.forEach((item, index) => {
            if (index === 2) {
                sliders[item]?.classList.add(...slideThird);
            } else if (index === 0) {
                sliders[item]?.classList.add(...slideFirst);
            } else sliders[item]?.classList.add(...slideSecond);
        });
    };

    const nextSlide = (size) => {
        for (let i = 0; i < currentSlide.length; i++) {
            currentSlide[i] =
                currentSlide[i] === size ? 0 : (currentSlide[i] += 1);
        }
    };

    const prevSlide = (size) => {
        for (let i = 0; i < currentSlide.length; i++) {
            currentSlide[i] =
                currentSlide[i] === 0 ? size : (currentSlide[i] -= 1);
        }
    };

    const handleNextSlide = () => {
        nextSlide(size);
        animationSlide();
        setResetDelay(!resetDelay);
    };

    const handlePrevSlide = () => {
        prevSlide(size);
        animationSlide();
        setResetDelay(!resetDelay);
    };

    const handleClickBanner = (item) => {
        //type=1 la bai hat

        if (item?.type === 1) {
            dispatch(setSongId(item?.encodeId));
        } else {
            navigate(`${item?.link.split(".")[0]}`);
        }
        console.log(item);
    };

    useEffect(() => {
        const sliderId = setInterval(() => {
            animationSlide();
            nextSlide(size);
        }, 3000);
        return () => {
            clearInterval(sliderId);
        };
    }, [banner, resetDelay]);

    return (
        <div className="w-full gap-[2%] flex overflow-hidden relative group">
            {banner?.map((item, index) => (
                <img
                    key={index}
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    alt=""
                    className="cursor-pointer slider-item flex-1 w-[32%] rounded-lg"
                />
            ))}
            <span
                className="absolute left-4 top-1/2 translate-y-[-50%] z-30 opacity-0 group-hover:opacity-80 cursor-pointer"
                onClick={handlePrevSlide}
            >
                <TfiArrowCircleLeft size={45} />
            </span>
            <span
                className="absolute right-4 top-1/2 translate-y-[-50%] z-30 opacity-0 group-hover:opacity-80 cursor-pointer"
                onClick={handleNextSlide}
            >
                <TfiArrowCircleRight size={45} />
            </span>
        </div>
    );
};

export default BannerSlider;
