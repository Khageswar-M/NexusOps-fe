import { useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { COLOR_MAP } from "../../config/RawData";

const CustomPieChart = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // 🎯 Calculate center value
  const getCenterValue = () => {
    if (activeIndex !== null) {
      const value = data[activeIndex].value;
      const role = data[activeIndex].name;
      const col = data[activeIndex].col;
      const percent = ((value / total) * 100).toFixed(2);

      return (
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan x="50%" dy="-5" fontSize="18" fontWeight={900} fill={COLOR_MAP[col]}>
            {percent}%
          </tspan>
          <tspan x="50%" dy="15" fontSize="12" fill="#fff">
            {role}
          </tspan>
        </text>
      );
    }

    return (
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#fff">
        --
      </text>
    );
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <PieChart
        responsive
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="60%"
          outerRadius="85%"
          isAnimationActive={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLOR_MAP[entry.col] || "#ccc"}
              opacity={activeIndex === null || activeIndex === index ? 1 : 0.4} // 🔥 fade others
            />
          ))}
        </Pie>

        {/* 🎯 Dynamic Center Label */}
        <Label content={getCenterValue} />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;