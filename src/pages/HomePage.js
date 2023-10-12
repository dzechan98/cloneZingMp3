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
    Loading,
} from "../components";
import Zingmp3Api from "../apis/Zingmp3Api";
import { setLoading } from "../features/loadingSlice";
const HomePage = () => {
    const dispatch = useDispatch();
    const { loadingComponents } = useSelector((state) => state.loading);
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
                dispatch(setLoading(true));
                const response = await Zingmp3Api.getHome();
                dispatch(setLoading(false));
                dispatch(getHome(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataHome();
    }, []);

    return (
        <div className="w-full h-full mb-10">
            {!loadingComponents && (
                <>
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
                </>
            )}
            {loadingComponents && <Loading />}
        </div>
    );
};

export default HomePage;
