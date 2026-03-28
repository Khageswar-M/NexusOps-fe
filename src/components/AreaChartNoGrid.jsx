import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const AreaChartNoGrid = ({data, strokeCol, fillCol}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width="100%" height="100%" data={data}>
                <Tooltip content={<CustomTooltip/>}/>
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={strokeCol}
                    fill={fillCol}

                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload) {
        return (
            <div className="bg-slate-900 px-2 rounded-lg border border-slate-700 shadow-lg ">
                <p className="text-xs text-gray-400">{label}</p>

                {payload.map((item, index) => (
                    <span key={index} className="text-xs" style={{ color: item.color }}>
                        {item.name}: <span className="ml-2 font-semibold">{item.value}</span>
                    </span>
                ))}
            </div>
        );
    }
};

export default AreaChartNoGrid;