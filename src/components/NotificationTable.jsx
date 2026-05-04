import { MdNotifications } from "react-icons/md";
import { FaCheck, FaChartBar, FaBell } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { BsCashStack } from "react-icons/bs";

const notifications = [
  {
    title: "CPU Usage is at 90%",
    subtitle: "Server: api-prod-01",
    time: "",
    type: "alert",
    dot: true,
  },
  {
    title: "Backup completed successfully",
    subtitle: "2.4 GB · S3 bucket",
    time: "12m",
    type: "success",
  },
  {
    title: "Analytics report generated",
    subtitle: "Weekly summary ready",
    time: "1h",
    type: "info",
  },
  {
    title: "New user sign up",
    subtitle: "enterprise@acme.io · Pro",
    time: "2h",
    type: "user",
  },
  {
    title: "$1,200 payment received",
    subtitle: "Stripe · Enterprise plan",
    time: "3h",
    type: "payment",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "alert":
      return <IoWarning className="text-yellow-400" />;
    case "success":
      return <FaCheck className="text-green-400" />;
    case "info":
      return <FaChartBar className="text-blue-400" />;
    case "user":
      return <FaBell className="text-yellow-400" />;
    case "payment":
      return <BsCashStack className="text-green-400" />;
    default:
      return null;
  }
};

const getBg = (type) => {
  switch (type) {
    case "alert":
      return "bg-yellow-500/10";
    case "success":
      return "bg-green-500/10";
    case "info":
      return "bg-blue-500/10";
    case "user":
      return "bg-yellow-500/10";
    case "payment":
      return "bg-green-500/10";
    default:
      return "bg-surface-3";
  }
};

const NotificationTable = () => {
  return (
    <div className="h-70 bg-surface  w-full grid grid-rows-[1fr_5fr]  overflow-hidden">
      
      {/* Header */}
      <div className="border-b border-border flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <MdNotifications className="text-orange-400" size={16} />
          <div className="text-[12px] font-bold text-white/80">
            Notifications
          </div>
        </div>

        <div className="text-[11px] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full">
          5 New
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto custom-scrollbar min-h-0">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 border-b border-border hover:bg-surface-2 transition"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              
              {/* Icon */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${getBg(
                  item.type
                )}`}
              >
                {getIcon(item.type)}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5">
                <div className="text-[12px] font-bold text-white/90">
                  {item.title}
                </div>
                <div className="text-[11px] text-text-muted font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              {item.dot && (
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              )}
              {item.time && (
                <div className="text-[11px] text-text-muted font-bold">
                  {item.time}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTable;