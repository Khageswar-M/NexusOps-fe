import { useState } from 'react';
import { LiaAngleDownSolid as Down, LiaAngleUpSolid as Up } from "react-icons/lia";
import CustomizedMenu from './CustomizedMenu.jsx';
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { MdOutlineFileDownload as Download } from "react-icons/md";
import CustomToolTip from '../CustomToolTip.jsx';
import CustomModal from '../CustomModal.jsx';
import { rolesItem, statusItem } from '../../config/RawData.js';




const UserListCredentials = () => {
    const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
    const rolesOpen = Boolean(rolesAnchorE1);

    const [statusAnchorE1, setStatusAnchorE1] = useState(null);
    const statusOpen = Boolean(statusAnchorE1);

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
                <div
                    id='all-roles'
                    className="flex flex-row items-center justify-between px-2 h-7 bg-surface-2 border border-border"
                    onClick={(e) => {
                        if(rolesAnchorE1){
                            setRolesAnchorE1(null)
                        }else{
                            setRolesAnchorE1(e.currentTarget)
                        }
                    }}
                >
                    <div className='relative w-full flex items-center text-center'>
                        <CustomizedMenu
                            items={rolesItem}
                            anchorEl={rolesAnchorE1}
                            open={rolesOpen}
                            handleClose={() => setRolesAnchorE1(null)}
                        />
                    </div>

                    <div className='text-white text-[12px] right-3  relative flex items-center'>
                        <div className='absolute'>
                            {
                                rolesOpen ? (<Down />) : (<Up />)
                            }
                        </div>
                    </div>

                </div>

                {/* All Status */}
                <div
                    id='all-status'
                    className="flex flex-row items-center bg-surface-2 border border-border px-2"
                    onClick={(e) => {
                        if(statusAnchorE1){
                            setStatusAnchorE1(null)
                        }else{
                            setStatusAnchorE1(e.currentTarget)
                        }
                    }}
                >

                    <div className='relative w-full'>
                        <CustomizedMenu
                            items={statusItem} 
                            anchorEl={statusAnchorE1}
                            open={statusOpen}
                            handleClose={() => setStatusAnchorE1(null)}
                        />          
                    </div>
                    <div className='text-white text-[12px] right-3  relative flex items-center'>
                        <div className='absolute'>
                            {
                                statusOpen ? (<Down />) : (<Up />)
                            }
                        </div>
                    </div>
                </div>

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