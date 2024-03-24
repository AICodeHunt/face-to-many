// pages/api/generate.ts
import {NextApiRequest, NextApiResponse} from 'next';
import {OpenAI} from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
    }

    const {prompt,style,quality} = req.body;

    console.log(prompt)

    try {
        const openai = new OpenAI({
            apiKey: 'sk-sbEQPL0V3sPJWYiMEfF7BbBcB14240428b5381D648CaA545',
            dangerouslyAllowBrowser: true,
            baseURL: 'http://oneapi.run.place/v1'
        });

        const response = await openai.images.generate({
            model: "bing-dalle-3",
            prompt: prompt,
            n: 1,
            style: style,
            quality: quality,
        });

        console.log("Response from OpenAI:", response);
        res.status(200).json({
            revisedPrompt: response.data[0].revised_prompt,
            imageURL: response.data,
        });
    } catch (error) {
        console.error("Error generating the image:", error);
        res.status(500).send('Internal Server Error');
    }
}
