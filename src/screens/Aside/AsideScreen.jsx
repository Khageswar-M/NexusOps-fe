import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { operations } from '../../config/operations';
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const AsideScreen = ({ isLocation }) => {

  const icons = [MdOutlineDashboard , FiUsers , FaChartLine , FaListCheck , IoSettingsOutline ];

  return (
    <div className={`${isLocation ? "row-span-3" : "row-span-2"} bg-[hsl(0,0%,30%)] rounded-md`}>
      <div className='grid grid-cols-1 grid-rows-[repeat(10, 1fr)] gap-2 h-[80%] m-1 [&>div]:rounded-md  [&>div:not(:first-child)>h1]:font-pacifico [&>div:not(:first-child)>h1]:text-[clamp(10px,3vw,20px)] [&>div:not(:first-child)>h1]:text-center text-white'>

        <div className='flex items-center justify-center flex-col'>
          <h1 className='font-poppins font-bold text-center text-[clamp(10px,3vw,40px)] cursor-pointer'>
            NexusOps
          </h1>
          <p className='font-bold text-[12px] text-center'>
            Smart Operations Management Dashboard
          </p>
        </div>

        {operations.map((op, index) => {
          const IconComponent = icons[index];
          return (
            <NavLink
              key={op.path}
              to={op.path}
              className={({ isActive }) => `flex items-center px-5 cursor-pointer border  border-transparent rounded-md hover:border-white ${isActive ? 'bg-[hsl(0,0%,55%)]' : "bg-[hsl(0,0%,40%)]"}`}>
                <div className='flex flex-row items-center gap-5'>
                  <div>
                    <IconComponent size={24}/>
                  </div>
                  <h1 className='font-poppins font-bold'>
                    {op.title}
                  </h1>
                </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default AsideScreen;