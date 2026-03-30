import { NavLink } from "react-router-dom";
import { operation2tabs } from "../config/operation2tabs";
import UserListCredentials from "./UserManagementCmp/UserListCredentials";
import {AppContext} from '../context/TitleContext.jsx';
import { useContext } from "react";

const OperationsSubTabs = () => {
  const { title } = useContext(AppContext);
  return (
    <div className="bg-surface rounded-md border border-border px-1 grid grid-cols-[1fr_1fr] items-center">
      <div className='flex flex-row items-center h-full gap-2 px-1'>
        {operation2tabs.map((tab, index) =>
          <NavLink
            key={index}
            to={`/user-management${tab.path}`}
            className={({ isActive }) => `px-3 py-1 rounded-md cursor-pointer text-[12px]  transition-all duration-500
            ${isActive ? 'bg-surface-3 border border-cyan text-cyan' : 'bg-surface-2 border border-border text-text-muted'} `}
          >
            <h1 className=''>{tab.title}</h1>
          </NavLink>
        )}
      </div>

      {
        title?.[1] === "User List" ?
          (
            <div>
              <UserListCredentials />
            </div>
          ) :
          (
            <div></div>
          )
      }


    </div>
  )
}

export default OperationsSubTabs