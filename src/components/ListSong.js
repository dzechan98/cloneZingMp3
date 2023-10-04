import { Song, Top } from "./";
import icons from "../ultis/icons";
import moment from "moment";

const { BsMusicNoteBeamed } = icons;
const ListSong = ({
    songs,
    total,
    showDate,
    showCategory = true,
    totalDuration,
    scroll = true,
    showTop,
    categoryCenter = "ALBUM",
}) => {
    const time = moment.duration(totalDuration * 1000);
    const hours = time.hours();
    const minutes = time.minutes();
    return (
        <div className="w-full text-main-100 text-[14px]">
            {showCategory && (
                <div className="flex items-center justify-between p-[10px] font-semibold">
                    <span className="w-[50%]">BÀI HÁT</span>
                    <span className="w-[30%]">{categoryCenter}</span>
                    <span className="w-[15%] flex justify-end">THỜI GIAN</span>
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
                            sizeDesc={40}
                            sizeTitle={25}
                            showDate={showDate}
                        >
                            {showTop ? (
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
                                            : "#fff"
                                    }
                                />
                            ) : (
                                <span>
                                    <BsMusicNoteBeamed size={15} />
                                </span>
                            )}
                        </Song>
                    ))}
            </div>
            {total && totalDuration && (
                <div className="flex items-center gap-2 mt-5">
                    <div>{total} bài hát</div>
                    <div className="h-[4px] w-[4px] bg-main-100 rounded-full"></div>
                    <div>{`${hours} giờ ${minutes} phút`}</div>
                </div>
            )}
        </div>
    );
};

export default ListSong;
