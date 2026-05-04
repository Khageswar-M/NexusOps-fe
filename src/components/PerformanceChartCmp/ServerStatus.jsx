import OnlineTag from '../OnlineTag'
const ServerStatus = () => {

    const serverStatus = [
        {
            tag: "green",
            title: "API server",
            subTitle: {
                subTitleOne: "Primary",
                subTitleTwo: "us-east-1"
            },
            status: "Running",
            subStatus: 99.88
        },
        {
            tag: "green",
            title: "Database",
            subTitle: {
                subTitleOne: "PostgreSQL",
                subTitleTwo: "Primary"
            },
            status: "Connected",
            subStatus: 100
        },
        {
            tag: "orange",
            title: "Queue Worker",
            subTitle: {
                subTitleOne: "Redis",
                subTitleTwo: "Worker"
            },
            status: "Busy",
            subStatus: "High Load"
        },
        {
            tag: "green",
            title: "CDN Edge",
            subTitle: {
                subTitleOne: "Cloudflare",
                subTitleTwo: "Global"
            },
            status: "Activity",
            subStatus: 99.99
        },
    ]

    return (
        <div className='relative h-70 bg-surface grid grid-rows-[1fr_5fr] overflow-hidden'>

            {/* Header */}
            <div className='px-5 text-white/90 text-[12px] font-bold border-b border-b-border flex items-center justify-between'>
                <div>Server Status</div>
                <div className='text-green-500 text-[12px]'>3/4 Healthy</div>
            </div>

            {/* Scroll Area */}
            <div className='overflow-y-auto pb-6 custom-scrollbar [&>div]:rounded-md [&>div]:py-5 px-3 p-3 [&>div]:mb-2 [&>div]:bg-surface-2 [&>div]:border [&>div]:border-border'>

                {
                    serverStatus.map((server, idx) => {
                        return (
                            <div 
                                key={idx}
                                className=' flex items-center  flex-row justify-between px-3 border border-border gap-2 '
                            >

                                <div className='flex flex-row items-center gap-2'>
                                    <div>
                                        <OnlineTag bgColor={server.tag} diameter={10} shadow/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-white font-bold text-[13px]'>{server.title}</div>
                                        <div className='flex flex-row items-center gap-1 text-[10px] text-text-muted font-bold'>
                                            <div>{server.subTitle.subTitleOne}</div>
                                            <div className='w-1 h-1 bg-gray-600 rounded-full' />
                                            <div>{server.subTitle.subTitleTwo}</div>
                                        </div>
                                    </div>
                                </div>


                                <div className='flex flex-col items-center gap-1'>
                                    <div className={`${server.status === "Busy" ? "text-orange-500 bg-orange-500/10 " : "text-green-500 bg-green-500/10"}  font-bold px-3 rounded-full text-[12px]`}>
                                        {server.status}
                                    </div>
                                    <div className='text-text-muted text-[10px] font-bold'>
                                        {server.title === "Queue Worker" ?
                                            server.subStatus :
                                            server.subStatus + "% uptime"
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default ServerStatus