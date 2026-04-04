import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/TitleContext';
import OnlineTag from '../../components/OnlineTag.jsx';
import { FaCheck as Check } from "react-icons/fa";
import { FaEye as Eye } from "react-icons/fa";
import { RiPencilFill as Pen } from "react-icons/ri";
import { BsFillTrash3Fill as Trash } from "react-icons/bs";
import { MdOutlinePlaylistRemove as EmptyList } from "react-icons/md";
import { rolesItem, statusItem } from '../../config/RawData.js';

const UserList = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "User List"]);
  }, []);

  const [checkedUser, setCheckedUser] = useState({});
  const totalChecked = Object.values(checkedUser).filter(Boolean).length;
  const size = 10;


  const HandleActivity = ({ item }) => {
    return (
      <div className={`py-0.5 flex items-center gap-2 px-3 rounded-full border ${item.borderCol} ${item.textCol} ${item.bgCol}`}>
        <OnlineTag diameter={8} bgColor={item.color} />
        <span className='text-[10px]'>{item.title}</span>
      </div>
    )
  }

  const CheckBox = ({ checked, onToggle }) => {
    return (
      <div
        onClick={onToggle}
        className={`${checked ? "bg-cyan-300" : "bg-surface-3"} border border-border h-3 w-3 rounded-xs cursor-pointer flex items-center justify-center font-bold  text-gray-800`}>
        {
          checked ? (<Check className='text-[12px] font-bold' />) : ("")
        }
      </div>
    )
  }

  return (
    <div className='bg-surface h-full w-full'>
      <div className='overflow-hidden grid grid-rows-[1fr_1fr_15fr] h-full border border-border'>
        <div className='bg-surface-3 text-white flex flex-row items-center justify-between px-4 text-[14px] py-1' >
          <div className='flex items-center gap-2'>
            <OnlineTag diameter={8} bgColor={"blue"} />
            <div>All Users</div>
          </div>
          <div className='flex flex-row items-center justify-between gap-3'>
            {
              totalChecked > 0 && (
                <div className='text-orange-500 bg-orange-300/10 border border-orange-400 px-3 rounded-full'>
                  <span className='font-bold'>{`${totalChecked} Selected`}</span>
                </div>
              )
            }

            <div className='flex flex-row items-center gap-2 font-bold'>
              <div className='text-red-500 hover:bg-red-500/20 px-2 rounded-full cursor-pointer'>Delete</div>
              <div className='text-cyan-500 hover:bg-cyan-500/20 px-2 rounded-full cursor-pointer'>Export</div>
            </div>
            <div>
              <span className='text-text-muted '>Showing</span> 7 <span className='text-text-muted'>of 1200 users</span>
            </div>
          </div>
        </div>

        <div id='user-table-head' className=' grid grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr] gap-1 text-white text-[11px] bg-surface-2 items-center py-1 font-bold'>
          <div className='w-full h-full flex items-center justify-center'>
            <CheckBox checked={totalChecked > 0 ? true : false} />
          </div>
          <div>User</div>
          <div>EMAIL</div>
          <div>ROLE</div>
          <div>STATUS</div>
          <div>LAST ACTIVE</div>
          <div className='text-center'>ACTIONS</div>
        </div>

        {
          size > 0 ?
            (
              <div className='overflow-hidden  relative h-full'>
                <div className='overflow-y-auto custom-scrollbar absolute w-full h-full'>
                  {

                    Array.from({ length: size }).map((_, index) => {
                      return (
                        <div key={index} id='user-table-body' className=' grid grid-cols-[0.5fr_2fr_3fr_1fr_1fr_1fr_2fr] gap-1 text-white text-[11px] bg-transparent py-3 items-center border-b border-border'>

                          {/* CHECK BOX */}
                          <div className='w-full h-full flex items-center justify-center'>
                            <CheckBox
                              checked={checkedUser[index] || false}
                              onToggle={() => setCheckedUser(prev => ({
                                ...prev,
                                [index]: !prev[index]
                              }))}
                            />
                          </div>

                          {/* USER CREDENTIAL CONTAINER */}
                          <div className='flex flex-row items-center gap-2'>

                            {/* USER DP */}
                            <div className='flex items-center justify-center bg-linear-to-br from-blue-400  to-orange-500  w-12 h-12 rounded-full text-[15px] font-bold'>
                              JS
                            </div>

                            {/* USER NAME AND JOINED DATE */}
                            <div className='flex flex-col'>
                              <div className='text-[14px] font-bold'>John Smith</div>
                              <div className='text-text-muted text-[10px] font-semibold'>Joined Jan 15, 2024</div>
                            </div>

                          </div>

                          {/* EMAIL */}
                          <div className='text-text-muted text-[12px]'>johnsmith@gmail.com</div>

                          {/* ROLES STATUS */}
                          <div className='relative flex items-center justify-self-start w-full'>
                            <div className="absolute">
                              <HandleActivity item={rolesItem?.[5]} />
                            </div>
                          </div>

                          {/* ACTIVITY STATUS */}
                          <div className='relative flex items-center justify-self-start w-full'>
                            <div className="absolute">
                              <HandleActivity item={statusItem?.[3]} />
                            </div>
                          </div>

                          {/* ACTIVE TIME */}
                          <div className='text-text-muted text-[11px] font-bold text-center'>
                            1 hr ago
                          </div>

                          {/* ACTIONS CONTAINER */}
                          <div className='flex flex-row items-center justify-center'>
                            <div className='flex flex-row items-center gap-2 [&>div]:cursor-pointer'>

                              {/* VIEW */}
                              <div className='flex flex-row items-center gap-1 bg-cyan-300/20 px-2 rounded-full border border-cyan-400 py-0.5 active:bg-cyan-300/10'>
                                <Eye className='text-cyan-300' /> <span className='text-cyan-300'>View</span>
                              </div>

                              {/* EDIT */}
                              <div className='flex flex-row gap-1 items-center border border-border px-2 rounded-full py-0.5 active:bg-orange-500/10'>
                                <Pen className='text-orange-500 text-[13px]' /> <span className='text-white text-[12px]'>Edit</span>
                              </div>

                              {/* DELETE/TRASH-BIN */}
                              <div className='border border-border px-2 rounded-full py-0.5 active:bg-red-500/10'>
                                <Trash className='text-[15px] text-red-600' />
                              </div>

                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            ) :
            (
              <div className='w-full h-full flex flex-col items-center justify-center '>
                <div className='text-cyan-700 text-9xl bg-cyan-700/20 px-20 flex items-center justify-center rounded-full border-5 border-cyan-700'>
                  <EmptyList />
                </div>
              </div>
            )
        }


      </div>
    </div>
  )
}

export default UserList; 