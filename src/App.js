import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage, Login, Layout } from "./containers/public";
import path from "./ultis/path";
function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={path.PUBLIC} element={<Layout />}>
                        <Route path={path.HOME} element={<HomePage />} />
                        <Route path={path.LOGIN} element={<Login />} />
                        <Route path={path.STAR} element={<HomePage />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
