const questions = [
  "Top 10 states by attorney count",
  "Top 10 cities by attorney count",
  "Attorney vs Agent distribution",
  "How many attorneys are in California?",
  "Top organizations in Pennsylvania",
  "Give the total count of empty organization",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="mt-6 sm:mt-8">
      <h3
        className="
          mb-4
          text-sm
          sm:text-base
          font-medium
          text-slate-400
        "
      >
        Try asking:
      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
              w-full
              sm:w-auto
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-left
              text-sm
              text-slate-200
              transition-all
              duration-200
              hover:bg-slate-700
              hover:border-cyan-500/40
              hover:-translate-y-0.5
              active:scale-[0.98]
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