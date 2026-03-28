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
    { name: 'Tue', newUsers: 800, activeUsers: 400, sessions: 300, conversions: 150 },
    { name: 'Wed', newUsers: 2000, activeUsers: 900, sessions: 500, conversions: 300 },
    { name: 'Thu', newUsers: 2600, activeUsers: 1400, sessions: 800, conversions: 500 },
    { name: 'Fri', newUsers: 3000, activeUsers: 1800, sessions: 1100, conversions: 700 },
    { name: 'Sat', newUsers: 3400, activeUsers: 2200, sessions: 1500, conversions: 900 },
    { name: 'Sun', newUsers: 3600, activeUsers: 2600, sessions: 2000, conversions: 1200 },
];

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%" className={"absolute -left-3 p-2"}>
            <AreaChart data={data}>

                {/* Gradients */}
                <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                </defs>

                {/* Axes */}
                <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />

                <Tooltip content={<CustomTooltip />} />

                {/* New Users (Main Highlight Line) */}
                <Area
                    type="monotone"
                    dataKey="newUsers"
                    stroke="#60a5fa"
                    strokeWidth={3}
                    fill="url(#blueGradient)"
                    dot={{ r: 4 }}

                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                />

                {/* Active Users */}
                <Area
                    type="monotone"
                    dataKey="activeUsers"
                    stroke="#4ade80"
                    strokeWidth={2}
                    fill="url(#greenGradient)"
                    dot={{ r: 3 }}

                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                />

                {/* Sessions (Dashed Line) */}
                <Area
                    type="monotone"
                    dataKey="sessions"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="none"
                    dot={false}

                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                />

                {/* Conversions (Dotted Line) */}
                <Area
                    type="monotone"
                    dataKey="conversions"
                    stroke="#a78bfa"
                    strokeWidth={2}
                    strokeDasharray="2 4"
                    fill="none"
                    dot={false}

                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                />

            </AreaChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload) {
        return (
            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-700 shadow-lg">
                <p className="text-xs text-gray-400">{label}</p>

                {payload.map((item, index) => (
                    <p key={index} className="text-xs" style={{ color: item.color }}>
                        {item.name}: <span className="ml-2 font-semibold">{item.value}</span>
                    </p>
                ))}
            </div>
        );
    }
};

export default AreaChartComponent;