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
                    <Heading
                        className="mt-10 lg:mt-[60px] mb-10"
                        text="text-xl sm:text-2xl lg:text-4xl"
                    >
                        {newRelease.title}
                    </Heading>
                    <div className="w-full flex flex-wrap gap-1 sm:gap-5 mb-5">
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
