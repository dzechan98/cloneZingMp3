import React, { useEffect, useState } from "react";
import Zingmp3Api from "../../apis/Zingmp3Api";
import { useParams } from "react-router-dom";
import { ListSong, Icons, Button } from "../../components";
import moment from "moment";
import icons from "../../ultis/icons";
import PlayingIc from "../../assets/icon-playing.gif";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId } from "../../features/playerSlice";

const { BsPlayCircle, BsPauseCircle } = icons;

const PlaylistPage = () => {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const { songId, isPlaying } = useSelector((state) => state.player);
    const [playlist, setPlaylist] = useState({});

    //Kiểm tra xem bài hát hiện tại có nằm trong playlist
    const checkPlaylist = playlist?.song?.items?.some(
        (item) => item?.encodeId === songId
    );
    const handleClickButton = () => {
        if (!checkPlaylist) {
            //Random bài hát
            const index = Math.floor(
                Math.random() * playlist?.song?.items?.length
            );
            //Kiểm tra bài hát vừa mới random có nằm trong danh sách nhạc VIP
            if (playlist?.song?.items[index]?.streamingStatus === 1) {
                dispatch(setIsPlaying(true));
            } else {
                dispatch(setIsPlaying(false));
            }

            dispatch(setSongId(playlist?.song?.items[index]?.encodeId));
            return null;
        }

        dispatch(setIsPlaying(isPlaying ? false : true));
    };
    useEffect(() => {
        const fecthDetailPlaylist = async () => {
            try {
                const response = await Zingmp3Api.getDetailPlaylist(playlistId);
                if (response?.err === 0) {
                    setPlaylist(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fecthDetailPlaylist();
    }, []);
    return (
        <div className="w-full mt-10 text-[#ffffff80] text-sm ">
            <div className="flex gap-[5%]">
                <div className="w-[300px] flex flex-col items-center">
                    <div className="relative overflow-hidden w-[300px] h-[300px] rounded-lg group cursor-pointer mb-4">
                        <img
                            src={playlist?.thumbnailM}
                            alt=""
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all"
                        />
                        {isPlaying && checkPlaylist && (
                            <span
                                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full border border-at block p-3"
                                onClick={() => {}}
                            >
                                <img
                                    src={PlayingIc}
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </span>
                        )}
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
                    <Button
                        className="min-w-[180px] rounded-full bg-[#9b4de0] gap-1 my-5 text-[16px] text-at"
                        onClick={handleClickButton}
                    >
                        {!checkPlaylist ? (
                            <>
                                <BsPlayCircle size={20} />
                                PHÁT NGẪU NHIÊN
                            </>
                        ) : isPlaying ? (
                            <>
                                <BsPauseCircle size={20} />
                                TẠM DỪNG
                            </>
                        ) : (
                            <>
                                <BsPlayCircle size={20} />
                                TIẾP TỤC PHÁT
                            </>
                        )}
                    </Button>
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
