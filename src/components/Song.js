import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId, setListSong } from "../features/playerSlice";
import { Modal, Icons, TogglePlaySong, ThirdHeading } from "./";
import moment from "moment";

const Song = ({
    song,
    songs,
    showAlbum = true,
    sizeDesc,
    sizeAlbum = 30,
    sizeTitle,
    showDate = false,
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
            dispatch(setSongId(id));
            dispatch(setIsPlaying(true));
            dispatch(setListSong(songs));
            return null;
        }

        isPlaying
            ? dispatch(setIsPlaying(false))
            : dispatch(setIsPlaying(true));
    };

    useEffect(() => {
        if (songId === encodeId) {
            songRef.current.scrollIntoView();
        }
    }, [songId]);
    return (
        <div
            ref={songRef}
            className={`relative flex items-center justify-between p-[10px] border-b border-[#393243] rounded-lg hover:bg-[#2f2739] group ${
                songId === encodeId ? "bg-[#2f2739]" : ""
            }`}
        >
            <div
                className={`${
                    showAlbum ? "w-[50%]" : "w-[70%]"
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
                        className={`text-at overlay rounded-lg transition-all items-center justify-center absolute inset-0 bg-[rgba(0,0,0,0.5)] cursor-pointer ${
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
                        sizeTitle={sizeTitle}
                        sizeDesc={sizeDesc}
                        description={artistsNames}
                        artists={artists}
                        status={streamingStatus}
                        fontSizeDesc="text-[12px]"
                    />
                </div>
            </div>
            {showAlbum && (
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
            <div className="w-[15%] flex justify-end">
                <span className="group-hover:hidden">
                    {songId !== encodeId &&
                        moment.utc(duration * 1000).format("HH:mm:ss")}
                </span>
                <Icons
                    className="hidden group-hover:flex transition-all"
                    bgHover="bg-red-100"
                />
            </div>
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
