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
} from "./pages";
function App() {
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
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
