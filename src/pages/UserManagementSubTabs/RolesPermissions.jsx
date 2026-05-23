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

  const AssignRole = () => {
    return (
      <div className={` w-full bg-surface grid grid-rows-[0.5fr_4fr] overflow-hidden border border-border`}>
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
    )
  }

  const Permission = () => {
    return (
      <div className={` w-full bg-surface overflow-hidden border border-border`}>
        {/* Header for Permission Activity */}
        <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
          <HandleHeader
            Logo={<Clock color='green' size={20} />}
            title={"Permission Activity"}
          />
        </div>
        <PermissionsActivity />
      </div>
    )
  }

  return (
    <div className={`grid ${width >= 1050 ? "grid-cols-[5fr_250px]" : width >= 600 ? "grid-rows-2" : "grid-cols-1"}   gap-2 w-full h-full overflow-y-auto custom-scrollbar`}>

      <div className={`grid ${width < 600 && "h-80"}  w-full grid-rows-1 [&>div]:rounded-md overflow-hidden`}>
        {/* Role Distribution Header */}
        <div className={`bg-surface h-full w-full grid grid-rows-[0.5fr_7fr] overflow-hidden border border-border`}>
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

      {
        width >= 600 ? (
          <div className={`grid ${width >= 1050 ? "grid-rows-[1.5fr_1fr]" : "grid-cols-2"}   gap-2 [&>div]:rounded-md overflow-hidden w-full h-full`}>

            <AssignRole />

            <Permission />

          </div>
        ) : (
          <div className='[&>div]:h-80 flex flex-col gap-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border'>
            <AssignRole />

            <Permission />
          </div>
        )
      }


    </div>
  )
}

export default RolesPermissions;