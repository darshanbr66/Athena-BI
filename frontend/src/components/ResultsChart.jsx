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
Legend
} from "recharts";

const ResultsChart = ({
data,
question
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
value: item[valueKey]
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
"#82CA9D"
];

return ( <div
   className="
     bg-slate-900
     rounded-xl
     p-5
   "
 > <h2 className="text-2xl mb-5">
Visualization </h2>


  <ResponsiveContainer
    width="100%"
    height={400}
  >

    {isDistribution ? (

      <PieChart>

        <Pie
          data={chartData}
          dataKey="value"
          nameKey="label"
          outerRadius={140}
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

    )}

  </ResponsiveContainer>

</div>


);
};

export default ResultsChart;
