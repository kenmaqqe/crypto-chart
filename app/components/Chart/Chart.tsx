import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export type ChartPoint = {
  time: string;
  price: number;
};

type Props = {
  chartData: ChartPoint[];
};

const Chart = ({ chartData }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <ResponsiveContainer width="90%" height={500}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#333" />
          <XAxis
            dataKey="time"
            tick={{ fill: "#aaa" }}
            tickLine={false}
            axisLine={{ stroke: "#444" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#aaa" }}
            tickLine={false}
            axisLine={{ stroke: "#444" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#222",
              border: "none",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f2a900"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
