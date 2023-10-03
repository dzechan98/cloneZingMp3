import React from "react";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";
import { Heading, Section } from "../components";

const ArtistPlaylistPage = () => {
    const { infoArtist, dataSection } = useFecthInfoArtist();
    return (
        <div className="w-full px-[59px]">
            {infoArtist && dataSection?.length > 0 && (
                <>
                    <Heading className="mb-5">{`${infoArtist?.name} - Tất Cả Single & Ep`}</Heading>
                    <Section
                        data={dataSection[0]}
                        hideHeading
                        artists
                        size={dataSection[0]?.items.length}
                    />
                </>
            )}
        </div>
    );
};

export default ArtistPlaylistPage;
