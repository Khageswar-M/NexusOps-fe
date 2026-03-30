import { useState } from 'react';
import { LiaAngleDownSolid as Down, LiaAngleUpSolid as Up } from "react-icons/lia";
import CustomizedMenu from './CustomizedMenu.jsx';
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { MdOutlineFileDownload as Download } from "react-icons/md";
import CustomToolTip from '../CustomToolTip.jsx';
import CustomModal from '../CustomModal.jsx';

export const rolesItem = [
        {
            title: "All Roles",
            color: "gray",
            textCol: "text-gray-500",
            bgCol: "bg-gray-500/10",
            borderCol: "border-gray-500"
        },
        {
            title: "Admin",
            color: "blue",
            textCol: "text-blue-500",
            bgCol: "bg-blue-500/10",
            borderCol: "border-blue-500"
        },
        {
            title: "Manager",
            color: "orange",
            textCol: "text-orange-500",
            bgCol: "bg-orange-500/10",
            borderCol: "border-orange-500"
        },
        {
            title: "Viewer",
            color: "purple",
            textCol: "text-purple-500",
            bgCol: "bg-purple-500/10",
            borderCol: "border-purple-500"
        },
        {
            title: "Developer",
            color: "cyan",
            textCol: "text-cyan-500",
            bgCol: "bg-cyan-500/10",
            borderCol: "border-cyan-500"
        },
        {
            title: "QA Tester",
            color: "emerald",
            textCol: "text-emerald-500",
            bgCol: "bg-emerald-500/10",
            borderCol: "border-emerald-500"
        },
        {
            title: "DevOps",
            color: "indigo",
            textCol: "text-indigo-500",
            bgCol: "bg-indigo-500/10",
            borderCol: "border-indigo-500"
        },
        {
            title: "Tester",
            color: "pink",
            textCol: "text-pink-500",
            bgCol: "bg-pink-500/10",
            borderCol: "border-pink-500"
        },
        {
            title: "UI/UX",
            color: "amber",
            textCol: "text-amber-500",
            bgCol: "bg-amber-500/10",
            borderCol: "border-amber-500"
        },
    ]; 
export const statusItem = [
        {
            title: "All Status",
            color: "cyan",
            textCol: "text-cyan-500",
            bgCol: "bg-cyan-500/10",
            borderCol: "border-cyan-500"
        },
        {
            title: "Active",
            color: "green",
            textCol: "text-emerald-500",
            bgCol: "bg-emerald-500/10",
            borderCol: "border-emerald-500"
        },
        {
            title: "Inactive",
            color: "gray",
            textCol: "text-gray-500",
            bgCol: "bg-gray-500/10",
            borderCol: "border-gray-500"
        },
        {
            title: "Suspended",
            color: "red",
            textCol: "text-red-500",
            bgCol: "bg-red-500/10",
            borderCol: "border-red-500"
        },
    ]

const UserListCredentials = () => {
    const [isRoles, setIsRoles] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [rolesAnchorEl, setRolesAnchorEl] = useState(null);
    const [statusAnchorEl, setStatusAnchorEl] = useState(null);
    const rolesOpen = Boolean(rolesAnchorEl);
    const statusOpen = Boolean(statusAnchorEl);

    const handleRolesClick = (event) => {
        setRolesAnchorEl(event.currentTarget);
    };
    const handleRolesClose = () => {
        setRolesAnchorEl(null);
    };
    const handleStatusClick = (event) => {
        setStatusAnchorEl(event.currentTarget);
    };
    const handleStatusClose = () => {
        setStatusAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div id='user-list-credentials' className=''>
            <div className=' w-full h-full  grid grid-cols-[2fr_2fr_1.5fr_1fr] gap-2  [&>div]:rounded-md'>

                {/* All Roles */}
                <CustomToolTip title={"Sort by role"}>
                    <div
                        id='all-roles'
                        className="flex flex-row items-center justify-between px-2 h-7 bg-surface-2 border border-border"
                        onClick={(e) => {
                            setIsRoles(prev => !prev);
                            handleRolesClick(e)
                        }}
                    >
                        <div className='relative w-full flex items-center text-center'>
                            <CustomizedMenu
                                items={rolesItem}
                                handleClick={handleRolesClick}
                                anchorEl={rolesAnchorEl}
                                open={rolesOpen}
                                handleClose={handleRolesClose}
                                setIsRole={setIsRoles}
                            />
                        </div>

                        <div className='text-white text-[12px] right-3  relative flex items-center'>
                            <div className='absolute'>
                                {
                                    isRoles ? (<Down />) : (<Up />)
                                }
                            </div>
                        </div>

                    </div>
                </CustomToolTip>

                {/* All Status */}
                <CustomToolTip title={"Sort by status"}>
                    <div
                        id='all-status'
                        className="flex flex-row items-center bg-surface-2 border border-border px-2"
                        onClick={(e) => {
                            setIsStatus(prev => !prev);
                            handleStatusClick(e)
                        }}
                    >

                        <div className='relative w-full'>
                            <CustomizedMenu
                                items={statusItem}
                                handleClick={handleStatusClick}
                                anchorEl={statusAnchorEl}
                                open={statusOpen}
                                handleClose={handleStatusClose}
                                setIsRole={setIsStatus}
                            />
                        </div>
                        <div className='text-white text-[12px] right-3  relative flex items-center'>
                            <div className='absolute'>
                                {
                                    isStatus ? (<Down />) : (<Up />)
                                }
                            </div>
                        </div>
                    </div>
                </CustomToolTip>

                {/* Search by name */}
                <CustomToolTip title={"Search by name"}>
                    <div id='search-by-name' className='text-white px-1'>
                        <div className="w-full h-full relative flex flex-row items-center border        border-border focus-within:border-cyan-300 rounded-md transition-colors duration-400"
                        >

                            <SearchIcon size={18} className="ml-1.5 text-gray-400" />

                            <input
                                type="text"
                                className="w-full px-0.5 pl-1 text-white bg-transparent outline-none h-[90%] text-[11px]"
                                placeholder="Search"
                            />

                        </div>
                    </div>
                </CustomToolTip>

                {/* Export */}
                <CustomToolTip title={"Export"}>
                    <div id='export' className='flex items-center justify-center '>

                        <button
                            onClick={handleOpen}
                            id="export"
                            className="border border-border bg-surface-2 flex items-center justify-center gap-1 focus:border-cyan-300 rounded-md transition-colors duration-300 w-full h-full cursor-pointer"
                        >
                            <Download size={18} className="text-gray-400" />
                            <h3 className="text-white text-[12px] font-bold">Export</h3>
                        </button>

                    </div>
                </CustomToolTip>

                {
                    open && <CustomModal open={open} handleClose={handleClose}>
                        <div
                            onClick={handleClose}
                            className='text-white flex items-center justify-center h-full'
                        >
                            <div className=''>Opened</div>
                        </div>
                    </CustomModal>
                }

            </div>
        </div>
    )
}

export default UserListCredentials