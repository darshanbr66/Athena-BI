const KPICards = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const firstRow = data[0];

  const keys = Object.keys(firstRow);

  const labelKey = keys[0];
  const valueKey = keys[1];

  const cards = [
    {
      title: "Total Results",
      value: data.length,
      icon: "📊",
    },
    {
      title: "Top Value",
      value: firstRow[labelKey],
      icon: "🏆",
    },
    {
      title: "Highest Count",
      value: firstRow[valueKey],
      icon: "📈",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-5
            transition-all
            duration-300
            hover:border-cyan-500/40
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-cyan-500/10
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              mb-4
            "
          >
            <h3
              className="
                text-sm
                sm:text-base
                text-slate-400
                font-medium
              "
            >
              {card.title}
            </h3>

            <span className="text-2xl">
              {card.icon}
            </span>
          </div>

          <p
            className="
              text-2xl
              sm:text-3xl
              font-bold
              break-words
            "
          >
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;