import React from "react";
import icons from "../ultis/icons";
const { AiOutlineClose } = icons;
const Modal = ({ title, desc, titleButton, setOpenModal }) => {
    return (
        <div className="fixed w-[100vw] h-[100vh] left-0 top-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="bg-modal w-[340px] h-[200px] p-4 relative flex flex-col justify-center rounded-lg">
                <h3 className="text-lg text-at text-center mb-4 font-bold">
                    {title}
                </h3>
                <p className="text-sm text-[#ffffff80] text-center mb-4">
                    {desc}
                </p>
                <span
                    onClick={() => {
                        setOpenModal(false);
                    }}
                    className="absolute top-2 right-2 cursor-pointer"
                >
                    <AiOutlineClose size={20} />
                </span>
                <button className="rounded-full p-2 text-[#333] font-bold w-full text-center bg-bmodal">
                    {titleButton}
                </button>
            </div>
        </div>
    );
};

export default Modal;
