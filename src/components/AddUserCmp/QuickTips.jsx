import Headers from "./Headers"
import { RiErrorWarningLine as Warning } from "react-icons/ri";
import { TfiEmail as Email } from "react-icons/tfi";
import { TbLockSquareRounded as Lock } from "react-icons/tb";
import { TbSquareCheck as Check } from "react-icons/tb";

const QuickTips = () => {

  const HandleQuickTips = ({ Logo, title, subTitle }) => {
    return (
      <div className="flex flex-row items-center gap-2 px-2 py-1">
        <div className={`p-1.5 rounded-md flex items-center justify-center
            ${title === "Welcome Email" ?
            "bg-cyan-500/20 text-cyan-500" : title === "Strong Passwords" ?
              "bg-orange-500/20 text-orange-500" : title === "List Privilege" ?
                "bg-green-500/20 text-green-500" : ""
          }
          `} >
          {
            Logo
          }
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] text-white/70 font-bold">{title}</div>
          <div className="text-[10px] text-text-muted">{subTitle}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full relative">
      <div>
        <Headers
          Logo={<Warning size={18} className="text-orange-400" />}
          title={"Quick Tips"}
        />
      </div>

      <div className="overflow-y-auto h-35 custom-scrollbar">
          <HandleQuickTips
            Logo={<Email size={15} />}
            title={"Welcome Email"}
            subTitle={"User receives login credentials automatically on creation."}
          />
          <HandleQuickTips
            Logo={<Lock size={15} />}
            title={"Strong Passwords"}
            subTitle={"Use 12+ chars with uppercase, numbers, and symbols."}
          />
          <HandleQuickTips
            Logo={<Check size={15} />}
            title={"List Privilege"}
            subTitle={"Assign the lowest role needed for the user's responsibilities."}
          />
      </div>
    </div>
  )
}

export default QuickTips