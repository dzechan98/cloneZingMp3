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
                    <div
                        className="relative w-full h-[300px] flex items-center mb-10"
                        style={{
                            backgroundImage: `url(${infoArtist.cover})`,
                        }}
                    >
                        <div className="overlay absolute inset-0 bg-overlay">
                            <div className="w-full h-full flex items-center gap-5">
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
                                            {infoArtist.totalFollow} người quan
                                            tâm
                                        </span>
                                        <Button className="bg-b-button text-dark dark:text-light rounded-full border border-t-border">
                                            QUAN TÂM
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
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
                                <div className="w-[40%] text-main-100 dark:text-main-100">
                                    <p className="text-sm mb-5">
                                        {infoArtist.biography}
                                    </p>
                                    <h2 className="text-dark dark:text-light text-xl font-bold">
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
