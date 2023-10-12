import React, { useEffect, useState } from "react";
import Zingmp3Api from "../apis/Zingmp3Api";
import { Heading, ListSong, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../features/loadingSlice";

const NewRankingReleasedPage = () => {
    const dispatch = useDispatch();
    const { loadingComponents } = useSelector((state) => state.loading);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoading(true));
                const res = await Zingmp3Api.getNewReleaseChart();
                if (res.err === 0) {
                    setData(res.data);
                }
                dispatch(setLoading(false));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full">
            {!loadingComponents && data && (
                <>
                    <Heading
                        className="mb-5"
                        text="text-xl sm:text-2xl lg:text-4xl"
                    >
                        {data.title}
                    </Heading>
                    <ListSong
                        scroll={false}
                        songs={data?.items}
                        showCategory={false}
                        showTop={true}
                    />
                </>
            )}
            {loadingComponents && <Loading />}
        </div>
    );
};

export default NewRankingReleasedPage;
