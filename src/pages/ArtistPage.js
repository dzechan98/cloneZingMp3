import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Zingmp3Api from "../apis/Zingmp3Api";
import { Artist, Button, Heading, Section } from "../components";
import { Artists, ListSongSearch } from "./SearchAll";

const ArtistPage = () => {
    const { name } = useParams();
    const [infoArtist, setInfoArtist] = useState();
    console.log(infoArtist);
    useEffect(() => {
        const fecthArtist = async () => {
            try {
                const res = await Zingmp3Api.getArtist(name);
                console.log(res);
                if (res.err === 0) {
                    setInfoArtist(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fecthArtist();
    }, [name]);

    const dataSection = infoArtist?.sections.filter(
        (item) => item.sectionType === "playlist"
    );
    const dataArtist = infoArtist?.sections.find(
        (item) => item.sectionType === "artist"
    );
    console.log(dataSection);
    return (
        <>
            {infoArtist && (
                <div className="w-full mb-10">
                    <div className="banner w-full h-[300px] bg-main-hv flex items-center mb-10">
                        <div className="flex items-center gap-5 px-[59px]">
                            <div className="rounded-full overflow-hidden w-[160px]">
                                <img
                                    src={infoArtist.thumbnail}
                                    alt=""
                                    className="w-full rounded-full hover:scale-110 transition-all"
                                />
                            </div>
                            <div className="w-full">
                                <Heading text="text-5xl mb-2">
                                    {infoArtist.name}
                                </Heading>
                                <div className="flex items-center gap-3">
                                    <span>
                                        {infoArtist.totalFollow} người quan tâm
                                    </span>
                                    <Button className="bg-[#ffffff1a] !text-[12px] rounded-full border border-main">
                                        QUAN TÂM
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-[59px]">
                        <div className="w-full mb-10">
                            <ListSongSearch
                                songs={infoArtist?.sections[0].items}
                            />
                        </div>
                        {dataSection.length > 0 &&
                            dataSection.map((data, index) => (
                                <Section
                                    key={index}
                                    data={data}
                                    secondHeading
                                    artists={data.items[0].artists}
                                />
                            ))}
                        {dataArtist && (
                            <Artist
                                data={{ artists: dataArtist?.items }}
                                active
                                title={dataArtist?.title}
                            />
                        )}

                        <div className="w-full mb-10">
                            <Heading className="mb-5">
                                Về {infoArtist?.name}
                            </Heading>
                            <div className="flex gap-5">
                                <img
                                    src={infoArtist.thumbnailM}
                                    alt=""
                                    className="w-[40%] rounded-lg"
                                />
                                <div className="w-[40%] text-main-100">
                                    <p className="text-sm mb-5">
                                        {infoArtist.biography}
                                    </p>
                                    <h2 className="text-at text-xl font-bold">
                                        {infoArtist.totalFollow}
                                    </h2>
                                    <span>Người quan tâm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ArtistPage;
