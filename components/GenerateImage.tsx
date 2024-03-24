import React, {SetStateAction, useState} from 'react';
import Tips from "@/components/Tips"

interface ImageData {
    url: string;
    // 其他属性...
}

const GenerateImage = () => {
    const [prompt, setPrompt] = useState(`create Disney Pixar photo of a beautiful girl sitting on a logo chair of a social media logo "tiktok". wearing muslims clothes. The background is mockup of her tiktok profile page with a profile name "Smart Graphics" and a profile picture same as character. soft reflection on the ground`);
    const [style, setStyle] = useState('vivid');
    const [quality, setQuality] = useState('standard');
    const [isLoading, setIsLoading] = useState(false);
    const [imageURLs, setImageURLs] = useState<ImageData[]>([]);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage('');
    };

    const placeholderIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M17.141 2.374c-.924-.124-2.1-.124-3.568-.124h-3.321c-1.467 0-2.644 0-3.568.124c-.957.128-1.755.401-2.388 1.032c-.66.658-.931 1.495-1.053 2.504l-.006.05l.003.195a3.76 3.76 0 0 0-.599.486c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.545c.001 1.625.013 2.957.153 4c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87a3.732 3.732 0 0 0-.772-.593v-.093l-.005-.045c-.122-1.009-.392-1.846-1.053-2.504c-.633-.63-1.43-.904-2.388-1.032M2.751 14.84c.003 1.475.022 2.58.139 3.45c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c.763-.102 1.281-.273 1.672-.535l-2.687-2.419a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07zm15.527 2.201l2.588 2.33c.106-.296.186-.65.244-1.082c.138-1.027.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.109.807-.133 1.816-.138 3.135l.506-.443a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281M5.354 4.47c-.24.239-.412.551-.526 1.053a8.5 8.5 0 0 1 .683-.119c1.14-.153 2.595-.153 4.433-.153h4.112c1.838 0 3.294 0 4.433.153c.171.023.337.05.5.081c-.115-.48-.285-.782-.518-1.015c-.308-.307-.737-.502-1.529-.608c-.813-.11-1.889-.111-3.424-.111h-3.211c-1.535 0-2.611.002-3.424.11c-.792.107-1.221.302-1.529.609"/>
                <path
                    d="M17.5 8.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"/>
            </g>
        </svg>
    );

    const handleGenerateClick = async () => {
        setIsLoading(true);
        setImageURLs([]); // Clear previous images

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({prompt, style, quality}),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setImageURLs(data.imageURL); // Expecting the API to return an object with an imageURL array
        } catch (error) {
            console.error('Error generating the image:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full sm:flex-row p-4 md:pt-10 md:pl-40 md:pr-40 gap-8">
            <div className="w-full md:w-1/2">
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="prompt"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Prompt<span className="text-gray-400 font-normal">（Type what you want to generate）</span>
                        </label>
                        <textarea
                            id="prompt"
                            rows={5}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6 px-3"
                        />
                    </div>
                    <Tips />
                    <div>
                        <label
                            htmlFor="style"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Style
                        </label>
                        <select
                            id="style"
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="mt-2 block w-full p-2 border border-gray-200 rounded shadow-sm"
                        >
                            <option value="vivid">vivid</option>
                            <option value="natural">natural</option>
                        </select>
                    </div>
                    <div className="mt-4 text-sm text-gray-400 font-normal hidden md:block">
                        <div id="tips"
                             className="mt-2 block w-full p-2 border border-dashed border-gray-200 rounded shadow-sm">
                            <ul className="list-disc pl-5">
                                <li>
                                    <span className="font-semibold">Vivid:</span> causes the model to lean towards
                                    generating hyper-real and dramatic images.
                                </li>
                                <li>
                                    <span className="font-semibold">Natural:</span> causes the model to produce more
                                    natural, less hyper-real looking images.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="quality"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Quality
                        </label>
                        <select
                            id="quality"
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            className="mt-2 block w-full p-2 border border-gray-200 rounded shadow-sm"
                        >
                            <option value="standard">Standard</option>
                            <option value="hd">HD</option>
                        </select>
                    </div>
                    <button
                        onClick={handleGenerateClick}
                        className="w-full p-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-300"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Generating...' : 'Generate'}
                    </button>
                </div>
            </div>
            {/* 生成的图片 */}
            <div
                className="w-full md:w-1/2 flex min-h-1/2 flex-wrap gap-4 justify-center border border-dashed border-gray-300 rounded-md p-2">
                {isLoading ? (
                    <div className="flex justify-center items-center w-full h-full">
                        Loading...
                    </div>
                ) : imageURLs.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 w-full">
                        {imageURLs.map((image, index) => (
                            <div key={index} className="relative p-1">
                                <img src={image.url} alt={`Generated ${index}`}
                                     className="w-full h-auto rounded shadow-lg cursor-pointer"
                                     onClick={() => openModal(image.url)}
                                />
                                <a
                                    href={image.url}
                                    target="_blank"
                                    download={`generated_image_${index}`}
                                    className="absolute top-2 right-2 bg-white bg-opacity-75 text-blue-600 rounded-full p-1 hover:bg-opacity-100 transition-opacity duration-300"
                                    aria-label={`Download image ${index}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#000000" fillRule="evenodd"
                                              d="M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m8-5.825l3.243-3.242l1.414 1.414L12 17.004l-5.657-5.657l1.414-1.414L11 13.175V2h2z"/>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center w-full h-full">{placeholderIcon}</div>
                )}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center p-4 z-50"
                         onClick={closeModal}>
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded shadow-lg"/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenerateImage;
