import React from "react";
import { Artist, Button, Heading, Loading, Section } from "../components";
import { ListSongSearch } from "./SearchAll";
import useFecthInfoArtist from "../hooks/useFecthInfoArtist";
import { useSelector } from "react-redux";

const ArtistPage = () => {
    const { loadingComponents } = useSelector((state) => state.loading);
    const { dataSection, dataSongs, dataArtist, infoArtist } =
        useFecthInfoArtist();
    return (
        <>
            {!loadingComponents && infoArtist && (
                <div className="w-full">
                    <div
                        className="relative w-full h-[300px] flex items-center rounded-md mb-10"
                        style={{
                            backgroundImage: `url(${infoArtist.cover})`,
                        }}
                    >
                        <div className="rounded-md overlay absolute inset-0 bg-overlay">
                            <div className="w-full h-full flex items-center gap-5">
                                <div className="rounded-full overflow-hidden w-[160px]">
                                    <img
                                        src={infoArtist.thumbnail}
                                        alt=""
                                        className="w-full rounded-full hover:scale-110 transition-all"
                                    />
                                </div>
                                <div className="w-full">
                                    <Heading text="lg:text-5xl md:text-4xl sm:text-3xl text-xl mb-1 sm:mb-2 text-light">
                                        {infoArtist.name}
                                    </Heading>
                                    <div className="text-[12px] sm:text-sm flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-3 text-light">
                                        <span className="inline-block">
                                            {infoArtist.totalFollow} người quan
                                            tâm
                                        </span>
                                        <div className="w-full">
                                            <Button className="bg-b-button dark:bg-b-button-dark text-light rounded-full border border-t-border">
                                                QUAN TÂM
                                            </Button>
                                        </div>
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
                            <div className="flex flex-col gap-2 sm:flex-row sm:gap-5 text-[12px] sm:text-sm">
                                <img
                                    src={infoArtist.thumbnailM}
                                    alt=""
                                    className="w-full sm:w-[40%] rounded-lg"
                                />
                                <div className="w-full lg:w-[50%] text-main-100 dark:text-main-100-dark">
                                    <p className="mb-5">
                                        {infoArtist.biography}
                                    </p>
                                    <h2 className="text-dark dark:text-light font-bold">
                                        {infoArtist.totalFollow}
                                    </h2>
                                    <span>Người quan tâm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {loadingComponents && <Loading />}
        </>
    );
};

export default ArtistPage;
