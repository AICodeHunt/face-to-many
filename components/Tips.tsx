import React, { useState } from 'react';;

const TipsComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mt-4 text-sm text-gray-400 font-normal">
            <button
                onClick={toggleExpanded}
                className="hover:text-blue-400 transition duration-300"
            >
                <svg className="inline-block" width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#888686" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="7" cy="7" r="6.5"/>
                        <path d="M7 7v3.5"/>
                        <circle cx="7" cy="4.5" r=".5"/>
                    </g>
                </svg> {isExpanded ? 'Hide Tips' : 'Show Tips'}
            </button>

            {isExpanded && (
                <div id="tips"
                     className="mt-2 block w-full p-2 border border-dashed border-gray-200 rounded shadow-sm">
                    <ul className="list-disc pl-5">
                        <li>
                            <span className="font-semibold">Social Media:</span> What is the Social Media?
                            (e.g., Twitter, Instagram, Facebook, LinkedIn, TikTok)
                        </li>
                        <li>
                            <span className="font-semibold">Profile Name:</span> Your Social Media Profile
                            Name.(e.g., Dane, Taylor, Smart Graphics)
                        </li>
                        <li>
                            <span className="font-semibold">Background:</span> (e.g., The background is mockup
                            of his Snapchat profile page with a profile name "Profile Name" and a profile
                            picture)
                        </li>
                        <li>
                            <span className="font-semibold">Other:</span> Diy prompt you want
                        </li>
                        <li>
                            <span className="font-semibold">Example:</span> realistic photo of a cute boy
                            sitting
                            on a logo chair of a social media logo "Snapchat". wearing Top model clothes. The
                            background is mockup of his Snapchat profile page with a profile name "Smart
                            Graphics" and a profile picture . soft light reflection
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TipsComponent;
