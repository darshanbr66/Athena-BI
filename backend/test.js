import "dotenv/config";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prompt = `
You are a MongoDB aggregation expert.

Return ONLY a valid MongoDB aggregation pipeline.

Collection Name:
Roster-Data

Available Fields:
slNo
name
organization
address
city
state
country
zipcode
phoneNumber
registrationNumber
category

Rules:

1. Return ONLY JSON.
2. No markdown.
3. No explanation.
4. Use only aggregation operators.
5. Never use update, delete, merge or out.
6. Use exact field names.

Question:
Give any two attorneys information
`;

async function test() {

  try {

    console.log("Using Model:", "gemma-4-31b-it");

    const response =
      await ai.models.generateContent({

        model: "gemma-4-31b-it",

        contents: prompt

      });

    console.log("\n========== RESPONSE ==========\n");

    console.log(response.text);

  }

  catch (error) {

    console.error(error);

  }

}

test();