import React from "react";
import { SecondHeading, Image, ThirdHeading, Heading } from "./";
import moment from "moment";

const NewRankingReleased = ({ data }) => {
    console.log(data);
    return (
        <div className="w-full mb-10">
            <SecondHeading>
                <Heading>{data?.title}</Heading>
            </SecondHeading>
            <div className="grid grid-cols-3 gap-4">
                {data?.items?.map((item, index) => (
                    <div className="flex gap-2 bg-at rounded-lg p-[10px]">
                        <div className="w-[40%]" key={item.encodeId}>
                            <Image data={item} size={40} />
                        </div>
                        <div className="flex-auto flex flex-col justify-between">
                            <ThirdHeading
                                title={item.title}
                                sizeTitle={60}
                                description={item.artistsNames}
                            />
                            <div className="flex justify-between items-end">
                                <span
                                    style={{
                                        opacity: 0.4,
                                        "-webkit-text-stroke": "1px #fff",
                                        lineHeight: 1,
                                        fontSize: "40px",
                                        fontWeight: 900,
                                        color: "transparent",
                                    }}
                                >
                                    #{index + 1}
                                </span>
                                <span className="text-main-100">
                                    {moment(item?.releaseDate * 1000).format(
                                        "DD.MM.YYYY"
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewRankingReleased;
