import { generatePipeline } from "./gemini.service.js";

export const retryPipeline = async (
  question,
  prompt,
  maxAttempts = 3
) => {

  let lastError = "";

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {

    try {

      console.log(
        `Pipeline Attempt ${attempt}`
      );

      const response =
        await generatePipeline(
          question,
          prompt,
          lastError
        );

      return response;

    }

    catch (error) {

      lastError = error.message;

      console.log(
        `Attempt ${attempt} Failed`
      );

    }

  }

  throw new Error(
    "Athena failed to generate a valid pipeline after multiple attempts."
  );

};