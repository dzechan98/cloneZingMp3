import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlbumPage, HomePage, Layout } from "./containers/public";
function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/playlist/:title/:playlistId"
                            element={<AlbumPage />}
                        />
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
