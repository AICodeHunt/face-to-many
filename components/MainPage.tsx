import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactCompareImage from 'react-compare-image';

const products = [
    { id: 1, src: '/explore/home01.jpg', alt: '3d-ai-social-media-images-01' },
    { id: 2, src: '/explore/home02.jpg', alt: '3d-ai-social-media-images-02' },
    { id: 3, src: '/explore/home03.jpg', alt: '3d-ai-social-media-images-04' },
    { id: 4, src: '/explore/home04.jpg', alt: '3d-ai-social-media-images-04' },
    { id: 5, src: '/explore/home05.jpg', alt: '3d-ai-social-media-images-05' },
    { id: 6, src: '/explore/home06.jpg', alt: '3d-ai-social-media-images-06' },
];
export const MainPage = () => {
    return (
        <div className="bg-white h-full p-4 md:p-8 lg:p-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 text-black">
                    Face To Many - Replicate Face To Many & PS2 Filter AI
                </h2>
                <h3 className="text-lg text-gray-600 mb-8">
                    Makes it simple for you to create PS2 Filter AI photos in seconds, to participate in this PS2 Filter
                    AI trend.
                </h3>
                <div
                    className="mb-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-10 pl-4 pr-4 md:pl-20 md:pr-20">
                    <Link href="https://www.disneyaiposter.com/apps/ps2-filter"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg">
                        PS2 Filter
                    </Link>
                    <Link href="https://www.disneyaiposter.com/apps/face-to-many"
                          className="bg-green-500 hover-bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
                        Face To Many
                    </Link>
                </div>
                {/*<AdsHomeTop />*/}
                <div id="example" className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5">
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffc0c6b44c3.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffc0c6b6ddc.jpg"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffc45a0524c.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffc459c3929.jpg"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffca9f2a964.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffcaa0bf0f9.png"
                    />
                    <ReactCompareImage
                        leftImage="https://imgc.cc/2024/03/24/65ffcaa044783.jpeg"
                        rightImage="https://imgc.cc/2024/03/24/65ffcaa0d29b7.png"
                    />
                </div>
            </div>
        </div>
    );
};
