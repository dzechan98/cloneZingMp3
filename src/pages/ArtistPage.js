import React from "react";
import { Artist, Button, Heading, Section } from "../components";
import { ListSongSearch } from "./SearchAll";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";

const ArtistPage = () => {
    const { dataSection, dataSongs, dataArtist, infoArtist } =
        useFecthInfoArtist();
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
                                title={dataSongs?.title}
                                link={dataSongs?.link}
                                songs={dataSongs?.items}
                            />
                        </div>
                        {dataSection?.length > 0 &&
                            dataSection.map((data, index) => (
                                <Section
                                    key={index}
                                    data={data}
                                    secondHeading={index === 0 ? true : false}
                                    artists
                                    link={data.link}
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
