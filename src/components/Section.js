import React from "react";
import { SectionItem, Heading, SecondHeading } from "./";
const Section = ({
    data,
    hAlbum,
    artists,
    secondHeading,
    size = 5,
    link,
    hideHeading,
}) => {
    return (
        <div className="w-full mb-10">
            {hideHeading ? (
                ""
            ) : secondHeading ? (
                <SecondHeading className="mb-5" to={link}>
                    <Heading>{data?.title}</Heading>
                </SecondHeading>
            ) : (
                <Heading className="mb-5">{data?.title}</Heading>
            )}
            <div className="grid grid-cols-5 gap-4">
                {data?.items?.slice(0, size)?.map((item, index) => (
                    <SectionItem
                        data={item}
                        key={index}
                        hAlbum={hAlbum}
                        artists={artists}
                        secondHeading={secondHeading}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section;
