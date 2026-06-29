import { generatePipeline } from "./gemini.service.js";
import validatePipeline from "./validator.service.js";
import MQL_PROMPT from "../prompts/mql.prompt.js";

function cleanResponse(text) {

  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

}

export const selfHealingPipeline = async (

  question,

  maxAttempts = 3

) => {

  let previousError = "";

  for (

    let attempt = 1;

    attempt <= maxAttempts;

    attempt++

  ) {

    try {

      console.log(
        `Self-Healing Attempt ${attempt}`
      );

      const aiResponse =
        await generatePipeline(

          question,

          MQL_PROMPT,

          previousError

        );

      const cleanedResponse =
        cleanResponse(aiResponse);

      const pipeline =
        JSON.parse(cleanedResponse);

      validatePipeline(
        pipeline
      );

      console.log(
        "Pipeline Validated Successfully"
      );

      return pipeline;

    }

    catch (error) {

      previousError =
        error.message;

      console.log(
        `Attempt ${attempt} Failed`
      );

      console.log(
        previousError
      );

    }

  }

  throw new Error(

    "Athena could not generate a valid MongoDB aggregation pipeline."

  );

};