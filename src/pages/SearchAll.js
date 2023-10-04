import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNumber } from "../ultis/func";
import { useSearchParams, createSearchParams, NavLink } from "react-router-dom";
import {
    SecondHeading,
    SongItem,
    Section,
    Song,
    Heading,
    Artist,
} from "../components";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const SearchAll = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
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
    return (
        <div className="w-full flex flex-col mb-10">
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-5">Nổi bật</h2>
                <div className="grid grid-cols-3 gap-6 mb-10">
                    {searchData?.playlists?.length > 0 && (
                        <div className="p-[10px] flex items-center gap-6 bg-at rounded-lg">
                            <div className={`overflow-hidden rounded-full`}>
                                <img
                                    src={
                                        searchData?.playlists[0].artists[0]
                                            .thumbnail
                                    }
                                    alt=""
                                    className="w-[84px] cursor-pointer transition-all rounded-full hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col text-xs">
                                <span>Nghệ sĩ</span>
                                <NavLink
                                    className="text-at text-sm font-bold mt-1 hover:underline hover:text-main-hv"
                                    to={searchData.playlists[0].artists[0].link}
                                >
                                    {searchData.playlists[0].artists[0]?.name}
                                </NavLink>
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
                            artists={item.artists}
                            onClick={() => handleClickPLaySong(item)}
                        />
                    ))}
                </div>
                <FeaturePlaylist searchData={searchData} q={q} />
                <ListSongSearch
                    searchData={searchData}
                    showAlbum={false}
                    link="/tim-kiem/bai-hat"
                    q={q}
                />
                <PlaylistAlbum
                    searchData={searchData}
                    q={q}
                    link="/tim-kiem/playlist"
                />
                <Artist data={searchData} q={q} link="/tim-kiem/artist" />
            </div>
        </div>
    );
};

export const HeadingSearchComponent = ({
    active = false,
    link,
    q,
    children,
}) => {
    return (
        <>
            {!active ? (
                <SecondHeading
                    to={
                        q
                            ? {
                                  pathname: link,
                                  search: createSearchParams({
                                      q,
                                  }).toString(),
                              }
                            : link
                    }
                >
                    <h2 className="font-bold text-at text-xl">{children}</h2>
                </SecondHeading>
            ) : (
                <Heading className="mb-5">{children}</Heading>
            )}
        </>
    );
};

export const FeaturePlaylist = ({ searchData, q }) => {
    const playlists = { items: searchData.playlists };

    return (
        <div className="w-full mb-10">
            {searchData?.artists?.length > 0 && (
                <>
                    <SecondHeading
                        to={{
                            pathname: "/tim-kiem/playlist",
                            search: createSearchParams({
                                q,
                            }).toString(),
                        }}
                    >
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
                                <NavLink
                                    className="text-at font-bold hover:text-main-hv"
                                    to={searchData.artists[0].link}
                                >
                                    {searchData.artists[0].name}
                                </NavLink>
                            </div>
                        </div>
                    </SecondHeading>
                    <Section data={playlists} hAlbum />
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
    q,
    link,
    songs,
    title = "Bài hát",
}) => {
    const items = songs?.slice(0, size) || searchData?.songs.slice(0, size);
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active} link={link} q={q}>
                {title}
            </HeadingSearchComponent>
            {items?.length > 0 && (
                <div className={`grid ${col} gap-5`}>
                    {items.map((item) => (
                        <Song
                            key={item.encodeId}
                            song={item}
                            artists={item.artists}
                            showAlbum={showAlbum}
                            sizeDesc={40}
                            sizeAlbum={15}
                            sizeTitle={15}
                            songs={items}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const PlaylistAlbum = ({
    searchData,
    active = false,
    q,
    size = 5,
    link,
}) => {
    const playlists = { items: searchData.playlists };
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active} link={link} q={q}>
                Playlist/Album
            </HeadingSearchComponent>
            <Section data={playlists} hAlbum size={size} />
        </div>
    );
};

export default SearchAll;
