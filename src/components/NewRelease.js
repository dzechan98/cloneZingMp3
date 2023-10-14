import React, { useState } from "react";
import { FilterNewRelease, Heading, Modal, SecondHeading, SongItem } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setAutoPlay, setIsPlaying, setSongId } from "../features/playerSlice";
import { toast } from "react-toastify";

const NewRelease = () => {
    const { width } = useSelector((state) => state.width);
    const { isPlaying, songId, msg } = useSelector((state) => state.player);
    const { newRelease } = useSelector((state) => state.home);
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const [region, setRegion] = useState("all");

    const handleClick1 = (id, status) => {
        if (status === 2) {
            setOpenModal(true);
            return null;
        }

        if (id !== songId) {
            dispatch(setAutoPlay(true));
            dispatch(setSongId(id));
            return null;
        }
        if (msg) {
            toast.warning(msg);
            return null;
        }

        isPlaying
            ? dispatch(setIsPlaying(false))
            : dispatch(setIsPlaying(true));
    };

    return (
        <div className="w-full mb-20">
            <Heading className="mb-5">{newRelease?.title}</Heading>
            <SecondHeading to={`${newRelease?.link}`}>
                <div className="w-[75%] flex items-center gap-2 flex-wrap md:gap-5">
                    <FilterNewRelease region={region} setRegion={setRegion} />
                </div>
            </SecondHeading>
            <div
                className={`grid md:grid-cols-3 gap-x-3 ${
                    width < 520 ? "grid-cols-1" : "grid-cols-2 "
                }`}
            >
                {newRelease &&
                    newRelease?.items?.[region]
                        ?.slice(0, 12)
                        .map((item, index) => (
                            <SongItem
                                key={index}
                                encodeId={item.encodeId}
                                title={item.title}
                                artists={item.artists}
                                status={item.streamingStatus}
                                artistsNames={item.artistsNames}
                                releaseDate={item.releaseDate}
                                thumbnail={item.thumbnail}
                                imgSize="w-[60px]"
                                onClick={() =>
                                    handleClick1(
                                        item.encodeId,
                                        item.streamingStatus
                                    )
                                }
                            />
                        ))}
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

export default NewRelease;
