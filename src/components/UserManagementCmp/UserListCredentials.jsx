import { useState } from 'react';
import { LiaAngleDownSolid as Down, LiaAngleUpSolid as Up } from "react-icons/lia";
import CustomizedMenu from './CustomizedMenu.jsx';

const UserListCredentials = () => {



    const rolesItem = [
        {
            title: "All Users",
            color: "gray"
        },
        {
            title: "Admin",
            color: "blue"
        },
        {
            title: "Manager",
            color: "orange"
        },
        {
            title: "Viewer",
            color: "purple"
        },
        {
            title: "Developer",
            color: "cyan"
        },
        {
            title: "Tester",
            color: "gray"
        },
        {
            title: "DevOps",
            color: "gray"
        },
        {
            title: "Tester",
            color: "gray"
        },
        {
            title: "UI/UX",
            color: "gray"
        },
    ];
    const statusItem = [
        {
            title: "Active",
            color: "green"
        },
        {
            title: "Inactive",
            color: "gray"
        },
        {
            title: "Suspended",
            color: "red"
        },
    ]
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


    return (
        <div id='user-list-credentials' className=''>
            <div className=' w-full h-full grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr] gap-2 [&>div]:bg-surface-2 [&>div]:rounded-md'>

                {/* All Roles */}
                <div
                    id='all-roles'
                    className="flex flex-row items-center px-2"
                    onClick={(e) => {
                        setIsRoles(prev => !prev);
                        handleRolesClick(e)
                    }}
                >
                    <div className='relative w-full'>
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

                {/* All Status */}
                <div
                    id='all-status'
                    className="flex flex-row items-center px-2"
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

                {/* Search by name */}
                <div id='search-by-name'>3</div>

                {/* Export */}
                <div id='export'>4</div>

                {/* Add User */}
                <div id='add-user'>5</div>

            </div>
        </div>
    )
}

export default UserListCredentials