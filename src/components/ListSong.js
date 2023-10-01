import { Song } from "./";
import icons from "../ultis/icons";

const { BsMusicNoteBeamed } = icons;
const ListSong = ({ songs, totol, totolDuration }) => {
    return (
        <div className="w-full text-main-100 text-[14px]">
            <div className="flex items-center justify-between p-[10px] font-semibold">
                <span className="w-[50%]">BÀI HÁT</span>
                <span className="w-[30%]">ALBUM</span>
                <span className="w-[15%] flex justify-end">THỜI GIAN</span>
            </div>
            <div className="overflow-y-scroll h-[350px]">
                {songs?.length > 0 &&
                    songs.map((song, index) => (
                        <Song song={song} songs={songs} key={index}>
                            <span>
                                <BsMusicNoteBeamed size={15} />
                            </span>
                        </Song>
                    ))}
            </div>
            <div className="pb-[200px] flex items-center gap-2 mt-5">
                <div>{totol} bài hát</div>
                <div className="h-[4px] w-[4px] bg-main-100 rounded-full"></div>
            </div>
        </div>
    );
};

export default ListSong;
