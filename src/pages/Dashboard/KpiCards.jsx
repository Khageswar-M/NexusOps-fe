import AreaChartNoGrid from "../../components/AreaChartNoGrid";
import OnlineTag from '../../components/OnlineTag.jsx';

import { FaUsers } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import { FaHeartBroken } from "react-icons/fa";

const KpiCards = () => {
    const totalUser = [
        { value: 10 },
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
            icon: FaUsers,
            iconColor: "text-blue-500",
            iconBg: "bg-blue-300/10",
            iconBorder: "border-blue-400",
            data: totalUser,
            stroke: "rgba(90,150,250,1)",
            fill: "transparent",
            gradient: "bg-gradient-to-r from-blue-500 to-transparent"
        },
        {
            title: "Active Sessions",
            value: 384,
            change: 4,
            icon: AiFillThunderbolt,
            iconColor: "text-green-500",
            iconBg: "bg-green-300/10",
            iconBorder: "border-green-400",
            data: activeSessions,
            stroke: "rgba(90,250,140,1)",
            fill: "transparent",
            gradient: "bg-gradient-to-r from-green-500 to-transparent"
        },
        {
            title: "Revenue",
            value: 18402,
            change: -9,
            icon: GiReceiveMoney,
            iconColor: "text-orange-500",
            iconBg: "bg-orange-300/10",
            iconBorder: "border-orange-400",
            data: revenue,
            stroke: "orange",
            fill: "transparent",
            gradient: "bg-gradient-to-r from-orange-500 to-transparent"
        },
        {
            title: "System Health",
            value: 75,
            change: 75,
            icon: MdHealthAndSafety,
            iconColor: "text-purple-500",
            iconBg: "bg-purple-300/10",
            iconBorder: "border-purple-400",
            data: systemHealth,
            stroke: "purple",
            fill: "transparent",
            gradient: "bg-gradient-to-r from-purple-500 to-transparent "
        }
    ];

    const GetSystemHealth = ({ bgColor, title }) => {
        const colorMap = {
            green: {
                textCol: 'text-green-500',
                bgCol: 'bg-green-500/10',
                title: "All system normal"
            },
            yellow: {
                textCol: 'text-yellow-500',
                bgCol: 'bg-yellow-500/10',
                title: "All systems stable"
            },
            orange: {
                textCol: 'text-orange-500',
                bgCol: 'bg-orange-500/10',
                title: "System warning"
            },
            red: {
                textCol: 'text-red-500',
                bgCol: 'bg-red-500/10',
                title: "Critical Health"
            },
        }
        return (
            <div className={`flex flex-row items-center gap-2 px-2 rounded-full ${colorMap[bgColor].bgCol}`} >
                <OnlineTag diameter={2} bgColor={bgColor} />
                <span className={`${colorMap[bgColor].textCol} text-[13px]`}>{title}</span>
            </div>
        )
    }

    const HandleKpiIcons = ({iconBg, Icon, iconCol }) => {
        return (
            <div className={`flex items-center justify-center ${iconBg} rounded-md  h-7 w-7`}>
                <Icon size={17} className={iconCol} />
            </div>
        )
    }
    return (
        <div className='rounded-md grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 [&>div]:bg-surface-2 [&>div]:rounded-md'>

            {kpiCards.map((kpi, index) => {
                const Icon = kpi.icon ?? (<HandleKpiIcons
                                        iconBg={"text-red-500/10"}
                                        Icon={FaHeartBroken}
                                        iconCol={"text-red-500"}
                                    />);
                return (
                    <div key={index} className='relative font-bold border border-border overflow-hidden'>
                        <div className={`relative left-0 right-0 top-0 h-1 ${kpi.gradient}`} />
                        <div className="h-full w-full grid grid-cols-[2fr_1fr] gap-1">
                            <div className=" grid grid-rows-[1fr_2fr] gap-1">
                                <div className="flex items-center px-5 text-text-muted text-[14px]">{kpi.title.toUpperCase()}</div>
                                <div className="grid grid-rows-[1fr_1fr] gap-1 [&>div]:px-5">
                                    <div className={`flex items-center text-2xl font-bold ${kpi.iconColor}`}>
                                        {kpi.title === "Revenue" ? (
                                            <span>{`₹ ${kpi.value.toLocaleString("en-IN")}`}</span>
                                        ) : kpi.title === "System Health" ? (
                                            <span>{`${kpi.value}%`}</span>
                                        ) : (
                                            <span>{kpi.value.toLocaleString("en-IN")}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-row w-full items-center gap-2">
                                        <div className="flex flex-row gap-0 items-center ">

                                            {kpi.title === "System Health" ?
                                                (
                                                    <div>
                                                        {
                                                            kpi.value >= 75 ?
                                                                (
                                                                    <GetSystemHealth bgColor={"green"} title={"Healthy"} />
                                                                ) :
                                                                kpi.value >= 50 ?
                                                                    (
                                                                        <GetSystemHealth bgColor={"yellow"} title={"Normal"} />
                                                                    ) :
                                                                    kpi.value >= 25 ?
                                                                        (
                                                                            <GetSystemHealth bgColor={"orange"} title={"Moderate"} />
                                                                        ) :
                                                                        (
                                                                            <GetSystemHealth bgColor={"red"} title={"Bad"} />
                                                                        )
                                                        }
                                                    </div>
                                                ) :
                                                (
                                                    <div className="flex flex-row items-center gap-1">
                                                        <div className={`flex flex-row items-center ${kpi.change >= 0 ? `text-green-400 bg-green-400/10` : `text-red-400 bg-red-400/10`} w-12  rounded-lg`}>
                                                            {kpi.change >= 0 ?
                                                                (<TiArrowUp size={18} />) :
                                                                (<TiArrowDown size={18} />)
                                                            }
                                                            <span className="text-[12px]">{kpi.change}%</span>
                                                        </div>
                                                        <span className="text-[12px] text-text-muted">
                                                            {
                                                                kpi.title === "Total Users" ? "vs last month" :
                                                                    kpi.title === "Active Sessions" ? "vs yesterday" :
                                                                        kpi.title === "Revenue" ? "vs last week" : ""
                                                            }
                                                        </span>
                                                    </div>
                                                )
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" grid grid-rows-[1fr_2fr] gap-1">
                                <div className={`flex items-center justify-center`}>
                                    <HandleKpiIcons
                                        iconBg={kpi.iconBg}
                                        Icon={Icon}
                                        iconCol={kpi.iconColor}
                                    />
                                </div>
                                <div >
                                    <AreaChartNoGrid
                                        data={kpi.data}
                                        strokeCol={kpi.stroke}
                                        fillCol={kpi.fill}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default KpiCards;