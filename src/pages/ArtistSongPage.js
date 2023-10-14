import React from "react";
import { Heading, Loading, Song } from "../components";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";
import { useSelector } from "react-redux";
const ArtistSongPage = () => {
    const { dataSongs, infoArtist } = useFecthInfoArtist();
    const { loadingComponents } = useSelector((state) => state.loading);
    return (
        <div className="w-full">
            {!loadingComponents && infoArtist && (
                <>
                    <Heading
                        className="mb-5"
                        text="text-sm sm:text-xl lg:text-2xl"
                    >{`${infoArtist?.name} - Tất Cả Bài Hát`}</Heading>
                    <div className="w-full">
                        {dataSongs?.items?.length > 0 &&
                            dataSongs.items.map((item) => (
                                <Song
                                    key={item.encodeId}
                                    sizeTitle={50}
                                    song={item}
                                    songs={dataSongs.items}
                                />
                            ))}
                    </div>
                </>
            )}
            {loadingComponents && <Loading />}
        </div>
    );
};

export default ArtistSongPage;
