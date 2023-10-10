import React, { useEffect, useState } from "react";
import Zingmp3Api from "../apis/Zingmp3Api";
import { NavLink, useParams } from "react-router-dom";
import { ListSong, Icons, Button, Artist } from "../components";
import moment from "moment";
import icons from "../ultis/icons";
import PlayingIc from "../assets/icon-playing.gif";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setListSong, setSongId } from "../features/playerSlice";
import {
    addPlaylistRecently,
    setIsAddRecentyly,
} from "../features/playlistRecentlySlice";
import { toast } from "react-toastify";

const { BsPlayCircle, BsPauseCircle } = icons;

const PlaylistPage = () => {
    const { width } = useSelector((state) => state.width);
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const { songId, isPlaying, songData } = useSelector(
        (state) => state.player
    );
    const { isAddRecently } = useSelector((state) => state.playlistRecently);
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
                dispatch(setSongId(playlist?.song?.items[index]?.encodeId));
            } else {
                toast.warning("Bài hát chỉ dành cho tài khoản VIP, PRI");
            }
            return null;
        }

        if (songData.streamingStatus === 1) {
            dispatch(setIsPlaying(isPlaying ? false : true));
        }
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

    //Xử lí khi click vào album => tự động phát bài hát đầu tiên trong album và thêm album vào danh sách phát gần đây
    useEffect(() => {
        if (isAddRecently && Object.keys(playlist).length > 0) {
            if (playlist?.song?.items[0].streamingStatus === 1) {
                dispatch(setIsPlaying(true));
                dispatch(setSongId(playlist?.song?.items[0]?.encodeId));
                dispatch(setListSong(playlist?.song?.items));
                dispatch(addPlaylistRecently(playlist));
                dispatch(setIsAddRecentyly(false));
            }
        }
    }, [playlist]);

    return (
        <div className="w-full mt-10 text-main-100 dark:text-main-100-dark text-[12px] lg:text-sm">
            <div className="flex gap-5 mb-10 flex-col md:flex-row">
                <div className="w-full md:w-[30%] lg:w-[300px] text-center flex flex-col items-center">
                    <div
                        className={`relative overflow-hidden h-auto rounded-lg group cursor-pointer mb-4 ${
                            width > 468 && width <= 768
                                ? "w-[300px]"
                                : width < 1200
                                ? "w-[160px]"
                                : "w-[300px]"
                        }`}
                    >
                        <img
                            src={playlist?.thumbnailM}
                            alt=""
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all"
                        />
                        {isPlaying && checkPlaylist && (
                            <span
                                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full border border-t-border dark:border-light block p-3"
                                onClick={() => {
                                    dispatch(setIsPlaying(false));
                                }}
                            >
                                <img
                                    src={PlayingIc}
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </span>
                        )}
                    </div>
                    <h2 className="text-lg text-dark dark:text-light mb-2 ">
                        {playlist?.title}
                    </h2>
                    <span>
                        Cập nhật:{" "}
                        {moment
                            .unix(playlist?.contentLastUpdate)
                            .format("DD/MM/YYYY")}
                    </span>
                    <div className="w-full">
                        {playlist?.artists?.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link}
                                className="hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
                            >
                                {playlist?.aritst?.length - 1 === index
                                    ? item?.name
                                    : `${item?.name}, `}
                            </NavLink>
                        ))}
                    </div>
                    <span>
                        {playlist?.like > 1000
                            ? `${Math.round(
                                  playlist?.like / 1000
                              )}K người yêu thích`
                            : `${Math.round(playlist?.like)} người yêu thích`}
                    </span>
                    <Button
                        className="lg:min-w-[180px] rounded-full bg-b-button dark:bg-b-button-dark gap-1 my-5 text-[10px] lg:text-[16px] text-dark dark:text-light"
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
                </div>
                <div className="flex-auto">
                    <p className="text-main-100 dark:text-main-100-dark text-sm mb-4">
                        Lời tựa
                        <span className="text-dark dark:text-light">
                            {" "}
                            {playlist?.description}
                        </span>
                    </p>
                    <ListSong
                        songs={playlist?.song?.items}
                        total={playlist?.song?.total}
                        totalDuration={playlist?.song?.totalDuration}
                    />
                </div>
            </div>
            {playlist?.artists && (
                <Artist title="Nghệ Sĩ Tham Gia" data={playlist} active />
            )}
        </div>
    );
};

export default PlaylistPage;
