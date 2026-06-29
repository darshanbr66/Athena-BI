import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const ResultsChart = ({
  data,
  question,
}) => {
  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]);

  if (keys.length !== 2) {
    return null;
  }

  const labelKey = keys[0];
  const valueKey = keys[1];

  const chartData = data.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));

  const isDistribution =
    question
      ?.toLowerCase()
      .includes("distribution");

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

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
      <h2
        className="
          text-xl
          sm:text-2xl
          font-bold
          mb-6
        "
      >
        Visualization
      </h2>

      <div
        className="
          w-full
          h-[300px]
          sm:h-[400px]
          lg:h-[450px]
        "
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          {isDistribution ? (
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                outerRadius="70%"
                label
              >
                {chartData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          ) : (
            <BarChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 60,
              }}
            >
              <XAxis
                dataKey="label"
                angle={-35}
                textAnchor="end"
                interval={0}
                height={70}
                tick={{
                  fontSize: 12,
                }}
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsChart;