import React, { useState } from 'react'
import MagnifyingGlass from '../../assets/MagnifyingGlass.svg?react';
import Arrow from '../../assets/ArrowRight.svg?react';
import { rolesItem as Roles } from '../../config/RawData';
import OnlineTag from '../../components/OnlineTag.jsx';
import UserLogo from '../../assets/User.svg?react';
import EmptyRole from '../../assets/empty_role.png';
import useInitials from '../../hooks/useInitials.js';

const AssignRoleToUser = () => {
  const [isUserSearch, setIsUserSearch] = useState(false);
  const [search, setSearch] = useState('John');
  console.log(search);

  const [currentUser, setCurrentUser] = useState([]);
  const [checkRole, setCheckRole] = useState(-1);
  const roleSize = Roles.length;

  const users = [
    {
      username: "John Doe",
      role: "Manager",
    },
    {
      username: "John Smith",
      role: "Developer",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
    {
      username: "John Abraham",
      role: "Tester",
    },
  ];

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
    setIsUserSearch(false);
  }

  return (
    <div className='p-1 h-full flex flex-col'>
      {
        isUserSearch ? (
          <div id='search-user' className='flex flex-col h-full'>

            {/*Search container*/}
            <div className='relative flex flex-row items-center px-2 border-b border-border pb-1'>
              <MagnifyingGlass className="h-5 w-5 absolute ml-1 text-text-muted" />
              <input
                className='placeholder:text-text-muted bg-surface-2 w-full pl-7 p-0.5 rounded-md text-white text-[18px] outline-none border border-border transition-colors duration-200 focus:border-cyan-400'
                type="text"
                placeholder='Enter username'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/*Users list*/}
            <div className='flex-1 overflow-y-auto custom-scrollbar p-1'>
              <div className='flex flex-col gap-1'>
                {
                  users.map((user, idx) => (
                    <div
                      key={idx}
                      className='flex flex-row items-center border border-border rounded-md px-2 gap-2 p-1 bg-surface-2 hover:bg-surface-3 cursor-pointer'
                      onClick={() => handleCurrentUser(user)}
                    >
                      {/* Logo */}
                      <div className='w-10 h-10 bg-linear-to-br from-green-500 to-orange-400 rounded-full flex items-center justify-center font-bold text-xl text-white'>
                        {getInitials(user.username)}
                      </div>

                      <div className='flex flex-col'>
                        <div className='text-white text-[15px]'>{user.username}</div>
                        <div className='text-text-muted text-[12px]'>
                          Current: {user.role}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        ) : (
          <div className='h-full grid grid-rows-[1fr_5fr_1fr] gap-1'>

            <div
              className='flex flex-col cursor-pointer border-b border-border pb-1'
              onClick={() => {
                setIsUserSearch(true);
                setSearch(currentUser.username);
              }}
            >
              {/* SELECT USER COMPONENT */}
              <div className='text-[12px] text-text-muted font-bold'>SELECT USER</div>
              {
                !currentUser ? (
                  <div>Search user</div>
                ) : (
                  <div className="text-white flex flex-row items-center  gap-2 p-2 border border-border w-full rounded-md bg-surface-2">
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-10 w-10 bg-linear-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold'>
                        {
                          getInitials(currentUser.username)
                        }
                      </div>
                      <div>
                        <div>{currentUser.username}</div>
                        <div className='text-[12px] text-text-muted'>Current: {currentUser.role}</div>
                      </div>
                      <Arrow className="h-5 w-5 text-text-muted" />
                    </div>
                  </div>
                )
              }
            </div>

            {/* Roles List */}
            <div className='overflow-hidden'>
              <div className='text-[12px] text-text-muted font-bold'>ASSIGN ROLE</div>
              <div className='h-full flex flex-col gap-1 overflow-y-auto custom-scrollbar pb-10'>
                {roleSize > 0 ? (
                  Roles.map((role, idx) => {
                    return (
                      <div className='px-2 py-1 rounded-md bg-surface-2 flex flex-row items-center justify-between border border-border cursor-pointer hover:bg-surface active:border-cyan-400'
                        onClick={() => setCheckRole(idx)}
                      >
                        <div className='flex flex-row gap-2 items-center'>
                          <OnlineTag diameter={8} bgColor={role.color} />
                          <div className={`text-[14px] ${role.textCol}`}>{role.title}</div>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                          <div className='text-[12px] text-text-muted'>0 users</div>
                          <div id='check' className={`border flex items-center justify-center cursor-pointer ${checkRole === idx ? "border-cyan-400" : "border-border"}  p-1 rounded-full`}>
                            {
                              checkRole === idx ? (
                                <OnlineTag diameter={8} bgColor="cyan" />
                              ) : (
                                <div className='p-1' />
                              )
                            }

                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className='h-full w-full flex items-center justify-center '>
                    <img 
                      src={EmptyRole} 
                      alt="empty role" 
                      className='h-30 w-30'
                    />
                  </div>
                )

                }
              </div>
            </div>

            {/* Assign Role Button */}
            <div className='flex items-center justify-center'>
              <div className='bg-cyan-400 w-full rounded-md flex items-center justify-center gap-1 text-[15px] font-bold text-gray-900 p-1 cursor-pointer'>
                <UserLogo className="h-5 w-5" />
                <div>Assign Role</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AssignRoleToUser;