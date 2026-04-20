import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// 🔥 Active Shape Renderer
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;

  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;

  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* Center Label */}
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>

      {/* Main Slice */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Outer Glow */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Connector Line */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />

      <circle cx={ex} cy={ey} r={3} fill={fill} />

      {/* Value */}
      <text
        x={ex + (cos >= 0 ? 12 : -12)}
        y={ey}
        textAnchor={textAnchor}
        className="fill-gray-800 text-xs"
      >
        {value}
      </text>

      {/* Percentage */}
      <text
        x={ex + (cos >= 0 ? 12 : -12)}
        y={ey}
        dy={14}
        textAnchor={textAnchor}
        className="fill-gray-400 text-[10px]"
      >
        {(percent * 100).toFixed(1)}%
      </text>
    </g>
  );
};

// 🚀 Component
const CustomPieChart = ({ data }) => {
  return (
    <div className="w-full h-full bg-gray-900 rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            activeShape={renderActiveShape}
            isAnimationActive={true}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;