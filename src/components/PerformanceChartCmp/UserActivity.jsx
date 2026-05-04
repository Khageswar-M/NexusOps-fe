import { useState } from "react";
import OnlineTag from "../OnlineTag";
import AreaChartComponent from "../AreaChartComponent";

const UserActivity = () => {
  const [active, setActive] = useState("7");

  const tags = [
    {
      title: "New Users",
      col: "cyan"
    },
    {
      title: "Active Users",
      col: "green"
    },
    {
      title: "Sessions",
      col: "orange"
    },
    {
      title: "Conversions",
      col: "purple"
    },
  ]
  return (
    <div className='relative bg-surface grid grid-rows-[1fr_5fr] h-70 overflow-hidden'>
      <div className='px-5 py-1 text-[12px] font-bold border-b border-b-border flex items-center justify-between'>
        <div className="text-white/90 flex flex-row items-center gap-3">
          <OnlineTag bgColor={"blue"} diameter={10} shadow />
          <div>User Activity Over Time</div>
        </div>
        <div className="flex flex-row gap-5 text-[10px] text-white/50">
          {["7", "30", "90"].map((day) => (
            <div
              key={day}
              onClick={() => setActive(day)}
              className={`px-2 py-1 rounded-md cursor-pointer
        ${active === day
                  ? "border border-cyan-500 bg-surface-3 text-white"
                  : "border border-transparent hover:border-gray-500/20"
                }`}
            >
              {day} Days
            </div>
          ))}
        </div>
      </div>

      

      <div className="relative">
        <div className="w-full flex flex-row items-center gap-5 px-5">
        {tags.map((tag, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-row gap-1 items-center"
            >
              <OnlineTag bgColor={tag.col} diameter={8} />
              <div className="text-[11px] font-bold text-text-muted">{tag.title}</div>
            </div>
          )
        })}
      </div>
        <AreaChartComponent/>
      </div>

    </div>
  )
}

export default UserActivity