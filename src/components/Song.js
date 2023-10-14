import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setIsPlaying,
    setSongId,
    setListSong,
    setAutoPlay,
} from "../features/playerSlice";
import { Modal, Icons, TogglePlaySong, ThirdHeading } from "./";
import moment from "moment";

const Song = ({
    song,
    songs,
    sizeTitle,
    sizeDesc,
    showAlbum = true,
    sizeAlbum = 25,
    showDate = false,
    width,
    children,
}) => {
    const dispatch = useDispatch();
    const songRef = useRef(null);
    const { isPlaying, songId } = useSelector((state) => state.player);
    const [openModal, setOpenModal] = useState(false);
    const {
        encodeId,
        thumbnail,
        title,
        streamingStatus,
        artistsNames,
        artists,
        duration,
    } = song;

    const handleClick = (id, status) => {
        if (status === 2) {
            setOpenModal(true);
            return null;
        }

        if (id !== songId) {
            dispatch(setAutoPlay(true));
            dispatch(setSongId(id));
            dispatch(setListSong(songs));
            return null;
        }

        isPlaying
            ? dispatch(setIsPlaying(false))
            : dispatch(setIsPlaying(true));
    };

    useEffect(() => {
        if (songId === encodeId && isPlaying) {
            songRef.current.scrollIntoView();
        }
    }, [isPlaying]);
    return (
        <div
            ref={songRef}
            className={`relative flex items-center justify-between p-[10px] border-b border-t-border rounded-lg hover:bg-b-active dark:hover:bg-b-active-dark group ${
                songId === encodeId ? "bg-b-active dark:bg-b-active-dark" : ""
            }`}
        >
            <div
                className={`${
                    width > 640 ? (showAlbum ? "w-[50%]" : "w-[70%]") : "w-full"
                } flex items-center gap-2`}
            >
                {children}
                <div className="relative">
                    <img
                        src={thumbnail}
                        alt=""
                        className="w-10 h-10 rounded-lg"
                    />
                    <div
                        className={`text-light overlay rounded-lg transition-all items-center justify-center absolute inset-0 bg-overlay cursor-pointer ${
                            songId === encodeId
                                ? "flex"
                                : "hidden group-hover:flex"
                        }`}
                        onClick={() => handleClick(encodeId, streamingStatus)}
                    >
                        <TogglePlaySong
                            size={25}
                            isPlaying={isPlaying}
                            p1={songId}
                            p2={encodeId}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <ThirdHeading
                        title={title}
                        sizeTitle={
                            sizeTitle
                                ? sizeTitle
                                : width > 468
                                ? 35
                                : width > 368
                                ? 25
                                : 15
                        }
                        sizeDesc={
                            sizeDesc
                                ? sizeDesc
                                : width > 468
                                ? 35
                                : width > 368
                                ? 25
                                : 15
                        }
                        description={artistsNames}
                        artists={artists}
                        status={streamingStatus}
                        fontSizeDesc="text-[12px]"
                    />
                </div>
            </div>
            {width > 640 && showAlbum && (
                <div className="w-[30%] text-[12px]">
                    <span>
                        {showDate
                            ? moment(1000 * song?.releaseDate).fromNow()
                            : song.album?.title.length > sizeAlbum
                            ? `${song.album?.title.slice(0, sizeAlbum)}...`
                            : song.album?.title}
                    </span>
                </div>
            )}
            {width > 468 && (
                <div className="w-[15%] flex justify-end">
                    <span className="group-hover:hidden">
                        {songId !== encodeId &&
                            moment.utc(duration * 1000).format("HH:mm:ss")}
                    </span>
                    <Icons
                        song={song}
                        className="hidden group-hover:flex transition-all"
                        bgHover="bg-red-100"
                    />
                </div>
            )}
            {openModal && (
                <Modal
                    setOpenModal={setOpenModal}
                    title="Dành Cho Tài Khoản PREMIUM"
                    desc="Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản PREMIUM để nghe bài hát này."
                    titleButton="ĐĂNG NHẬP TÀI KHOẢN"
                />
            )}
        </div>
    );
};

export default Song;
