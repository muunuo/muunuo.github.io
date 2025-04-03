import { OpenAI } from 'openai';
import "dotenv/config";

const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY});

export async function aiCall(message) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {role: "system", comtent: "You are a nice bot"},
            {role: "user", content: message}
        ]
    });
    return response.choices[0].message.content;
};
