const ResultsTable = ({ data }) => {

  if (!data?.length) {
    return null;
  }

  const columns = Object.keys(data[0]);

  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-4
        sm:p-6
      "
    >

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-2
          mb-5
        "
      >

        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
          "
        >
          Results
        </h2>

        <span
          className="
            text-sm
            text-slate-400
          "
        >
          {data.length} Record{data.length > 1 ? "s" : ""}
        </span>

      </div>

      <div
        className="
          overflow-x-auto
          rounded-xl
          border
          border-slate-800
        "
      >

        <table
          className="
            min-w-full
            text-sm
            sm:text-base
            border-collapse
          "
        >

          <thead>

            <tr
              className="
                bg-slate-800
              "
            >

              {columns.map((column) => (

                <th
                  key={column}
                  className="
                    px-4
                    py-3
                    text-left
                    font-semibold
                    whitespace-nowrap
                    border-b
                    border-slate-700
                  "
                >
                  {column}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (

              <tr
                key={index}
                className="
                  border-b
                  border-slate-800
                  hover:bg-slate-800/60
                  transition-colors
                "
              >

                {columns.map((column) => (

                  <td
                    key={column}
                    className="
                      px-4
                      py-3
                      whitespace-nowrap
                      text-slate-300
                    "
                  >
                    {row[column]}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ResultsTable;