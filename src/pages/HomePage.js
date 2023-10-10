import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../features/homeSlice";
import {
    BannerSlider,
    NewRelease,
    Section,
    PlaylistRecently,
    NewRankingReleased,
    Footer,
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
        h100,
        hAlbum,
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

    return (
        <div className="w-full mb-10">
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
            <NewRankingReleased data={hNewrelease} secondHeading />
            <Section data={h100} artists secondHeading />
            <Section data={hAlbum} hAlbum />
            <Footer />
        </div>
    );
};

export default HomePage;
