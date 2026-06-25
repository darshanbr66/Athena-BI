// import { generatePipeline } from "../services/gemini.service.js";
import validatePipeline from "../services/validator.service.js";
import { executePipeline } from "../services/mongo.service.js";
import MQL_PROMPT from "../prompts/mql.prompt.js";
import { preprocessQuestion } from "../services/queryPreprocessor.service.js";
import { retryPipeline } from "../services/retryPipeline.service.js";

function cleanResponse(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export const askQuestion = async (req, res) => {

  try {

    const totalStart = Date.now();

    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    const processedQuestion =
      preprocessQuestion(question);

    console.log("Original:", question);
    console.log("Processed:", processedQuestion);

    // ==========================
    // AI Pipeline Generation
    // ==========================

    const aiStart = Date.now();

    const aiResponse =
    await retryPipeline(
      processedQuestion,
      MQL_PROMPT
    );

    const aiTime =
      Date.now() - aiStart;

    // ==========================
    // Clean AI Response
    // ==========================

    const cleanedResponse =
      cleanResponse(aiResponse);

    // ==========================
    // Convert to JSON
    // ==========================

    const pipeline =
      JSON.parse(cleanedResponse);

    // ==========================
    // Validate Pipeline
    // ==========================

    validatePipeline(pipeline);

    // ==========================
    // Execute MongoDB Pipeline
    // ==========================

    const dbStart = Date.now();

    const data =
      await executePipeline(pipeline);

    const dbTime =
      Date.now() - dbStart;

    // ==========================
    // Total Execution Time
    // ==========================

    const totalTime =
      Date.now() - totalStart;

    // ==========================
    // Response
    // ==========================

    return res.status(200).json({

      success: true,

      question,

      pipeline,

      totalRecords: data.length,

      data,

      execution: {

        model:
          process.env.AI_MODEL,

        queryGenerationMs:
          aiTime,

        databaseExecutionMs:
          dbTime,

        totalExecutionMs:
          totalTime

      }

    });

  }

  catch (error) {

    console.error(
      "Athena Error:",
      error
    );

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};