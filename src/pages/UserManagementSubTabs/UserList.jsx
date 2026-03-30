import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/TitleContext';
import OnlineTag from '../../components/OnlineTag.jsx';
import { FaCheck as Check } from "react-icons/fa";
import { rolesItem, statusItem } from '../../components/UserManagementCmp/UserListCredentials.jsx';
import { FaEye as Eye } from "react-icons/fa";
import { RiPencilFill as Pen } from "react-icons/ri";
import { BsFillTrash3Fill as Trash } from "react-icons/bs";

const UserList = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "User List"]);
  }, []);

  const [isCheck, setIsCheck] = useState(false);


  const HandleActivity = ({ item }) => {
    return (
      <div className={`py-0.5 flex items-center gap-2 px-3 rounded-full border ${item.borderCol} ${item.textCol} ${item.bgCol}`}>
        <OnlineTag diameter={8} bgColor={item.color} />
        <span className='text-[10px]'>{item.title}</span>
      </div>
    )
  }

  const CheckBox = () => {
    return (
      <div
        onClick={() => setIsCheck(prev => !prev)}
        className={`${isCheck ? "bg-cyan-300" : "bg-surface-3"} border border-border h-3 w-3 rounded-xs cursor-pointer flex items-center justify-center font-bold `}>
        {
          isCheck ? (<Check className='text-[12px] font-bold' />) : ("")
        }
      </div>
    )
  }
  return (
    <div className='bg-surface h-full w-full'>
      <div className=''>
        <div className='bg-surface-3 text-white flex flex-row items-center justify-between px-4 text-[14px] py-1' >
          <div className='flex items-center gap-2'>
            <OnlineTag diameter={8} bgColor={"blue"} />
            <div>All Users</div>
          </div>
          <div className='flex flex-row items-center justify-between gap-3'>
            <div className='text-cyan-500 bg-cyan-300/10 px-3 rounded-full'>
              2 <span className='font-bold'>selected</span>
            </div>
            <div className='flex flex-row items-center gap-2 font-bold'>
              <div className='text-red-500 hover:bg-red-500/20 px-2 rounded-full cursor-pointer'>Delete</div>
              <div className='text-cyan-500 hover:bg-cyan-500/20 px-2 rounded-full cursor-pointer'>Export</div>
            </div>
            <div>
              <span className='text-text-muted '>Showing</span> 7 <span className='text-text-muted'>of 1200 users</span>
            </div>
          </div>
        </div>

        <div id='user-table-head' className=' grid grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr] gap-1 text-white text-[11px] bg-surface-2 py-1'>
          <div className='w-full h-full flex items-center justify-center'>
            <CheckBox />
          </div>
          <div>User</div>
          <div>EMAIL</div>
          <div>ROLE</div>
          <div>STATUS</div>
          <div>LAST ACTIVE</div>
          <div className='text-center'>ACTIONS</div>
        </div>
        <div id='user-table-body' className=' grid grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr] gap-1 text-white text-[11px] bg-surface-3 py-3 items-center'>
          <div className='w-full h-full flex items-center justify-center'>
            <CheckBox />
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className='flex items-center justify-center bg-linear-to-br from-blue-400  to-orange-500  w-12 h-12 rounded-full text-[15px] font-bold'>
              JS
            </div>
            <div className='flex flex-col'>
              <div className='text-[14px] font-bold'>John Smith</div>
              <div className='text-text-muted text-[10px] font-semibold'>Joined Jan 15, 2024</div>
            </div>
          </div>
          <div className='text-text-muted text-[12px]'>khageswarmaharana462@gmail.com</div>
          <div className='relative flex items-center justify-self-start w-full'>
            <div className="absolute">
              <HandleActivity item={rolesItem?.[5]} />
            </div>
          </div>
          <div className='relative flex items-center justify-self-start w-full'>
            <div className="absolute">
              <HandleActivity item={statusItem?.[3]} />
            </div>
          </div>
          <div className='text-text-muted text-[11px] font-bold'>
            1 hr ago
          </div>
          <div className='flex flex-row items-center justify-center'>
            <div className='flex flex-row items-center gap-2 [&>div]:cursor-pointer'>
              <div className='flex flex-row items-center gap-1 bg-cyan-300/20 px-2 rounded-full border border-cyan-400 py-0.5 active:bg-cyan-300/10'>
                <Eye className='text-cyan-300' /> <span className='text-cyan-300'>View</span>
              </div>
              <div className='flex flex-row gap-1 items-center border border-border px-2 rounded-full py-0.5 active:bg-orange-500/10'>
                <Pen className='text-orange-500 text-[13px]' /> <span className='text-white text-[12px]'>Edit</span>
              </div>
              <div className='border border-border px-2 rounded-full py-0.5 active:bg-red-500/10'>
                <Trash className='text-[15px] text-red-600' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList; 