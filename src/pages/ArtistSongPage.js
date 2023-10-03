import React from "react";
import { Heading, Song } from "../components";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";
const ArtistSongPage = () => {
    const { dataSongs, infoArtist } = useFecthInfoArtist();
    return (
        <div className="w-full px-[59px]">
            {infoArtist && (
                <>
                    <Heading className="text-2xl">{`${infoArtist?.name} - Tất Cả Bài Hát`}</Heading>
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
        </div>
    );
};

export default ArtistSongPage;
