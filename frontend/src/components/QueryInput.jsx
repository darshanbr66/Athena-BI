import { useState, useEffect } from "react";

const QueryInput = ({
onAsk,
selectedQuestion
}) => {

const [question, setQuestion] =
useState("");

useEffect(() => {


if (selectedQuestion) {
  setQuestion(selectedQuestion);
}


}, [selectedQuestion]);

const handleSubmit = (e) => {


if (
  e?.type === "keydown" &&
  e.key !== "Enter"
) {
  return;
}

if (!question.trim()) {
  return;
}

onAsk(question);

// Optional:
// setQuestion("");


};

return ( <div className="mt-10 flex gap-4">


  <input
    type="text"
    value={question}
    onChange={(e) =>
      setQuestion(e.target.value)
    }
    placeholder="Ask Athena anything..."
    onKeyDown={handleSubmit}
    className="
      flex-1
      px-5
      py-4
      rounded-xl
      bg-slate-900
      border
      border-slate-700
      outline-none
      focus:border-blue-500
    "
  />

  <button
    onClick={handleSubmit}
    className="
      px-8
      py-4
      bg-blue-600
      rounded-xl
      hover:bg-blue-700
      transition
    "
  >
    Analyze
  </button>

</div>


);
};

export default QueryInput;
