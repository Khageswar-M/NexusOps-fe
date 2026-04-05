import Headers from "./Headers";
import { LuClock4 as Clock } from "react-icons/lu";

const RecentlyAdded = () => {
  return (
    <div>
      <div>
        <Headers
          Logo={<Clock size={17} className="text-green-500"/>}
          title={"Recently Added"}
        />
      </div>
    </div>
  )
}

export default RecentlyAdded