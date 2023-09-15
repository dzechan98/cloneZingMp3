// import axios from "../axios";

// export const getHome = () =>
//     new Promise(async (resolve, reject) => {
//         try {
//             const response = await axios({
//                 url: "/home",
//                 method: "get",
//             });
//             resolve(response);
//         } catch (error) {
//             reject(error);
//         }
//     });
import axiosClient from "./axiosClient";

const Zingmp3Api = {
    getHome: () => {
        const url = "/home";
        return axiosClient.get(url);
    },
};

export default Zingmp3Api;
