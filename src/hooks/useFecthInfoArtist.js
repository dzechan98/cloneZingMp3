import { useEffect, useState } from "react";
import Zingmp3Api from "../apis/Zingmp3Api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../features/loadingSlice";

const useFecthInfoArtist = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const [infoArtist, setInfoArtist] = useState({});
    useEffect(() => {
        const fecthArtist = async () => {
            try {
                dispatch(setLoading(true));
                const res = await Zingmp3Api.getArtist(name);
                if (res.err === 0) {
                    setInfoArtist(res.data);
                }
                dispatch(setLoading(false));
            } catch (error) {
                console.log(error);
            }
        };

        fecthArtist();
    }, [name]);
    const dataSongs = infoArtist?.sections?.find(
        (item) => item.sectionType === "song"
    );
    const dataSection = infoArtist?.sections?.filter(
        (item) => item.sectionType === "playlist"
    );
    const dataArtist = infoArtist?.sections?.find(
        (item) => item.sectionType === "artist"
    );
    return { dataSongs, dataSection, dataArtist, infoArtist };
};

export default useFecthInfoArtist;
