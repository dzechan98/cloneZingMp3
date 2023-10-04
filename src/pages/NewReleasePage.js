import React, { useState } from "react";
import { FilterNewRelease, Heading, ListSong } from "../components";
import { useSelector } from "react-redux";
const NewReleasePage = () => {
    const { newRelease } = useSelector((state) => state.home);
    const [region, setRegion] = useState("all");
    return (
        <div className="w-full">
            {newRelease && (
                <>
                    <Heading className="mt-[80px] mb-10" text="text-4xl">
                        {newRelease.title}
                    </Heading>
                    <div className="w-full flex gap-5 mb-10">
                        <FilterNewRelease
                            region={region}
                            setRegion={setRegion}
                        />
                    </div>
                    <div className="w-full">
                        {newRelease && (
                            <ListSong
                                songs={newRelease?.items?.[region]}
                                totol={newRelease?.items?.[region].length}
                                showDate
                                scroll={false}
                                categoryCenter="PHÁT HÀNH"
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default NewReleasePage;
