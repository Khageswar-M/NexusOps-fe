import AreaChartNoGrid from "../../components/AreaChartNoGrid";

import { HiUsers } from "react-icons/hi2";
import { IoCheckbox } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const KpiCards = () => {
    const totalUser = [
        { value: 0 },
        { value: 20 },
        { value: 30 },
        { value: 40 },
        { value: 50 },
        { value: 10 },
        { value: 20 },
        { value: 30 },
        { value: 50 }
    ];

    const activeSessions = [
        { value: 120 },
        { value: 150 },
        { value: 180 },
        { value: 160 },
        { value: 200 },
        { value: 220 },
        { value: 210 },
        { value: 230 },
        { value: 250 }
    ];

    const revenue = [
        { value: 500 },
        { value: 700 },
        { value: 900 },
        { value: 1200 },
        { value: 1500 },
        { value: 1700 },
        { value: 2000 },
        { value: 2300 },
        { value: 2600 }
    ];

    const systemHealth = [
        { value: 10 },
        { value: 30 },
        { value: 49 },
        { value: 96 },
        { value: 98 },
        { value: 97 },
        { value: 95 },
        { value: 98 },
        { value: 99 }
    ];

    const kpiCards = [
        {
            title: "Total Users",
            value: 1284,
            change: 12,
            icon: HiUsers,
            data: totalUser,
            stroke: "rgba(90,150,250,1)",
            fill: "rgba(90,150,250,0.5)"
        },
        {
            title: "Active Sessions",
            value: 384,
            change: 4,
            icon: IoCheckbox,
            data: activeSessions,
            stroke: "rgba(90,250,140,1)",
            fill: "rgba(90,250,140,0.5)"
        },
        {
            title: "Revenue",
            value: 18402,
            change: -9,
            icon: FaWallet,
            data: revenue,
            stroke: "rgba(250,230,90,1)",
            fill: "rgba(250,230,90,0.4)"
        },
        {
            title: "System Health",
            value: 99.84,
            change: 100,
            icon: IoIosSettings,
            data: systemHealth,
            stroke: "rgba(90,200,250,1)", // fixed color
            fill: "rgba(90,200,250,0.4)"
        }
    ];

    return (
        <div className='rounded-md grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 [&>div]:bg-primary [&>div]:rounded-md'>

            {kpiCards.map((kpi, index) => {
                return (
                    <div key={kpi.title} className='relative font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)] '>
                        <div className='grid grid-cols-[1fr_2fr] h-full'>
                            <div></div>
                            <div>
                                <AreaChartNoGrid
                                    data={kpi.data}
                                    strokeCol={kpi.stroke}
                                    fillCol={kpi.fill}
                                />
                            </div>
                        </div>
                        <div className="absolute top-1 left-1 px-2 gap-0 flex flex-col">
                            <div className="flex flex-row gap-2 items-center">
                                {<kpi.icon size={20} color="hsl(0,0%,90%)"/>}
                                <h3 className="text-[15px] text-[hsl(0,0%,90%)] font-extrabold">{kpi.title}</h3>
                            </div>
                            <h2 className="text-[17px] text-[hsl(0,0%,100%)]">
                                {kpi.title === "Revenue" ?
                                    `$ ${kpi.value}`
                                    : kpi.title === "System Health" ?
                                        `${kpi.value} %`
                                        : `${kpi.value}`
                                }
                            </h2>
                            <div className="flex flex-row items-center gap-1">
                                {kpi.title === "System Health" ?
                                    (
                                        <GoDotFill size={22} color="hsl(120,100%,50%)" />
                                    ) :
                                    kpi.change >= 0 ?
                                        (
                                            <IoMdArrowUp size={17} color="hsl(140,100%,50%)" />
                                        ) :
                                        (
                                            <IoMdArrowDown size={17} color="hsl(0,100%,50%)" />
                                        )
                                }
                                <h5
                                    className={`text-[12px] ${kpi.title === "System Health"
                                        ? kpi.value >= 50
                                            ? "text-[hsl(120,100%,50%)]"
                                            : "text-red-400"
                                        : kpi.change >= 0
                                            ? "text-[hsl(120,100%,50%)]"
                                            : "text-red-400"
                                        }`}
                                >
                                    {
                                        kpi.title === "System Health"
                                            ? kpi.value >= 50
                                                ? "Healthy"
                                                : "Unhealthy"
                                            : `${kpi.change}%`
                                    }
                                </h5>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default KpiCards;