import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ResultsChart = ({ data }) => {

  if (!data?.length) {
    return null;
  }

  const first =
    data[0];

  const keys =
    Object.keys(first);

  if (keys.length !== 2) {
    return null;
  }

  const labelKey =
    keys[0];

  const valueKey =
    keys[1];

  const chartData =
    data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
    }));

  return (
    <div
      className="
        bg-slate-900
        rounded-xl
        p-5
      "
    >
      <h2 className="text-2xl mb-5">
        Visualization
      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >
        <BarChart
          data={chartData}
        >
          <XAxis
            dataKey="label"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ResultsChart;