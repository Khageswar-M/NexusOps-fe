import { NavLink } from "react-router-dom";
import { operation2tabs } from "../config/operation2tabs";
import UserListCredentials from "./UserManagementCmp/UserListCredentials";

import { useSelector } from "react-redux";

const OperationsSubTabs = () => {
  const title = useSelector((state) => state.app.title);
  return (
    <div className="bg-surface rounded-md border border-border p-2  flex flex-row  gap-3 items-center overflow-x-auto">
      <div className='flex flex-row items-center  h-full gap-2 px-0'>
        {operation2tabs.map((tab, index) =>
          <NavLink
            key={index}
            to={`/user-management${tab.path}`}
            className={({ isActive }) => `px-3 py-1 shrink-0 rounded-md cursor-pointer text-[12px]  transition-all duration-500
            ${isActive ? 'bg-surface-3 border border-cyan text-cyan' : 'bg-surface-2 border border-border text-text-muted'} `}
          >
            <h1 className=''>{tab.title}</h1>
          </NavLink>
        )}
        {
          title?.[1] === "User List" ?
            (
              <UserListCredentials />
            ) :
            (
              <div></div>
            )
        }
      </div>
    </div>
  )
}

export default OperationsSubTabs