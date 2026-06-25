export const detectChartType = (
  question,
  data
) => {

  const q =
    question.toLowerCase();

  if (
    q.includes("distribution")
  ) {
    return "pie";
  }

  if (
    q.includes("top")
  ) {
    return "bar";
  }

  if (
    q.includes("count")
  ) {
    return "bar";
  }

  return "table";
};