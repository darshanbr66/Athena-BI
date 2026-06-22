import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generatePipeline = async (
  question,
  prompt
) => {

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
${prompt}

Question:
${question}
`,
    });

  return response.text;
};