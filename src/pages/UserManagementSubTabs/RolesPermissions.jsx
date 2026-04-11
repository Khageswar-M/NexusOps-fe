import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/TitleContext';
import RoleDistribution from '../../components/RolesPermissionsCmp/RoleDistribution';
import PermissionMatrix from '../../components/RolesPermissionsCmp/PermissionMatrix';
import AssignRoleToUser from '../../components/RolesPermissionsCmp/AssignRoleToUser';
import PermissionsActivity from '../../components/RolesPermissionsCmp/PermissionsActivity';
import OnlineTag from '../../components/OnlineTag.jsx'
import { rolesItem as Roles } from '../../config/RawData.js';
import { FiPlus as Plus } from "react-icons/fi";
import { LuClock3 as Clock} from "react-icons/lu";

const RolesPermissions = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Roles & Permissions"]);
  }, []);

  const HandleHeader = ({Logo, title}) => {
        return(
            <div className='flex flex-row items-center gap-2'>
                <div>
                    {
                        Logo ? 
                        (
                          Logo
                        ) :
                        (
                            <OnlineTag diameter={8} bgColor={"gray"}/>
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
    <div className='grid grid-cols-[5fr_1.5fr] gap-2 w-full h-full'>
        <div className='grid grid-rows-[1fr_1fr] gap-2 [&>div]:rounded-md'>

          {/* Role Distribution Header */}
          <div className='bg-surface overflow-hidden'>
            <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
              <HandleHeader
                Logo={<OnlineTag diameter={8} bgColor={"purple"}/>}
                title={"Role Distribution"}
              />
              <div className='flex flex-row items-center gap-2'>
                <div className='text-text-muted text-[12px]'>
                  {Roles.length} roles total
                </div>
                <div className='text-[14px] flex flex-row items-center gap-1 text-black font-bold bg-cyan-300 px-3 py-0.5 rounded-md cursor-pointer'>
                  <Plus/> Create
                </div>
              </div>
            </div>
            <RoleDistribution/>
          </div>

          {/* Permission Matrix */}
          <div className='bg-surface'>
            <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
              <HandleHeader
                Logo={<OnlineTag diameter={8} bgColor="green"/>}
                title={"Permission Matrix"}
              />
            </div>
            <PermissionMatrix/>
          </div>
        </div>
        <div className='grid grid-rows-[1.5fr_1fr] gap-2 [&>div]:rounded-md'>
          <div className='bg-surface'>
            {/* Header for Assign Role To User */}
             <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
              <HandleHeader
                Logo={<OnlineTag diameter={8} bgColor="orange"/>}
                title={"Assign Role to User"}
              />
            </div>
            <AssignRoleToUser/>
          </div>
          <div className='bg-surface'>
            {/* Header for Permission Activity */}
             <div className='px-2 p-1 flex flex-row items-center justify-between border-b border-border'>
              <HandleHeader
                Logo={<Clock color='green' size={20}/>}
                title={"Permission Activity"}
              />
            </div>
            <PermissionsActivity/>
          </div>
        </div>
    </div>
  )
}

export default RolesPermissions;