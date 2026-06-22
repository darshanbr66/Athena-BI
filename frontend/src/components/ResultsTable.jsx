const ResultsTable = ({ data }) => {

  if (!data?.length) {
    return null;
  }

  const columns =
    Object.keys(data[0]);

  return (
    <div className="overflow-auto">

      <h2 className="text-2xl mb-4">
        Results
      </h2>

      <table
        className="
          w-full
          border-collapse
        "
      >
        <thead>

          <tr className="bg-slate-800">

            {columns.map(
              (column) => (
                <th
                  key={column}
                  className="
                    p-3
                    border
                    border-slate-700
                  "
                >
                  {column}
                </th>
              )
            )}

          </tr>

        </thead>

        <tbody>

          {data.map(
            (row, index) => (

              <tr
                key={index}
                className="
                  bg-slate-900
                "
              >

                {columns.map(
                  (column) => (
                    <td
                      key={column}
                      className="
                        p-3
                        border
                        border-slate-700
                      "
                    >
                      {row[column]}
                    </td>
                  )
                )}

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
};

export default ResultsTable;