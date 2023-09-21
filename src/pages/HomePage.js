import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../features/homeSlice";
import {
    BannerSlider,
    NewRelease,
    Section,
    PlaylistRecently,
    NewRankingReleased,
} from "../components";
import Zingmp3Api from "../apis/Zingmp3Api";
const HomePage = () => {
    const dispatch = useDispatch();

    const { recently, title } = useSelector((state) => state.playlistRecently);
    const {
        hEditorTheme,
        hEditorTheme2,
        hEditorTheme3,
        hEditorTheme4,
        hArtistTheme,
        hNewrelease,
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

    // const cc = useSelector((state) => state.home);
    // console.log(cc);

    return (
        <div className="w-full">
            <BannerSlider />
            {recently && recently.length > 0 && (
                <PlaylistRecently title={title} recently={recently} />
            )}
            <NewRelease />
            <Section data={hEditorTheme} />
            <Section data={hEditorTheme2} />
            <Section data={hEditorTheme3} />
            <Section data={hEditorTheme4} />
            <Section data={hArtistTheme} />
            <NewRankingReleased data={hNewrelease} />
        </div>
    );
};

export default HomePage;
