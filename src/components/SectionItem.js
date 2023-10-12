import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Image, ThirdHeading } from "./";
import { setIsAddRecentyly } from "../features/playlistRecentlySlice";

const SectionItem = ({ data, artists, hAlbum }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { width } = useSelector((state) => state.width);

    const sizeTitle =
        width < 468 || (width > 1023 && width < 1140)
            ? 13
            : width >= 468 && width <= 640
            ? 25
            : 16;
    const sizeDesc =
        width < 468 || (width > 1023 && width < 1140)
            ? 13
            : width >= 468 && width <= 640
            ? 25
            : 16;
    const hideArtist = width < 320 ? true : false;
    const handleClickPlaySong = () => {
        dispatch(setIsAddRecentyly(true));
        navigate(data?.link.split(".")[0]);
    };

    const listArtists = data?.artists?.map((item) => item.name).join(",");
    return (
        <div className="w-full flex flex-col gap-2">
            <Image data={data} onClick={handleClickPlaySong} size={40} />
            <div className="w-full">
                {artists ? (
                    <ThirdHeading
                        title={data?.sortDescription || data?.title}
                        sizeTitle={sizeTitle}
                        sizeDesc={sizeDesc}
                        description={listArtists}
                        hideArtist={hideArtist}
                        height="h-10"
                        artists={data?.artists}
                        onClick={handleClickPlaySong}
                    />
                ) : hAlbum ? (
                    <ThirdHeading
                        description={
                            data?.sortDescription || data?.artistsNames
                        }
                        title={data?.title}
                        sizeTitle={sizeTitle}
                        hideArtist={hideArtist}
                        sizeDesc={sizeDesc}
                        artists={data?.artists}
                        onClick={handleClickPlaySong}
                    />
                ) : (
                    <ThirdHeading
                        description={data?.sortDescription}
                        sizeTitle={sizeTitle}
                        sizeDesc={sizeDesc}
                        hideArtist={hideArtist}
                    />
                )}
            </div>
        </div>
    );
};

export default SectionItem;
