import React, { useEffect, useState } from "react";
import Zingmp3Api from "../apis/Zingmp3Api";
import { Heading, ListSong } from "../components";

const NewRankingReleasedPage = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Zingmp3Api.getNewReleaseChart();
                if (res.err === 0) {
                    setData(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    console.log(data);
    return (
        <div className="w-full">
            {data && (
                <>
                    <Heading className="mb-5" text="text-4xl">
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
        </div>
    );
};

export default NewRankingReleasedPage;
