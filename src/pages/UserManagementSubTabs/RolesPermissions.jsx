import React, { useContext, useEffect, useState } from 'react'
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
import { setCreateRoleTrigger } from '../../redux/uiSlice.js';
import Swal from 'sweetalert2';
import CustomModal from '../../components/CustomModal.jsx';
import { createRole } from '../../api/rolesApi.js';
import { showSuccess } from '../../utils/alert.js';

const RolesPermissions = () => {

  const dispatch = useDispatch();
  const width = useSelector((state) => state.app.width);
  const [openCreate, setOpenCreate] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [roleDesc, setRoleDesc] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleCreateRole = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createRole(roleName, roleDesc);
      setOpenCreate(false);
      console.log(response);
      showSuccess("New role Created", response.message);
      dispatch(setCreateRoleTrigger());
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
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
                <button
                  className='text-[14px] flex flex-row items-center gap-1 text-black font-bold bg-cyan-300 px-3 py-0.5 rounded-md cursor-pointer active:bg-cyan-200'

                  onClick={() => setOpenCreate(true)}
                >
                  <Plus /> Create
                </button>
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

      {
        openCreate && (
          <CustomModal open={setOpenCreate} onClose={() => setOpenCreate(false)}>
            <div className='z-99 rounded-lg text-white md:w-100 bg-surface p-10 border border-border'>
              
              <form className='flex flex-col gap-4' >
                <h3 className='text-center font-bold text-xl text-cyan-300'>Create Role</h3>

                <div className='flex flex-col gap-1'>
                  <label htmlFor="role-name">Role Name</label>
                  <input
                    id='role-name'
                    type="text"
                    placeholder='Enter role name'
                    className={`w-full updateInput py-2`}
                    maxLength={20}
                    onChange={(e) =>{ 
                      setRoleName(e.target.value);
                      setError(null);
                    }}
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor="role-desc">Role Description</label>
                  <textarea
                   id="role-desc"
                    placeholder='Enter description'
                    className='w-full updateInput'
                    maxLength={100}
                    onChange={(e) => {
                      setRoleDesc(e.target.value);
                      setError(null);
                    }}
                   >
                  </textarea>
                </div>

                {
                  (error != null) &&(
                    <div id='role-error' className='text-sm text-red-500'>{error}</div>
                  )
                }

                <div className='flex flex-row items-center justify-around [&>button]:px-5 [&>button]:py-1 [&>button]:rounded-md [&>button]:cursor-pointer [&>button]:font-bold'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenCreate(false);
                    }}
                    className='bg-red-500'
                  >
                    Cancel
                  </button>

                  <button type='submit'
                    className={` ${loading ? "bg-cyan-700" : "bg-cyan-500"}`}
                    onClick={(e) => handleCreateRole(e)}
                  >
                    {
                      loading ? "Creating..." : "Create"
                    }
                  </button>
                </div>
              </form>
            </div>
          </CustomModal>
        )
      }
    </>
  )
}

export default RolesPermissions;