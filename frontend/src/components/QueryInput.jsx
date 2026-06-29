import { useState, useEffect } from "react";

const QueryInput = ({
  onAsk,
  selectedQuestion,
}) => {
  const [question, setQuestion] = useState("");

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

    // Optional
    // setQuestion("");
  };

  return (
    <div
      className="
        mt-8
        sm:mt-10
        flex
        flex-col
        sm:flex-row
        gap-4
      "
    >
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
          w-full
          px-5
          py-4
          text-sm
          sm:text-base
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      />

      <button
        onClick={handleSubmit}
        className="
          w-full
          sm:w-auto
          px-8
          py-4
          rounded-xl
          bg-blue-600
          font-semibold
          whitespace-nowrap
          hover:bg-blue-700
          active:scale-[0.98]
          transition-all
          duration-200
        "
      >
        Analyze
      </button>
    </div>
  );
};

export default QueryInput;