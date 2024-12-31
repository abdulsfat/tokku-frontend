import React from 'react';
import { Banner as BannerType } from "@/type";

interface BannerProps {
    data: BannerType;
}

const Banner:React.FC<BannerProps> = ({data}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
            <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{backgroundImage: `url(${data?.imageUrl})`}}>
                <div className="flex flex-col items-center justify-center h-full w-full text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
