import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generatePipeline = async (
  question,
  prompt,
  previousError = ""
) => {

  const fullPrompt = `

${prompt}

Question:
${question}

${
  previousError
    ? `
Previous Error:
${previousError}

The previous MongoDB aggregation pipeline was invalid.

Please correct the mistake.

Return ONLY a valid MongoDB aggregation pipeline as JSON.

Do NOT explain anything.
`
    : ""
}
`;

  const response =
    await ai.models.generateContent({

      model: process.env.AI_MODEL,

      contents: fullPrompt,

    });

  return response.text;

};