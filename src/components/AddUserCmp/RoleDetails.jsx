import { IoLockClosed as Lock } from "react-icons/io5";
import Headers from "./Headers";

const RoleDetails = () => {
  return (
    <div>
      <div>
        <Headers
          Logo={<Lock size={17} className="text-cyan-500"/>}
          title={"Role Permission"}
        />
      </div>
    </div>
  )
}

export default RoleDetails