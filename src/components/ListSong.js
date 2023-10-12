import { Song, Top } from "./";
import icons from "../ultis/icons";
import moment from "moment";
import { useSelector } from "react-redux";

const { BsMusicNoteBeamed } = icons;
const ListSong = ({
    songs,
    total,
    showDate,
    showCategory = true,
    sizeTitle,
    sizeDesc,
    totalDuration,
    scroll = true,
    showTop,
    categoryCenter = "ALBUM",
}) => {
    const { width } = useSelector((state) => state.width);
    const { theme } = useSelector((state) => state.theme);

    const time = moment.duration(totalDuration * 1000);
    const hours = time.hours();
    const minutes = time.minutes();
    return (
        <div className="w-full text-dark dark:text-main-100-dark text-[12px] lg:text-sm">
            {showCategory && (
                <div className="flex items-center justify-between p-[10px] font-semibold">
                    <span className={`${width > 640 ? "w-[50%]" : "w-[70%]"}`}>
                        BÀI HÁT
                    </span>
                    {width > 640 && (
                        <span className="w-[30%]">{categoryCenter}</span>
                    )}
                    {width > 468 && (
                        <span className="w-[30%] sm:w-[15%] flex justify-end">
                            THỜI GIAN
                        </span>
                    )}
                </div>
            )}
            <div
                className={`w-full ${
                    scroll ? "overflow-y-scroll h-[350px]" : ""
                }`}
            >
                {songs?.length > 0 &&
                    songs.map((song, index) => (
                        <Song
                            song={song}
                            songs={songs}
                            key={index}
                            sizeDesc={sizeDesc}
                            sizeTitle={sizeTitle}
                            showDate={showDate}
                            width={width}
                        >
                            {showTop && width > 368 ? (
                                <Top
                                    index={index}
                                    size="32px"
                                    className="w-12 text-center"
                                    opacity={index <= 2 ? 1 : 0.4}
                                    color={
                                        index === 0
                                            ? "#4a90e2"
                                            : index === 1
                                            ? "#50e3c2"
                                            : index === 2
                                            ? "#e35050"
                                            : theme === "dark"
                                            ? "#fff"
                                            : "#6b3483"
                                    }
                                />
                            ) : width > 640 ? (
                                <span>
                                    <BsMusicNoteBeamed size={15} />
                                </span>
                            ) : (
                                ""
                            )}
                        </Song>
                    ))}
            </div>
            {total && totalDuration && (
                <div className="flex items-center gap-2 mt-5">
                    <div>{total} bài hát</div>
                    <div className="h-[4px] w-[4px] bg-main-100 dark:bg-main-100-dark rounded-full"></div>
                    <div>{`${hours} giờ ${minutes} phút`}</div>
                </div>
            )}
        </div>
    );
};

export default ListSong;
