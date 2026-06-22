import { useState } from "react";

const QueryInput = ({ onAsk }) => {
  const [question, setQuestion] =
    useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;

    onAsk(question);
  };

  return (
    <div className="mt-10 flex gap-4">

      <input
        type="text"
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask Athena anything..."
        className="
          flex-1
          px-5
          py-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
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
        "
      >
        Analyze
      </button>

    </div>
  );
};

export default QueryInput;