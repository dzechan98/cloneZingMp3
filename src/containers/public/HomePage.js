import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../features/homeSlice";
import { BannerSlider, NewRelease, Section } from "../../components";
import Zingmp3Api from "../../apis/Zingmp3Api";
const HomePage = () => {
    const dispatch = useDispatch();
    const {
        hEditorTheme,
        hEditorTheme2,
        hEditorTheme3,
        hEditorTheme4,
        hArtistTheme,
    } = useSelector((state) => state.home);
    useEffect(() => {
        const fetchDataHome = async () => {
            try {
                const response = await Zingmp3Api.getHome();
                console.log(response);
                dispatch(getHome(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataHome();
    }, []);

    const cc = useSelector((state) => state.home);
    console.log(cc);

    return (
        <div className="w-full">
            <BannerSlider />
            <NewRelease />
            <Section data={hEditorTheme} />
            <Section data={hEditorTheme2} />
            <Section data={hEditorTheme3} />
            <Section data={hEditorTheme4} />
            <Section data={hArtistTheme} />
        </div>
    );
};

export default HomePage;
