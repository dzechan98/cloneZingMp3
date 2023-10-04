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

    getArtist: (name) => {
        const url = "/artist";
        const params = { name };
        return axiosClient.get(url, { params });
    },

    getListAritstSong: (id, page, count) => {
        const url = "/listartistsong";
        const params = { id, page, count };
        return axiosClient.get(url, { params });
    },

    getArtist: (name) => {
        const url = "/artist";
        const params = { name };
        return axiosClient.get(url, { params });
    },

    search: (keyword) => {
        const url = "/search";
        const params = { keyword };
        return axiosClient.get(url, { params });
    },

    getTop100: () => {
        const url = "/top100";
        return axiosClient.get(url);
    },

    getChart: () => {
        const url = "/chart";
        return axiosClient.get(url);
    },

    getNewReleaseChart: () => {
        const url = "/newreleasechart";
        return axiosClient.get(url);
    },
};

export default Zingmp3Api;
