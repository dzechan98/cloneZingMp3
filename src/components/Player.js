import React, { useEffect, useRef, useState } from "react";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import Zingmp3Api from "../apis/Zingmp3Api";
import {
    setIsPlaying,
    setSongId,
    setIsRepeating,
    setIsRandomSong,
    set,
} from "../features/playerSlice";
import { Icons } from "./";
import moment from "moment";
import { toast } from "react-toastify";
import IconsLoading from "../assets/loading-gif.gif";
const {
    BiShuffle,
    BiSkipPrevious,
    BiSkipNext,
    BsPlayCircle,
    BsPauseCircle,
    PiRepeat,
    FiVolume2,
    BsMusicNoteList,
} = icons;

const Player = () => {
    const dispatch = useDispatch();
    const {
        songId,
        isPlaying,
        listSong,
        isRandomSong,
        isRepeating,
    } = useSelector((state) => state.player);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [audio, setAudio] = useState(new Audio());
    const [currentTime, setCurrentTime] = useState(0);
    const [song, setSong] = useState({});
    const volumeTrackRef = useRef(null);
    const volumeThumbRef = useRef(null);
    const thumbRef = useRef(null);
    const trackRef = useRef(null);

    const handleChangeVolume = (e) => {
        const { left, width } = volumeTrackRef.current.getBoundingClientRect();
        const progress = Math.round((100 * (e.pageX - left)) / width);
        volumeThumbRef.current.style.right = `${100 - progress}%`;
        audio.volume = progress / 100;
    };

    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            msg ? audio.pause() : audio.play();
        }

        if (!msg) {
            dispatch(setIsPlaying(isPlaying ? false : true));
        } else {
            toast.warning(msg);
        }
    };

    const handleChangeProgress = (e) => {
        const { left, width } = trackRef.current.getBoundingClientRect();
        const progress = Math.round((100 * (e.pageX - left)) / width);
        const crrTime = Math.round((progress * song?.duration) / 100);
        thumbRef.current.style.right = `${100 - progress}%`;
        audio.currentTime = crrTime;
        setCurrentTime(crrTime);
    };

    const handleRepeatSong = () => {
        if (setIsRandomSong) {
            dispatch(setIsRandomSong(false));
        }
        dispatch(setIsRepeating(!isRepeating));
    };

    const handleRandomSong = () => {
        if (setIsRepeating) {
            dispatch(setIsRepeating(false));
        }
        dispatch(setIsRandomSong(!isRandomSong));
    };

    const handleNextSong = (id) => {
        const curSong = listSong.findIndex((song) => song.encodeId === id);
        let index = 0;
        if (curSong !== listSong.length - 1) {
            index = curSong + 1;
        }

        //Check VIP
        if (listSong[index]?.streamingStatus === 1) {
            dispatch(setIsPlaying(true));
        } else {
            dispatch(setIsPlaying(false));
        }
        thumbRef.current.style.right = `100%`;

        setCurrentTime(0);
        dispatch(setSongId(listSong[index]?.encodeId));
    };

    const handlePrevSong = (id) => {
        const curSong = listSong.findIndex((song) => song.encodeId === id);
        let index = listSong.length - 1;
        if (curSong !== 0) {
            index = curSong - 1;
        }
        if (listSong[index]?.streamingStatus === 1) {
            dispatch(setIsPlaying(true));
        } else {
            dispatch(setIsPlaying(false));
        }
        thumbRef.current.style.right = `100%`;

        setCurrentTime(0);
        dispatch(setSongId(listSong[index]?.encodeId));
    };

    //Call api
    useEffect(() => {
        const fecthDetailSong = async () => {
            try {
                setLoading(true);
                const [res1, res2] = await Promise.all([
                    Zingmp3Api.getDetailSong(songId),
                    Zingmp3Api.getSong(songId),
                ]);
                setLoading(false);
                if (res1?.err === 0) {
                    setSong(res1?.data);
                }
                if (res2?.err === 0) {
                    audio.pause();
                    setMsg("");
                    setAudio(new Audio(res2.data["128"]));
                } else {
                    audio.pause();
                    setMsg(res2.msg);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fecthDetailSong();
    }, [songId]);

    //Handle play music
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
                    const crrTime = Math.round(audio.currentTime);

                    if (crrTime === song.duration) {
                        if (isRepeating) {
                            audio.currentTime = 0;
                            setCurrentTime(0);
                            return null;
                        }

                        if (isRandomSong) {
                            const curSong = listSong.findIndex(
                                (song) => song.encodeId == songId
                            );
                            let index = Math.floor(
                                Math.random() * listSong.length
                            );

                            while (curSong === index) {
                                index = Math.floor(
                                    Math.random() * listSong.length
                                );
                            }

                            audio.currentTime = 0;
                            dispatch(setSongId(listSong[index]?.encodeId));
                            setCurrentTime(0);
                            return null;
                        }

                        handleNextSong(songId);
                    }
                    setCurrentTime(crrTime);
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
                        <p className="text-main-100">{song?.artistsNames}</p>
                    </div>
                    <Icons />
                </div>
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center gap-2">
                <div className="w-full flex items-center justify-center gap-2">
                    <span
                        onClick={handleRandomSong}
                        className={`p-2 cursor-pointer rounded-full transition-all ${
                            isRandomSong ? "text-main-hv" : "hover:bg-at "
                        }`}
                    >
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
                        {loading ? (
                            <img
                                src={IconsLoading}
                                alt=""
                                className="w-4 h-4"
                            />
                        ) : !isPlaying ? (
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
                    <span
                        onClick={handleRepeatSong}
                        className={`p-2 cursor-pointer rounded-full transition-all ${
                            isRepeating ? "text-main-hv" : "hover:bg-at"
                        }`}
                    >
                        <PiRepeat size={15} />
                    </span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full text-[12px] font-bold">
                    <span className="text-main-100">
                        {moment.utc(currentTime * 1000).format("mm:ss")}
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
            <div className="w-[30%] flex items-center justify-end">
                <div className="w-1/2 flex justify-center gap-[16px]">
                    <div className="w-full flex items-center gap-2">
                        <span className="cursor-pointer peer">
                            <FiVolume2 size={20} />
                        </span>
                        <div
                            className="progress w-[100px] relative h-[3px] bg-at rounded-lg overflow-hidden cursor-pointer hover:h-[6px] peer-hover:h-[6px] group"
                            ref={volumeTrackRef}
                            onClick={handleChangeVolume}
                        >
                            <div
                                className={`absolute bottom-0 top-0 left-0 right-0 bg-[#fff]`}
                                ref={volumeThumbRef}
                            ></div>
                        </div>
                    </div>
                    <div className="p-2 bg-at rounded-lg cursor-pointer">
                        <BsMusicNoteList size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
