import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlaylistPage, HomePage, Layout } from "./pages";
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
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
