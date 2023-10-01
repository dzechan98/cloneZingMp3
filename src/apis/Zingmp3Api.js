import axiosClient from "./axiosClient";

const Zingmp3Api = {
    getHome: () => {
        const url = "/home";
        return axiosClient.get(url);
    },

    getSong: (id) => {
        const url = "/song";
        const params = { id };
        return axiosClient.get(url, { params });
    },

    getDetailSong: (id) => {
        const url = "/infosong";
        const params = { id };
        return axiosClient.get(url, { params });
    },
    getDetailPlaylist: (id) => {
        const url = "/detailplaylist";
        const params = { id };
        return axiosClient.get(url, { params });
    },

    search: (keyword) => {
        const url = "/search";
        const params = { keyword };
        return axiosClient.get(url, { params });
    },
};

export default Zingmp3Api;
