'use client';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const products = [
    {
        name: 'Jan',
        product1: 1200,
        product2: 200
    },
    {
        name: 'Feb',
        product1: 200,
        product2: 356
    },
    {
        name: 'Mar',
        product1: 300,
        product2: 4573
    },
    {
        name: 'Apr',
        product1: 400,
        product2: 346
    },
    {
        name: 'May',
        product1: 500,
        product2: 216
    },
    {
        name: 'Jun',
        product1: 400,
        product2: 215
    },
    {
        name: 'Jul',
        product1: 700,
        product2: 1898
    },
    {
        name: 'Aug',
        product1: 900,
        product2: 256
    },
    {
        name: 'Sep',
        product1: 500,
        product2: 1679
    },
    {
        name: 'Oct',
        product1: 900,
        product2: 500
    },
    {
        name: 'Nov',
        product1: 1100,
        product2: 700
    },
    {
        name: 'Des',
        product1: 1200,
        product2: 908
    },
]

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="95%" height="100%">
            <AreaChart width="100%" height="100%" data={products} >
                <XAxis stroke="#fff" dataKey="name" fontSize={10}/>
                <YAxis stroke="#fff" fontSize={10}/>
                <CartesianGrid strokeDasharray="2 2"/>
                <Tooltip content={<CustomTooltip/>}/>

                <Area
                    type="monotone"
                    dataKey="product1"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    stackId="1"
                />
                <Area
                    type="monotone"
                    dataKey="product2"
                    stroke="#2400eb"
                    fill="#3c45f6"
                    stackId="1"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({active, payload, label}) => {
    if(active && payload && label) {
        return(
            <div className="p-4 bg-slate-900 flex flex-col gap-2 rounded-md">
                <p className="text-[10px]">{label}</p>
                <p className="text-[10px] text-blue-400">
                    Product 1:
                    <span className="ml-2 ">${payload[0].value}</span>
                </p>
                <p className="text-[10px] text-blue-400">
                    Product 2:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        )
    }
}

export default AreaChartComponent;

