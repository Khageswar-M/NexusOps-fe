import { NavLink } from "react-router-dom";
import { operation2tabs } from "../config/operation2tabs";

const OperationsSubTabs = () => {

  return (
    <div className="bg-[hsl(0,0%,30%)] rounded-md">
      <div className='flex flex-row items-center h-full w-full gap-2 px-1'>
        {operation2tabs.map((tab, index) =>
          <NavLink
            key={index}
            to={`/user-management${tab.path}`}
            className={({isActive}) => `px-5 py-1 rounded-md cursor-pointer ${isActive ? 'bg-[hsl(0,0%,50%)]' : 'bg-[hsl(0,0%,40%)]'} `}
          >
            <h1 className='text-white text-[clamp(10px,15px,20px)]'>{tab.title}</h1>
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default OperationsSubTabs