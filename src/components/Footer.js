import React from "react";
import footer1 from "../assets/img/footer1.png";
import footer2 from "../assets/img/footer2.png";
import footer3 from "../assets/img/footer3.png";
import footer4 from "../assets/img/footer4.png";
import footer5 from "../assets/img/footer5.png";
import footer6 from "../assets/img/footer6.png";
import footer7 from "../assets/img/footer7.png";
import footer8 from "../assets/img/footer8.png";
import footer9 from "../assets/img/footer9.png";
import footer10 from "../assets/img/footer10.png";
import footer11 from "../assets/img/footer11.png";
import footer12 from "../assets/img/footer12.png";
import footer13 from "../assets/img/footer13.png";
import footer14 from "../assets/img/footer14.png";
import footer15 from "../assets/img/footer15.png";
import footer16 from "../assets/img/footer16.png";

const Images = [
    { src: footer1 },
    { src: footer2 },
    { src: footer3 },
    { src: footer4 },
    { src: footer5 },
    { src: footer6 },
    { src: footer7 },
    { src: footer8 },
    { src: footer9 },
    { src: footer10 },
    { src: footer11 },
    { src: footer12 },
    { src: footer13 },
    { src: footer14 },
    { src: footer15 },
    { src: footer16 },
];

const Footer = () => {
    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-main-100 dark:text-main-dark mb-10">
                ĐỐI TÁC ÂM NHẠC
            </h2>
            <div className="px-10 w-full grid grid-cols-8 gap-x-5 gap-y-8">
                {Images.map((img, index) => (
                    <div
                        className="rounded-lg p-1 w-[100px] h-[60px] bg-light flex items-center justify-center"
                        key={index}
                    >
                        <img
                            src={img.src}
                            alt=""
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
