import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNumber } from "../ultis/func";
import {
    SecondHeading,
    SongItem,
    Section,
    Song,
    Button,
    Heading,
} from "../components";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const SearchAll = () => {
    const dispatch = useDispatch();
    const { searchData, isPlaying } = useSelector((state) => state.player);

    const handleClickPLaySong = (item) => {
        if (item.streamingStatus === 1) {
            if (isPlaying) {
                dispatch(setIsPlaying(false));
            } else {
                dispatch(setSongId(item.encodeId));
                dispatch(setIsPlaying(true));
            }
        }
    };
    console.log(searchData);
    return (
        <>
            {Object.keys(searchData).length !== 2 ? (
                <div className="w-full flex flex-col mb-10">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-5">Nổi bật</h2>
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {searchData?.playlists?.length > 0 && (
                                <div className="p-[10px] flex items-center gap-6 bg-at rounded-lg">
                                    <div
                                        className={`overflow-hidden rounded-full`}
                                    >
                                        <img
                                            src={
                                                searchData.playlists[0]
                                                    .artists[0].thumbnail
                                            }
                                            alt=""
                                            className="w-[84px] cursor-pointer transition-all rounded-full hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col text-xs">
                                        <span>Nghệ sĩ</span>
                                        <h2 className="text-at text-sm font-bold mt-1">
                                            {
                                                searchData.playlists[0]
                                                    .artists[0]?.name
                                            }
                                        </h2>
                                        {searchData.playlists[0].artists[0]
                                            ?.totalFollow && (
                                            <span>
                                                {`${handleNumber(
                                                    searchData.playlists[0]
                                                        .artists[0]?.totalFollow
                                                )} quan tâm`}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                            {searchData?.songs?.slice(0, 2).map((item) => (
                                <SongItem
                                    key={item.encodeId}
                                    active
                                    type="Bài hát"
                                    encodeId={item.encodeId}
                                    title={item.title}
                                    artistsNames={item.artistsNames}
                                    thumbnail={item.thumbnail}
                                    imgSize="w-[84px]"
                                    onClick={() => handleClickPLaySong(item)}
                                />
                            ))}
                        </div>
                        <FeaturePlaylist searchData={searchData} />
                        <ListSongSearch
                            searchData={searchData}
                            showAlbum={false}
                        />
                        <PlaylistAlbum searchData={searchData} />
                        <Artists searchData={searchData} />
                    </div>
                </div>
            ) : (
                <div className="w-full h-[300px] bg-at flex items-center justify-center">
                    <h2 className="text-center font-bold text-2xl text-main">
                        Không có kết quả được tìm thấy
                    </h2>
                </div>
            )}
        </>
    );
};

const HeadingSearchComponent = ({ active = false, children }) => {
    return (
        <>
            {!active ? (
                <SecondHeading>
                    <h2 className="font-bold text-at text-xl">{children}</h2>
                </SecondHeading>
            ) : (
                <Heading className="mb-5">{children}</Heading>
            )}
        </>
    );
};

export const FeaturePlaylist = ({ searchData }) => {
    const playlists = { items: searchData.playlists };

    return (
        <div className="w-full mb-10">
            {searchData?.artists?.length > 0 && (
                <>
                    <SecondHeading>
                        <div className="flex items-center gap-2">
                            <div className="w-[50px] overflow-hidden rounded-lg">
                                <img
                                    src={searchData.artists[0].thumbnail}
                                    alt=""
                                    className="rounded-lg w-full hover:scale-110 transition-all"
                                />
                            </div>
                            <div className="flex flex-col text-main text-lg font-medium">
                                <h2>PLAYLIST NỔI BẬT</h2>
                                <h2 className="text-at font-bold">
                                    {searchData.artists[0].name}
                                </h2>
                            </div>
                        </div>
                    </SecondHeading>
                    <Section data={playlists} />
                </>
            )}
        </div>
    );
};

export const ListSongSearch = ({
    searchData,
    size = 6,
    showAlbum = true,
    active = false,
    col = "grid-cols-2",
}) => {
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active}>
                Bài hát
            </HeadingSearchComponent>
            {searchData?.songs && (
                <div className={`grid ${col} gap-5`}>
                    {searchData.songs.slice(0, size).map((item) => (
                        <Song
                            key={item.encodeId}
                            song={item}
                            showAlbum={showAlbum}
                            sizeDesc={70}
                            sizeTitle={70}
                            songs={searchData.songs}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const PlaylistAlbum = ({ searchData, active = false }) => {
    const playlists = { items: searchData.playlists };
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active}>
                Playlist/Album
            </HeadingSearchComponent>
            <Section data={playlists} />
        </div>
    );
};

export const Artists = ({ searchData, active = false }) => {
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active}>
                Nghệ Sĩ/OA
            </HeadingSearchComponent>
            <div className="w-full grid grid-cols-5 gap-6">
                {searchData.artists.length > 0 &&
                    searchData.artists.slice(0, 5).map((item) => (
                        <div
                            className="flex items-center flex-col"
                            key={item.encodeId}
                        >
                            <div className="w-full overflow-hidden cursor-pointer rounded-full mb-5">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-full rounded-full transition-all hover:scale-110"
                                />
                            </div>
                            <h2 className="text-main font-bold text-sm">
                                {item.name}
                            </h2>
                            <span className="text-[#fffff80] font-semibold text-[12px] mb-2">
                                {`${handleNumber(
                                    Number(item.totalFollow)
                                )} quan tâm`}
                            </span>
                            <Button className="bg-[#ffffff1a] rounded-full border border-main">
                                QUAN TÂM
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchAll;
