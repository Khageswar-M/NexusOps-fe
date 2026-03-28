import { useState } from "react";
import { HiSquare3Stack3D } from "react-icons/hi2";

const allItems = [
    {
        initials: "JD",
        av: 1,
        name: "John Doe",
        action: "Created a new account",
        type: "User",
        meta: "46 followers",
        time: "2h ago",
        category: "Users"
    },
    {
        initials: "SR",
        av: 2,
        name: "Sara Reeves",
        action: "Made a payment",
        type: "Payment",
        meta: "₹149.00",
        time: "3h ago",
        category: "Payments",
        pos: true

    },
    { 
        initials: "MK", 
        av: 3, 
        name: "Mike Kang", 
        action: "Updated profile picture", 
        type: "User", 
        meta: "112 followers", 
        time: "4h ago", 
        category: "Users" 

    },
    { 
        initials: "AL",
        av: 4, 
        name: "Anna Lin", 
        action: "Refund requested", 
        type: "Payment", 
        meta: "-₹39.99", 
        time: "5h ago", 
        category: "Payments", 
        pos: false 
    },
    { 
        initials: "TW", 
        av: 5, 
        name: "Tom Walsh", 
        action: "Joined via referral", 
        type: "User", 
        meta: "8 followers",
        time: "6h ago", 
        category: "Users" 
    },
    { 
        initials: "PD", 
        av: 1, 
        name: "Priya Das", 
        action: "Subscription renewed", 
        type: "Payment", 
        meta: "₹29.00", 
        time: "8h ago", 
        category: "Payments", 
        pos: true 
    },
    { 
        initials: "OB", 
        av: 2, 
        name: "Oliver Brown", 
        action: "Changed email address", 
        type: "User", 
        meta: "22 followers", 
        time: "10h ago", 
        category: "Users" 
    },
    { 
        initials: "NR", 
        av: 3, 
        name: "Nina Ruiz", 
        action: "Upgraded to Pro plan", 
        type: "Payment", 
        meta: "₹99.00", 
        time: "12h ago", 
        category: "Payments", 
        pos: true 
    },
];

const avatarStyles = [
    "from-purple-500 via-pink-500 to-orange-400",
    "from-blue-500 to-cyan-400",
    "from-green-500 to-lime-400",
    "from-amber-500 to-red-500",
    "from-violet-500 to-blue-500",
];

const TABS = ["All", "Users", "Payments"];

export default function ActivityFeedTable() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? allItems : allItems.filter((i) => i.category === active);

    return (
        <div className="grid grid-rows-[1fr_5fr] h-full w-full overflow-hidden absolute">

            {/* Header */}
            <div className="flex items-center justify-between px-5 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                    <HiSquare3Stack3D className="text-cyan-400 shrink-0" size={16} />
                    <span className="text-[12px] font-bold text-white/80 tracking-wide">
                        Activity Feed
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-3 py-1 rounded-md text-[12px] font-bold transition-all duration-150 cursor-pointer
                            ${active === tab
                                    ? "border border-cyan-500 bg-white/5 text-white"
                                    : "border border-transparent text-white/50 hover:border-white/8"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Feed */}
            <div className="overflow-y-auto min-h-0 pb-6 custom-scrollbar">
                {filtered.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between px-5 py-3 border-b border-white/6 last:border-b-0"
                    >
                        {/* Left */}
                        <div className="flex items-center gap-3 min-w-0">
                            {/* Avatar */}
                            <div
                                className={`w-9 h-9 shrink-0 rounded-full bg-linear-to-br ${avatarStyles[(item.av - 1) % avatarStyles.length]} flex items-center justify-center`}
                            >
                                <span className="text-white font-bold text-[13px]">
                                    {item.initials}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-1 min-w-0">
                                <div className="flex items-center gap-1 flex-wrap">
                                    <span className="text-[11px] font-bold text-white/80 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] font-semibold text-white/35 whitespace-nowrap">
                                        {item.action}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-[10px] font-bold px-2 py-0.5 rounded
                                            ${item.type === "User"
                                                ? "text-cyan-400 bg-cyan-400/10"
                                                : "text-violet-400 bg-violet-400/10"
                                            }`}
                                    >
                                        {item.type}
                                    </span>

                                    {item.category === "Payments" ? (
                                        <span
                                            className={`text-[10px] font-bold ${item.pos ? "text-green-400" : "text-red-400"
                                                }`}
                                        >
                                            {item.meta}
                                        </span>
                                    ) : (
                                        <span className="text-[10px] font-bold text-white/30">
                                            {item.meta}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Time */}
                        <span className="text-[10px] font-bold text-white/30 shrink-0 ml-4">
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}