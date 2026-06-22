import { generatePipeline } from "../services/gemini.service.js";
import validatePipeline from "../services/validator.service.js";
import { executePipeline } from "../services/mongo.service.js";
import MQL_PROMPT from "../prompts/mql.prompt.js";
import { preprocessQuestion } from "../services/queryPreprocessor.service.js";

function cleanResponse(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    const processedQuestion =
      preprocessQuestion(question);

    console.log("Original:", question);
    console.log("Processed:", processedQuestion);

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // Step 1: Generate MQL Pipeline
    const aiResponse = await generatePipeline(
      processedQuestion,
      MQL_PROMPT
    );

    // Step 2: Clean Gemini Response
    const cleanedResponse = cleanResponse(aiResponse);

    // Step 3: Convert to JSON
    const pipeline = JSON.parse(cleanedResponse);

    // Step 4: Validate Pipeline
    validatePipeline(pipeline);

    // Step 5: Execute Pipeline
    const data = await executePipeline(pipeline);

    // Step 6: Return Response
    return res.status(200).json({
      success: true,
      question,
      pipeline,
      totalRecords: data.length,
      data,
    });

  } catch (error) {
    console.error("Athena Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};