
const ResourceUsage = () => {
    const resourceUsage = [
        {
            title: "CPU Usage",
            value: 90
        },
        {
            title: "Memory",
            value: 72
        },
        {
            title: "Dish I/O",
            value: 45
        },
        {
            title: "Network",
            value: 38
        },
        {
            title: "Storage",
            value: 61
        }
    ]
    const colorMap = {
        green: "text-green-400",
        purple: "text-purple-400",
        orange: "text-orange-400",
        red: "text-red-400"
    }
    return (
        <div className='bg-surface grid grid-rows-[1fr_5fr] overflow-hidden'>
            <div className='px-5 text-white/90 text-[15px] font-bold border-b border-b-border flex items-center'>
                Resource Usages
            </div>
            <div className='overflow-y-auto pb-6 custom-scrollbar' >
                {resourceUsage.map((usage, index) => {
                    return (
                        <div
                            key={index}
                            className='py-2'
                        >
                            <div className='flex flex-row items-center justify-between px-3 py-1'>
                                <div className='text-white/50 text-[12px]'>{usage.title}</div>
                                <div className={`text-[12px] font-extrabold 
                    ${usage.value >= 90 ?
                                        colorMap["red"] :
                                        usage.value >= 70 ?
                                            colorMap["orange"] :
                                            usage.value >= 40 ?
                                                colorMap["purple"] :
                                                colorMap["green"]
                                    }
                    `}>{`${usage.value}%`}</div>
                            </div>
                            <div className='h-1.5 px-3'>
                                <div className='w-full h-full bg-white/10 rounded-full overflow-hidden'>

                                    <div
                                        className={`
                        h-full
                        bg-linear-to-r
                        ${usage.value >= 90
                                                ? "from-green-400 via-blue-400 to-red-500"
                                                : usage.value >= 70
                                                    ? "from-green-400 via-blue-400 to-orange-500"
                                                    : usage.value >= 40
                                                        ? "from-green-400 via-blue-400 to-purple-500"
                                                        : "from-green-400 to-blue-400"
                                            }
                          transition-all duration-500`}
                                        style={{ width: `${usage.value}%` }}
                                    />

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ResourceUsage