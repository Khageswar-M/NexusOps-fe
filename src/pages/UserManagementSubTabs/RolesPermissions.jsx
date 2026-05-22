import React, { useContext, useEffect } from 'react'
import RoleDistribution from '../../components/RolesPermissionsCmp/RoleDistribution';
import AssignRoleToUser from '../../components/RolesPermissionsCmp/AssignRoleToUser';
import PermissionsActivity from '../../components/RolesPermissionsCmp/PermissionsActivity';
import OnlineTag from '../../components/OnlineTag.jsx'
import { rolesItem as Roles } from '../../config/RawData.js';
import { FiPlus as Plus } from "react-icons/fi";
import { LuClock3 as Clock } from "react-icons/lu";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../redux/appSlice.js';

const RolesPermissions = () => {

  const dispatch = useDispatch();
  const width = useSelector((state) => state.app.width);
  useEffect(() => {
    dispatch(setTitle(["User Management", "Roles & Permissions"]));
  }, [dispatch]);

  const HandleHeader = ({ Logo, title }) => {
    return (
      <div className='flex flex-row items-center gap-2'>
        <div>
          {
            Logo ?
              (
                Logo
              ) :
              (
                <OnlineTag diameter={8} bgColor={"gray"} />
              )
          }
        </div>
        <div className='text-text-muted text-[15px]'>
          {title}
        </div>
      </div>
    )
  }

  return (
    <div className={`grid ${width > 1100 ? "grid-cols-[5fr_250px]" : width > 650 ? "grid-cols-1 grid-rows-[1fr_1fr]" : " grid-cols-1 "}  gap-2 w-full h-full overflow-y-auto`}>

      <div className={` grid  w-full grid-rows-1 [&>div]:rounded-md overflow-hidden`}>
        {/* Role Distribution Header */}
        <div className={`bg-surface h-full w-full grid grid-rows-[0.5fr_7fr] overflow-hidden`}>
          <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
            <HandleHeader
              Logo={<OnlineTag diameter={8} bgColor={"purple"} />}
              title={"Role Distribution"}
            />
            <div className='flex flex-row items-center gap-2'>
              <div className='text-text-muted text-[12px]'>
                {Roles.length} roles total
              </div>
              <div className='text-[14px] flex flex-row items-center gap-1 text-black font-bold bg-cyan-300 px-3 py-0.5 rounded-md cursor-pointer'>
                <Plus /> Create
              </div>
            </div>
          </div>
          <div className='overflow-y-auto'>
            <RoleDistribution />
          </div>
        </div>
      </div>

      <div className={`grid ${width > 1100 ? "grid-rows-[1.5fr_1fr]" : width > 650 ? "grid-rows-1 grid-cols-2" : "grid-cols-1"}  gap-2 [&>div]:rounded-md overflow-hidden w-full h-full`}>

        <div className={`${width <= 650 && "h-50"} w-full bg-surface grid grid-rows-[0.5fr_4fr] overflow-hidden`}>
          {/* Header for Assign Role To User */}
          <div className='h-full px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
            <HandleHeader
              Logo={<OnlineTag diameter={8} bgColor="orange" />}
              title={"Assign Role to User"}
            />
          </div>
          <div className=' relative overflow-y-auto'>
            <AssignRoleToUser />
          </div>
        </div>

        <div className={`${width <= 650 && "h-50"} w-full bg-surface overflow-hidden`}>
          {/* Header for Permission Activity */}
          <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
            <HandleHeader
              Logo={<Clock color='green' size={20} />}
              title={"Permission Activity"}
            />
          </div>
          <PermissionsActivity />
        </div>

      </div>
    </div>
  )
}

export default RolesPermissions;