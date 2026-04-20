'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", blue: 40, cyan: 30, orange: 20, purple: 10 },
  { name: "Feb", blue: 60, cyan: 50, orange: 40, purple: 30 },
  { name: "Mar", blue: 80, cyan: 60, orange: 50, purple: 40 },
  { name: "Apr", blue: 70, cyan: 65, orange: 55, purple: 45 },
  { name: "May", blue: 90, cyan: 80, orange: 70, purple: 60 },
];

export default function SimpleAreaChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%">
        <AreaChart data={data} 
        >
        
          <XAxis 
            dataKey="name" 
            fontSize={12}
          />
          <YAxis 
            fontSize={12}
          />
          <Tooltip />

          {/* Blue */}
          <Area
            type="monotone"
            dataKey="blue"
            stroke="#3b82f6"
            fill="none"

            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />

          {/* Cyan */}
          <Area
            type="monotone"
            dataKey="cyan"
            stroke="#06b6d4"
            fill="none"

            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />

          {/* Orange */}
          <Area
            type="monotone"
            dataKey="orange"
            stroke="#f97316"
            fill="none"

            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />

          {/* Purple */}
          <Area
            type="monotone"
            dataKey="purple"
            stroke="#a855f7"
            fill="none"

            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}