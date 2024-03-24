import React, {useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface GridItemProps {
    imageSrc: string;
    text: string;
    alt: string;
}

const GridItem: React.FC<GridItemProps> = ({imageSrc, text, alt}) => {
    const [isTextCopied, setIsTextCopied] = useState(false);

    const copyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            setIsTextCopied(true);
            setTimeout(() => {
                setIsTextCopied(false);
            }, 1500)
        });
    };

    return (
        <div className="">
            <LazyLoadImage src={imageSrc} alt={alt} effect="blur" title={alt}/>
            <div className="flex flex-row justify-center items-center">
                <h3 className="text text-slate-600 mt-2">
                    {text.length > 100 ? text.slice(0, 100) + '...' : text}
                </h3>
                {text.length > 0 ? (
                    <button
                        onClick={copyText}
                        className={`text-slate-600 text-right`}
                    >
                        {isTextCopied ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#3b82f6"
                                      d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#b8bbc1">
                                    <path
                                        d="M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.072 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847c-.843-.847-.843-2.21-.843-4.936v-4.82Z"/>
                                    <path
                                        d="M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2C7.229 2 5.343 2 4.172 3.172Z"
                                        opacity=".5"/>
                                </g>
                            </svg>
                        )}
                    </button>
                ) : ('')}
            </div>
        </div>
    );
};

interface CustomGridProps {
    items: GridItemProps[];
    title: string;
}

export const PosterGrid: React.FC<CustomGridProps> = ({items, title}) => {
    return (
        <div className="w-full pl-4 pr-4 md:pl-10 md:pr-10 lg:pl-10 lg:pr-10">
            <h2 className="text-2xl bg-white bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 font-bold pt-4 pb-4 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <GridItem key={index} imageSrc={item.imageSrc} text={item.text} alt={item.alt}/>
                ))}
            </div>
        </div>
    );
};
