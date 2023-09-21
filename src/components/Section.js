import React from "react";
import { SectionItem, Heading } from "./";
const Section = ({ data }) => {
    return (
        <div className="w-full mb-10">
            <Heading className="mb-5">{data?.title}</Heading>
            <div className="grid grid-cols-5 gap-4">
                {data?.items?.slice(0, 5).map((item, index) => (
                    <SectionItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Section;
