import React, { useEffect } from "react";
import { Header, Slider } from "../../components";
import { useDispatch } from "react-redux";
import { getHome } from "../../features/homeSlice";
const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
    }, []);

    return (
        <div className="overflow-y-auto w-full h-[100vh] px-[59px]">
            <div className="h-[70px] flex items-center mb-5">
                <Header />
            </div>
            <div className="w-full">
                <Slider />
            </div>
        </div>
    );
};

export default HomePage;
