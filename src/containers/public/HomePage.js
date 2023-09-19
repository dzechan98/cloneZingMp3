import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHome } from "../../features/homeSlice";
import { Header, BannerSlider } from "../../components";
import Zingmp3Api from "../../apis/Zingmp3Api";
const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchDataHome = async () => {
            try {
                const response = await Zingmp3Api.getHome();
                dispatch(getHome(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataHome();
    }, []);

    return (
        //<div className="overflow-y-auto w-full h-[100vh] px-[59px]">
            <div className="w-full">
                <BannerSlider />
            </div>
        //</div>
    );
};

export default HomePage;
