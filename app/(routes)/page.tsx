import React from 'react';
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import getBanner from "@/actions/get-banners";

export const revalidate = 0

const HomePage = async () => {
    const banner = await getBanner("0c939b29-a859-4c52-8fa6-435e6da51879");

    return (
        <div>
            <Container >
                <div className="space-y-10 pb-10">
                    <Banner data={banner} />
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
