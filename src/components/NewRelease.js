import React, { useState } from "react";
import { FilterNewRelease, Heading, SecondHeading, SongItem } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const NewRelease = () => {
    const { isPlaying } = useSelector((state) => state.player);
    const { newRelease } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    const [region, setRegion] = useState("all");

    const handleClick = (item) => {
        if (!isPlaying) {
            if (item.streamingStatus === 1) {
                dispatch(setIsPlaying(true));
            } else {
                dispatch(setIsPlaying(false));
            }
            dispatch(setSongId(item.encodeId));
        } else {
            dispatch(setIsPlaying(false));
        }
    };
    return (
        <div className="w-full mb-20">
            <Heading className="mb-5">{newRelease?.title}</Heading>
            <SecondHeading to={`${newRelease?.link}`}>
                <div className="flex items-center gap-5">
                    <FilterNewRelease region={region} setRegion={setRegion} />
                </div>
            </SecondHeading>
            <div className="grid grid-cols-3 gap-x-3">
                {newRelease &&
                    newRelease?.items?.[region]
                        ?.slice(0, 12)
                        .map((item, index) => (
                            <SongItem
                                key={index}
                                encodeId={item.encodeId}
                                title={item.title}
                                artists={item.artists}
                                artistsNames={item.artistsNames}
                                releaseDate={item.releaseDate}
                                thumbnail={item.thumbnail}
                                imgSize="w-[60px]"
                                onClick={() => handleClick(item)}
                            />
                        ))}
            </div>
        </div>
    );
};

export default NewRelease;
