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
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-slate-900 rounded-md text-[10px]">
                <p className="text-blue-400">
                    Value:
                    <span className="ml-2">{payload[0].value}</span>
                </p>
            </div>
        );
    }
    return null;
};

export default AreaChartNoGrid;