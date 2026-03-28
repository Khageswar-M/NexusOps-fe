import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { HiOutlineUsers, HiMiniUsers } from "react-icons/hi2";
import { MdOutlineInsertChart, MdInsertChart } from "react-icons/md";
import { RiFileList3Line, RiFileList3Fill } from "react-icons/ri";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { HiOutlineDocumentReport, HiDocumentReport } from "react-icons/hi";
import OnlineTag from '../../components/OnlineTag';
import { useState, useContext } from 'react';
import { AppContext } from '../../context/TitleContext';



const AsideScreen = ({ isLocation }) => {

  const sideBarTabs = [
    {
      title: "MAIN",
      tabs: [
        {
          tabIcon: [MdOutlineDashboard, MdDashboard],
          tabTitle: "Dashboard",
          to: "/dashboard"
        },
        {
          tabIcon: [HiOutlineUsers, HiMiniUsers],
          tabTitle: "User Management",
          to: "/user-management"
        }
      ]
    },
    {
      title: "ANALYTICS",
      tabs: [
        {
          tabIcon: [MdOutlineInsertChart, MdInsertChart],
          tabTitle: "Data Analytics",
          to: "/data-analytics"
        },
        {
          tabIcon: [HiOutlineDocumentReport, HiDocumentReport],
          tabTitle: "Reports",
          to: "/reports"
        }
      ]
    },
    {
      title: "SYSTEM",
      tabs: [
        {
          tabIcon: [RiFileList3Line, RiFileList3Fill],
          tabTitle: "Task Automation",
          to: "/task-automation"
        },
        {
          tabIcon: [IoSettingsOutline, IoSettingsSharp],
          tabTitle: "System Settings",
          to: "/system-settings"
        }
      ]
    },
  ]

  const { title } = useContext(AppContext);


  return (
    <div className={`${isLocation ? "row-span-3" : "row-span-2"} bg-surface rounded-md overflow-y-auto relative border border-border`}>
      <div className=''>
        <div className='relative flex items-center justify-center flex-col border-b border-border px-0 py-5'>
          <h1 className='font-poppins text-cyan font-bold text-center text-[clamp(10px,3vw,40px)] cursor-pointer'>
            NexusOps
          </h1>
          <p className='font-bold text-[12px] text-center text-text-muted'>
            Smart Operations Management Dashboard
          </p>

          <div className='w-30 h-30 bg-cyan-300/20 absolute left-0 top-0 rounded-full blur-3xl' />
        </div>

        <div className='py-2'>
          {sideBarTabs.map((sideBarTab, index) => {
            return (
              <div
                key={index}
                className='grid grid-rows-[1fr_2fr_2fr] [&>div]:flex [&>div]:items-center px-4 mb-1 py-1'
              >
                <div className='text-[12px] text-text-muted font-bold'>
                  {sideBarTab.title}
                </div>
                {sideBarTab.tabs.map((tab, i) => {
                  const currentTitle = title.length === 0 ? "Dashboard" : title[0];
                  const isActive = currentTitle === tab.tabTitle;
                  const Icon = isActive ? tab.tabIcon[1] : tab.tabIcon[0];
                  return (
                    <NavLink
                      key={i}
                      className={`gap-3 flex flex-row items-center rounded-md mt-0 mb-1 py-2 px-3 border transition-all duration-200
                          ${isActive
                          ? "border-border-hover bg-surface-2 shadow-md text-cyan"
                          : "border-transparent hover:border-border hover:bg-surface-2/50 text-text-muted"
                        }`}
                      to={tab.to}
                    >
                      <Icon
                        color={isActive ? '#22d3ee' : '#64748b'}
                        size={19}
                      />
                      <h3 className='text-[15px]'>{tab.tabTitle}</h3>
                    </NavLink>
                  )
                })}
              </div>
            )
          })}
        </div>

        <div className='absolute bottom-0 border-t border-border w-full py-3 flex items-center justify-center'>
          <div className='flex flex-row items-center justify-between gap-3 bg-surface-2/50 border border-border px-5 py-2 w-[90%] max-w-[90%] rounded-md'>
            <div className='flex flex-row gap-3'>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>

              <div className='flex flex-col'>
                <h2 className='font-bold text-[16px] text-white'>Admin</h2>
                <h5 className='font-medium text-[13px] text-text-muted'>Super Admin</h5>
              </div>
            </div>
            <div className='relative right-0 '>
              <OnlineTag
                diameter={10}
                bgColor={"green"}
                shadow
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideScreen;