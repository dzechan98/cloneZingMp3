import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const PlayerSkeleton = () => {
    const { width } = useSelector((state) => state.width);
    return (
        <div className="w-full h-full flex items-center px-[21px]">
            {width > 520 && (
                <div className={`flex items-center gap-2 w-[30%]`}>
                    <Skeleton
                        className={`rounded-lg ${
                            width > 768 ? "h-12 w-12" : "h-10 w-10"
                        }`}
                    />
                    <div className="-w-full flex items-center gap-2">
                        <Skeleton count={2} width={100} height={15} />
                        {width > 768 && (
                            <Skeleton circle width={30} height={30} />
                        )}
                    </div>
                </div>
            )}
            <div
                className={`flex flex-col items-center justify-center ${
                    width <= 520 ? "w-full" : "w-[60%] lg:w-[40%]"
                }`}
            >
                <Skeleton
                    count={2}
                    width={width > 768 ? 300 : 240}
                    height={15}
                />
                {width <= 520 && <Skeleton width={240} height={15} />}
            </div>
            {width > 520 && (
                <div className="w-[10%] lg:w-[30%] flex items-center justify-end">
                    <Skeleton width={width > 768 ? 100 : 40} height={15} />
                </div>
            )}
        </div>
    );
};

export default PlayerSkeleton;
