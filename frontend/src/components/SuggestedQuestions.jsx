const questions = [
  "Top 10 states by attorney count",
  "Top 10 cities by attorney count",
  "Attorney vs Agent distribution",
  "How many attorneys are in California?",
  "Top organizations in Pennsylvania",
  "Give the total count of empty organization"
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="mt-6">

      <h3 className="text-slate-400 mb-3">
        Try asking:
      </h3>

      <div className="flex flex-wrap gap-3">

        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
              bg-slate-800
              hover:bg-slate-700
              px-4
              py-2
              rounded-lg
              text-sm
              transition
            "
          >
            {question}
          </button>
        ))}

      </div>

    </div>
  );
};

export default SuggestedQuestions;