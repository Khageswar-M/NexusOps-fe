import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { HiOutlineUsers, HiMiniUsers } from "react-icons/hi2";
import { MdOutlineInsertChart, MdInsertChart } from "react-icons/md";
import { RiFileList3Line, RiFileList3Fill } from "react-icons/ri";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { HiOutlineDocumentReport, HiDocumentReport } from "react-icons/hi";
import OnlineTag from '../../components/OnlineTag';
import { useState } from 'react';
import { setLoggedIn } from '../../redux/authSlice';
import CircularProgress from '@mui/material/CircularProgress';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setOpenSidebar } from '../../redux/uiSlice';
import { logout } from '../../api/auth/authApi';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';



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

  const title = useSelector((state) => state.app.title);
  const width = useSelector((state) => state.app.width);
  const openSidebar = useSelector((state) => state.ui.openSidebar);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  console.log(email);
  const [loading, setLoading] = useState(false);

  function getColorFromEmail(email) {
    let hash = 0;

    for (let i = 0; i < email.length; i++) {
      hash += email.charCodeAt(i);
    }

    const hue = hash % 360;

    return `hsl(${hue}, 70%, 55%)`;
  }


  const bgColor = getColorFromEmail(email);
  console.log(bgColor);

  const handleLogout = async () => {

    const confirm = await Swal.fire({
      title: "Logout ?",
      text: "Are you sure you want to logout ?",
      icon: "warning",
      customClass: {
        popup: "warning-popup"
      },
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel"
    })

    if(!confirm.isConfirmed) return;


    setLoading(true);
    try {
      const response = await logout();
      console.log(response);
      localStorage.removeItem("user");
      dispatch(setLoggedIn(false));
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className={`bg-surface rounded-md overflow-hidden h-full relative border border-border`}>

      <div className=''>
        <div className='relative flex items-center justify-center flex-col border-b border-border px-0 py-5'>
          <h1 className='font-poppins text-cyan font-bold text-center text-4xl cursor-pointer'>
            NexusOps
          </h1>
          <p className='font-bold text-[12px] text-center text-text-muted'>
            Smart Operations Management Dashboard
          </p>

          <div className='w-30 h-30 bg-cyan-300/20 absolute left-0 top-0 rounded-full blur-3xl' />
        </div>

        <div className='py-2 overflow-y-auto custom-scrollbar min-h-[60vh]'>
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
                      onClick={() => dispatch(setOpenSidebar(false))}
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
      </div>

      <div className="p-3">
        <div className="flex items-center gap-4">
          <div
            className="h-10 w-10 shrink-0 border border-border flex items-center justify-center text-xl rounded-full uppercase text-white"
            style={{ backgroundColor: bgColor }}
          >
            {email.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm text-white font-medium">
              {email}
            </div>
            <div className="text-xs text-gray-400">
              Signed In
            </div>
          </div>
        </div>

        <button
          className="mt-4 w-full py-2 rounded-md border border-border bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
          onClick={handleLogout}
        >
          {
            loading ? <CircularProgress size={20} color='#fff' /> : "Logout"
          }
        </button>
      </div>
    </div>
  )
}

export default AsideScreen;