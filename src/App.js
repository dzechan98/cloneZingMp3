import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    PlaylistPage,
    HomePage,
    Layout,
    SearchAll,
    SearchPage,
    SearchSongs,
    SearchPlaylists,
    SearchArtist,
    ArtistPage,
    ArtistSongPage,
    ArtistPlaylistPage,
    NewReleasePage,
    Top100Page,
    NewRankingReleasedPage,
    RecentlyPage,
    SongFavouritePage,
} from "./pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWidth } from "./features/widthSlide";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleResize = () => {
            dispatch(setWidth(window.innerWidth));
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/playlist/:title/:playlistId"
                            element={<PlaylistPage />}
                        />
                        <Route
                            path="/album/:title/:playlistId"
                            element={<PlaylistPage />}
                        />

                        <Route element={<SearchPage />}>
                            <Route
                                path="/tim-kiem/tat-ca"
                                element={<SearchAll />}
                            />
                            <Route
                                path="/tim-kiem/bai-hat"
                                element={<SearchSongs />}
                            />
                            <Route
                                path="/tim-kiem/playlist"
                                element={<SearchPlaylists />}
                            />
                            <Route
                                path="/tim-kiem/artist"
                                element={<SearchArtist />}
                            />
                        </Route>
                        <Route path="/:name" element={<ArtistPage />} />
                        <Route path="/nghe-si/:name" element={<ArtistPage />} />
                        <Route
                            path="/:name/bai-hat"
                            element={<ArtistSongPage />}
                        />
                        <Route
                            path="/nghe-si/:name/bai-hat"
                            element={<ArtistSongPage />}
                        />
                        <Route
                            path="/:name/single"
                            element={<ArtistPlaylistPage />}
                        />
                        <Route
                            path="/nghe-si/:name/single"
                            element={<ArtistPlaylistPage />}
                        />
                        <Route
                            path="/new-release/song"
                            element={<NewReleasePage />}
                        />
                        <Route path="/top100" element={<Top100Page />} />
                        <Route
                            path="/moi-phat-hanh"
                            element={<NewRankingReleasedPage />}
                        />
                        <Route
                            path="/mymusic/history/:category"
                            element={<RecentlyPage />}
                        />
                        <Route
                            path="/mymusic/song/favorite"
                            element={<SongFavouritePage />}
                        />
                        <Route path="/zing-chart" element={<HomePage />} />
                        <Route path="/radio" element={<HomePage />} />
                        <Route path="/mymusic" element={<HomePage />} />
                        <Route path="/hub" element={<HomePage />} />
                        <Route path="*" element={<HomePage />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
