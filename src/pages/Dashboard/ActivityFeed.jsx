import { useState } from "react";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdNotifications } from "react-icons/md";
import ActivityFeedTable from "../../components/ActivityFeedTable";
import NotificationTable from "../../components/NotificationTable";

import { useSelector } from "react-redux";

const ActivityFeed = () => {

    const [active, setActive] = useState("All");
    const width = useSelector((state) => state.app.width);

    return (
        <div className={`rounded-md grid 
        ${width <= 750 ? "grid-cols-1" : "grid-cols-[3fr_2fr] "}
        gap-2 h-full [&>div]:rounded-md [&>div]:bg-surface [&>div]:border [&>div]:border-border`}>
            <div className="rounded-xl border border-white/8 h-full relative">
                <ActivityFeedTable/>
            </div>
            {/* Notifications */}
            <div className="rounded-md border border-white/8 h-full relative">
                <NotificationTable/>
            </div>
        </div>
    )
}

export default ActivityFeed;