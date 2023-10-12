import React from "react";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";
import { Heading, Loading, Section } from "../components";
import { useSelector } from "react-redux";

const ArtistPlaylistPage = () => {
    const { infoArtist, dataSection } = useFecthInfoArtist();
    const { loadingComponents } = useSelector((state) => state.loading);
    return (
        <div className="w-full">
            {!loadingComponents && infoArtist && dataSection?.length > 0 && (
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
            {loadingComponents && <Loading />}
        </div>
    );
};

export default ArtistPlaylistPage;
