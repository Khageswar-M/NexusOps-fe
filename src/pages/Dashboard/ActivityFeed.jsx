import { useState } from "react";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdNotifications } from "react-icons/md";
import ActivityFeedTable from "../../components/ActivityFeedTable";
import NotificationTable from "../../components/NotificationTable";

const ActivityFeed = () => {

    const [active, setActive] = useState("All");

    return (
        <div className='rounded-md grid grid-cols-[3fr_2fr] gap-2 h-full [&>div]:rounded-md [&>div]:bg-surface [&>div]:border [&>div]:border-border'>

            {/* Activity Feed */}
            {/* <div  className='grid grid-rows-[1fr_5fr] overflow-hidden'>
                <div className='border-b border-border flex flex-row items-center justify-between px-5'>
                    <div className="flex flex-row items-center gap-3">
                        <HiSquare3Stack3D className="text-cyan-400" size={16} />
                        <div className="text-[12px] font-bold text-white/80">Activity Feed</div>
                    </div>
                    <div className="flex flex-row items-center gap-5 ">
                        {["All", "Users", "Payments"].map((item) => (
                            <div
                                key={item}
                                onClick={() => setActive(item)}
                                className={`px-2 py-1 rounded-md cursor-pointer text-[12px] font-bold 
                                    ${active === item
                                        ? "border border-cyan-500 bg-surface-3 text-white"
                                        : "border border-transparent hover:border-border text-white/50"
                                    }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-y-auto custom-scrollbar pb-6 min-h-0">

                    {Array.from({ length: 3 }).map((item) => {
                        return (
                            <div key={item} className=" flex flex-row items-center justify-between px-5 border-b border-border py-3">
                                <div className="flex flex-row items-center gap-3">
                                    <div id="dp">
                                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">AD</span>
                                        </div>
                                    </div>
                                    <div
                                        id="user-credentials"
                                        className="flex flex-col gap-1"
                                    >
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="text-[11px] font-bold text-white/80">John Doe</div>
                                            <div className="text-[10px] text-text-muted font-bold">Created a new account</div>
                                        </div>

                                        <div className="flex flex-row items-center gap-2">
                                            <div className="text-cyan-400 text-[10px] font-bold bg-cyan-400/10 px-2 rounded-md">
                                                User
                                            </div>
                                            <div className="text-[10px] font-bold text-text-muted">46 followers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[10px] text-text-muted font-bold">2h ago</div>
                            </div>
                        )
                    })}

                </div>
            </div> */}
            <div className="bg-[#0e1117] rounded-xl border border-white/8 h-full relative">
                <ActivityFeedTable/>
            </div>
            

            {/* Notifications */}
            <div className="bg-[#0e1117] rounded-md border border-white/8 h-full relative">
                <NotificationTable/>
            </div>
        </div>
    )
}

export default ActivityFeed;