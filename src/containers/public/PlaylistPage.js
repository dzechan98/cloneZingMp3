import React, { useEffect, useState } from "react";
import Zingmp3Api from "../../apis/Zingmp3Api";
import { useParams } from "react-router-dom";
import { ListSong, Icons } from "../../components";
import moment from "moment";
import icons from "../../ultis/icons";

const { BsPlayCircle } = icons;

const PlaylistPage = () => {
    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState({});
    useEffect(() => {
        const fecthDetailPlaylist = async () => {
            const response = await Zingmp3Api.getDetailPlaylist(playlistId);
            console.log(response);
            if (response?.err === 0) {
                setPlaylist(response.data);
            }
        };
        fecthDetailPlaylist();
    }, []);
    console.log(playlist);
    return (
        <div className="w-full mt-10 text-[#ffffff80] text-sm ">
            <div className="flex gap-[5%]">
                <div className="w-[300px] flex flex-col items-center">
                    <div className="overflow-hidden w-[300px] h-[300px] rounded-lg group cursor-pointer mb-4">
                        <img
                            src={playlist?.thumbnailM}
                            alt=""
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all"
                        />
                    </div>
                    <h2 className="text-lg text-at mb-2 ">{playlist?.title}</h2>
                    <span>
                        Cập nhật:{" "}
                        {moment
                            .unix(playlist?.contentLastUpdate)
                            .format("DD/MM/YYYY")}
                    </span>
                    <span>{playlist?.artistsNames}</span>
                    <span>
                        {Math.round(playlist?.like / 1000)}K người yêu thích
                    </span>
                    <button className="px-5 py-2 rounded-full bg-[#9b4de0] flex items-center gap-1 my-5 text-[16px] text-at">
                        <BsPlayCircle size={20} />
                        PHÁT NGẪU NHIÊN
                    </button>
                    <Icons bg="bg-at" />
                </div>
                <div className="flex-auto">
                    <p className="text-[#ffffff80] mb-4">
                        Lời tựa
                        <span className="text-at">
                            {" "}
                            {playlist?.description}
                        </span>
                    </p>
                    <ListSong
                        songs={playlist?.song?.items}
                        totol={playlist?.song?.total}
                        totolDuration={playlist?.song?.totalDuration}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlaylistPage;
