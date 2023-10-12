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
    Loading,
} from "../components";
import { setIsPlaying, setSongId } from "../features/playerSlice";

const SearchAll = () => {
    const dispatch = useDispatch();
    const { loadingComponents } = useSelector((state) => state.loading);
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
        <>
            {!loadingComponents && (
                <div className="w-full flex flex-col mb-10">
                    <div className="flex flex-col">
                        <h2 className="dark:text-light text-dark text-[16px] sm:text-lg font-semibold mb-5">
                            Nổi bật
                        </h2>
                        <div
                            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 mb-10`}
                        >
                            {searchData?.playlists?.length > 0 && (
                                <div className="p-[10px] flex items-center gap-2 lg:gap-4 bg-b-active dark:bg-b-active-dark rounded-lg">
                                    <div
                                        className={`overflow-hidden rounded-full`}
                                    >
                                        <img
                                            src={
                                                searchData?.playlists[0]
                                                    .artists[0].thumbnail
                                            }
                                            alt=""
                                            className={`w-14 sm:w-[84px] cursor-pointer transition-all rounded-full hover:scale-110`}
                                        />
                                    </div>
                                    <div className="flex flex-col text-xs">
                                        <span>Nghệ sĩ</span>
                                        <NavLink
                                            className="text-dark dark:text-light text-sm font-bold lg:mt-1 hover:underline hover:text-main-hv dark:hover:text-main-hv-dark"
                                            to={
                                                searchData.playlists[0]
                                                    .artists[0].link
                                            }
                                        >
                                            {
                                                searchData.playlists[0]
                                                    .artists[0]?.name
                                            }
                                        </NavLink>
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
                                    imgSize="w-14 sm:w-[84px]"
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
                        <Artist
                            data={searchData}
                            q={q}
                            link="/tim-kiem/artist"
                        />
                    </div>
                </div>
            )}
            {loadingComponents && <Loading />}
        </>
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
                    <h2 className="font-bold text-dark dark:text-light text-[16px] lg:text-xl">
                        {children}
                    </h2>
                </SecondHeading>
            ) : (
                <Heading className="mb-5">{children}</Heading>
            )}
        </>
    );
};

export const FeaturePlaylist = ({ searchData, q }) => {
    const playlists = { items: searchData.playlists };
    const { width } = useSelector((state) => state.width);
    return (
        <div className={`${width < 320 ? "hidden" : "block"} w-full mb-10`}>
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
                            <div className="flex flex-col text-main text-sm lg:text-lg font-medium">
                                <h2>PLAYLIST NỔI BẬT</h2>
                                <NavLink
                                    className="text-dark dark:text-light font-bold hover:text-main-hv dark:hover:text-main-hv-dark"
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
    const { width } = useSelector((state) => state.width);
    const items = songs?.slice(0, size) || searchData?.songs.slice(0, size);
    return (
        <div className="w-full mb-10">
            <HeadingSearchComponent active={active} link={link} q={q}>
                {title}
            </HeadingSearchComponent>
            {items?.length > 0 && (
                <div
                    className={`grid gap-5 ${
                        width < 640 ? "grid-cols-1" : col
                    }`}
                >
                    {items.map((item) => (
                        <Song
                            key={item.encodeId}
                            song={item}
                            artists={item.artists}
                            showAlbum={showAlbum}
                            sizeDesc={width > 468 ? 35 : width > 368 ? 25 : 15}
                            sizeAlbum={15}
                            sizeTitle={width > 468 ? 35 : width > 368 ? 25 : 15}
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
