import React from "react";
import loadingImg from "../assets/loading-components.png";
const Loading = () => {
    return (
        <div className="bg-b-main dark:bg-b-main-dark overflow-hidden fixed bottom-0 top-0 right-0 left-[50px] sm:left-[70px] lg:left-[240px] flex items-center justify-center">
            <img
                src={loadingImg}
                className="w-[140px] h-[140px]"
                alt="loading"
            />
        </div>
    );
};

export default Loading;
