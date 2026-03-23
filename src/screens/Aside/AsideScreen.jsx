import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { operations } from '../../config/operations';
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";

const AsideScreen = ({ isLocation }) => {

  const icons = [MdOutlineDashboard, FiUsers, FaChartLine, FaListCheck, IoSettingsOutline];

  const sideBarTabs = [
    {
      title: "MAIN",
      tabs: [
        {
          tabIcon: MdOutlineDashboard,
          tabTitle: "Dashboard",
          to: "/dashboard"
        },
        {
          tabIcon: FiUsers,
          tabTitle: "User Management",
          to: "/user-management"
        }
      ]
    },
    {
      title: "ANALYTICS",
      tabs: [
        {
          tabIcon: FaChartLine,
          tabTitle: "Data Analytics",
          to: "/data-analytics"
        },
        {
          tabIcon: BiSolidReport,
          tabTitle: "Reports",
          to: "/reports"
        }
      ]
    },
    {
      title: "SYSTEM",
      tabs: [
        {
          tabIcon: FaListCheck,
          tabTitle: "Task Automation",
          to: "/task-automation"
        },
        {
          tabIcon: IoSettingsOutline,
          tabTitle: "System Settings",
          to: "/system-settings"
        }
      ]
    },
  ]

  return (
    <div className={`${isLocation ? "row-span-3" : "row-span-2"} bg-surface rounded-md`}>
      <div className=''>

        <div className='flex items-center justify-center flex-col border-b border-text-muted px-0 py-5'>
          <h1 className='font-poppins text-cyan font-bold text-center text-[clamp(10px,3vw,40px)] cursor-pointer'>
            NexusOps
          </h1>
          <p className='font-bold text-[12px] text-center text-text-muted'>
            Smart Operations Management Dashboard
          </p>
        </div>

        <div className='py-2'>
          {sideBarTabs.map((sideBarTab, index) => {
            return (
              <div
                key={index}
                className='grid grid-rows-[1fr_2fr_2fr] [&>div]:flex [&>div]:items-center px-4 py-0'
              >
                <div className='text-[12px] text-text-muted'>{sideBarTab.title}</div>
                {sideBarTab.tabs.map((tab, i) => {
                  const Icon = tab.tabIcon;
                  return (
                    <NavLink
                      key={i}
                      className='gap-3 flex flex-row items-center bg-surface-2 rounded-md mt-1 mb-1 py-2 px-3 border border-border'
                      to={tab.to}
                    >
                      <Icon color='#fff' size={19} />
                      <h3 className='text-cyan'>{tab.tabTitle}</h3>
                    </NavLink>
                  )
                })}

              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default AsideScreen;