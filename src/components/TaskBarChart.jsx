import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";
import { taskAutomation as data } from "../config/RawData";


const CustomLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - 8}
      fill="#9CA3AF"
      textAnchor="middle"
      fontSize={10}
    >
      {value.toLocaleString()}
    </text>
  );
};

const TaskBarChart = () => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#9CA3AF", fontSize: "0.8rem", fontWeight: 800 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis hide />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#111827",
              border: "none",
              borderRadius: "10px",
              color: "#fff"
            }}
          />

          <Bar
            dataKey="value"
            radius={[12, 12, 0, 0]}
            label={<CustomLabel />}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>
  );
};

export default TaskBarChart;