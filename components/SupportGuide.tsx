import React from 'react';
import {Producthunt01} from "@/components/Producthunt01";

export const SupportGuide = () => {
    return (
        <div className="text-slate-500 leading-8 w-full text-center mt-3">
            Generating disney ai posters may take a few seconds, please be patient. If you have any questions,
            feel free to reach us via email(<span className="text-blue-800">contact@disneyaiposter.com</span>).
            <div className="w-full flex flex-wrap flex-row justify-center items-center">
                Our service is free,If you want support us,considering upvote us on &nbsp;<Producthunt01 />
            </div>
        </div>
    );
};