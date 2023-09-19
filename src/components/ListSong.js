import { Song } from "./";

const ListSong = ({ songs, totol, totolDuration }) => {
    return (
        <div className="w-full text-[#ffffff80] text-[14px]">
            <div className="flex items-center justify-between p-[10px] font-semibold">
                <span className="w-[50%]">BÀI HÁT</span>
                <span className="w-[30%]">ALBUM</span>
                <span className="w-[15%] flex justify-end">THỜI GIAN</span>
            </div>
            <div className="overflow-y-scroll h-[350px]">
                {songs?.length > 0 &&
                    songs.map((song) => (
                        <Song song={song} songs={songs} key={song?.encodeId} />
                    ))}
            </div>
            <div className="pb-[200px] flex items-center gap-2 mt-5">
                <div>{totol} bài hát</div>
                <div className="h-[4px] w-[4px] bg-[#ffffff80] rounded-full"></div>
            </div>
        </div>
    );
};

export default ListSong;
