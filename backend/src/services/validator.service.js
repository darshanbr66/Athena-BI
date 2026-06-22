const ALLOWED_OPERATORS = [
  "$match",
  "$group",
  "$sort",
  "$limit",
  "$project",
  "$count"
];

const FORBIDDEN_OPERATORS = [
  "$out",
  "$merge",
  "$function",
  "$accumulator"
];

const validatePipeline = (pipeline) => {

  if (!Array.isArray(pipeline)) {
    throw new Error("Pipeline must be an array");
  }

  for (const stage of pipeline) {

    const operator =
      Object.keys(stage)[0];

    if (
      FORBIDDEN_OPERATORS.includes(operator)
    ) {
      throw new Error(
        `Forbidden operator: ${operator}`
      );
    }

    if (
      !ALLOWED_OPERATORS.includes(operator)
    ) {
      throw new Error(
        `Unsupported operator: ${operator}`
      );
    }
  }

  return true;
};

export default validatePipeline;