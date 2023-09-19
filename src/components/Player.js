import React, { useEffect, useRef, useState } from "react";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import Zingmp3Api from "../apis/Zingmp3Api";
import { setIsPlaying, setSongId } from "../features/playerSlice";
import { Icons } from "./";
import moment from "moment";

const {
    BiShuffle,
    BiSkipPrevious,
    BiSkipNext,
    BsPlayCircle,
    BsPauseCircle,
    PiRepeat,
} = icons;

const Player = () => {
    const dispatch = useDispatch();
    const { songId, isPlaying, listSong } = useSelector(
        (state) => state.player
    );
    const thumbRef = useRef(null);
    const trackRef = useRef(null);
    const [audio, setAudio] = useState(new Audio());
    const [currentTime, setCurrentTime] = useState(0);
    const [song, setSong] = useState({});

    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        dispatch(setIsPlaying(isPlaying ? false : true));
    };

    const handleChangeProgress = (e) => {
        const { left, width } = trackRef.current.getBoundingClientRect();
        const progress = Math.round((100 * (e.pageX - left)) / width);
        const crrTime = Math.round((progress * song?.duration) / 100);
        thumbRef.current.style.right = `${100 - progress}%`;
        audio.currentTime = crrTime;
        setCurrentTime(crrTime);
    };

    const handleNextSong = (id) => {
        const curSong = listSong.findIndex((song) => song.encodeId === id);
        let index = 0;
        if (curSong !== listSong.length - 1) {
            index = curSong + 1;
        }
        dispatch(setSongId(listSong[index]?.encodeId));
    };

    const handlePrevSong = (id) => {
        const curSong = listSong.findIndex((song) => song.encodeId === id);
        let index = listSong.length - 1;
        if (curSong !== 0) {
            index = curSong - 1;
        }
        dispatch(setSongId(listSong[index]?.encodeId));
    };

    useEffect(() => {
        const fecthDetailSong = async () => {
            try {
                const [res1, res2] = await Promise.all([
                    Zingmp3Api.getDetailSong(songId),
                    Zingmp3Api.getSong(songId),
                ]);

                if (res1?.err === 0) {
                    setSong(res1?.data);
                }
                if (res2?.err === 0) {
                    audio.pause();
                    setAudio(new Audio(res2.data["128"]));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fecthDetailSong();
    }, [songId]);

    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            if (audio.src && song?.duration) {
                intervalId = setInterval(() => {
                    const percent =
                        Math.round(
                            (audio.currentTime * 10000) / song.duration
                        ) / 100;

                    thumbRef.current.style.right = `${100 - percent}%`;

                    setCurrentTime(audio.currentTime);
                }, 200);
            }
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isPlaying, audio]);

    useEffect(() => {
        if (audio.src) {
            isPlaying ? audio.play() : audio.pause();
        }
    }, [isPlaying, audio]);
    return (
        <div className="w-full h-full flex items-center px-[21px]">
            <div className="flex items-center gap-2 w-[30%]">
                <img
                    src={song?.thumbnail}
                    alt=""
                    className="h-16 w-16 rounded-lg"
                />
                <div className="flex items-center gap-2">
                    <div className="text-sm">
                        <h2 className="text-main font-bold">{song?.title}</h2>
                        <p className="text-[#ffffff80]">{song?.artistsNames}</p>
                    </div>
                    <Icons />
                </div>
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center gap-4">
                <div className="w-full flex items-center justify-center gap-2">
                    <span className="p-2 cursor-pointer hover:bg-at rounded-full">
                        <BiShuffle size={15} />
                    </span>
                    <span
                        className="p-2 cursor-pointer hover:bg-at rounded-full"
                        onClick={() => handlePrevSong(songId)}
                    >
                        <BiSkipPrevious size={15} />
                    </span>
                    <span
                        className="cursor-pointer hover:text-main-hv rounded-full"
                        onClick={handleTogglePlayMusic}
                    >
                        {!isPlaying ? (
                            <BsPlayCircle size={30} />
                        ) : (
                            <BsPauseCircle size={30} />
                        )}
                    </span>
                    <span
                        onClick={() => handleNextSong(songId)}
                        className="p-2 hover:bg-at rounded-full cursor-pointer"
                    >
                        <BiSkipNext size={15} />
                    </span>
                    <span className="p-2 cursor-pointer hover:bg-at rounded-full">
                        <PiRepeat size={15} />
                    </span>
                </div>
                <div className="flex items-center justify-center gap-4 w-full text-[12px] font-bold">
                    <span className="text-[#ffffff80]">
                        {moment
                            .utc(Math.round(currentTime) * 1000)
                            .format("mm:ss")}
                    </span>
                    <div
                        className="progress relative w-[70%] h-[3px] bg-at rounded-lg overflow-hidden cursor-pointer hover:h-[6px] group"
                        onClick={handleChangeProgress}
                        ref={trackRef}
                    >
                        <div
                            ref={thumbRef}
                            className={`absolute bottom-0 top-0 left-0 bg-[#fff]`}
                        ></div>
                    </div>
                    <span className="text-at">
                        {moment.utc(song?.duration * 1000).format("mm:ss")}
                    </span>
                </div>
            </div>
            <div className="w-[30%]">volume</div>
        </div>
    );
};

export default Player;
