import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNumber } from "../ultis/func";
import { SecondHeading, SongItem, Section } from "../components";
import { setIsPlaying, setSongId } from "../features/playerSlice";
const SearchAll = () => {
    const { searchData, isPlaying } = useSelector((state) => state.player);
    const [playlists, setPlaylists] = useState({ items: searchData.playlists });
    const dispatch = useDispatch();
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
    console.log(searchData?.playlists.length);
    useEffect(() => {
        setPlaylists({ items: searchData.playlists });
    }, [searchData]);
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-5">Nổi bật</h2>
                <div className="grid grid-cols-3 gap-6 mb-10">
                    {searchData?.playlists.length > 0 && (
                        <div className="p-[10px] flex items-center gap-6 bg-at rounded-lg">
                            <div className={`overflow-hidden rounded-full`}>
                                <img
                                    src={
                                        searchData.playlists[0].artists[0]
                                            .thumbnail
                                    }
                                    alt=""
                                    className="w-[84px] cursor-pointer transition-all rounded-full hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col text-xs">
                                <span>Nghệ sĩ</span>
                                <h2 className="text-at text-sm font-bold mt-1">
                                    {searchData.playlists[0].artists[0]?.name}
                                </h2>
                                {searchData.playlists[0].artists[0]
                                    ?.totalFollow && (
                                    <span>
                                        {`${handleNumber(
                                            searchData.playlists[0].artists[0]
                                                ?.totalFollow
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
                {searchData?.top?.artists.length > 0 && (
                    <>
                        <SecondHeading>
                            <div className="flex items-center gap-2">
                                <div className="w-[50px] overflow-hidden rounded-lg">
                                    <img
                                        src={
                                            searchData.top.artists[0].thumbnail
                                        }
                                        alt=""
                                        className="rounded-lg w-full hover:scale-110 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col text-main text-lg font-medium">
                                    <h2>PLAYLIST NỔI BẬT</h2>
                                    <h2 className="text-at font-bold">
                                        {searchData.top.artists[0].name}
                                    </h2>
                                </div>
                            </div>
                        </SecondHeading>
                        <Section data={playlists} />
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchAll;
