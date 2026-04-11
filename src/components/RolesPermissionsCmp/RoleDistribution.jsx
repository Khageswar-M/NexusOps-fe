import { IoSearchOutline as Search } from "react-icons/io5";
import { IoIosArrowDown as Down, IoIosArrowUp  as Up } from "react-icons/io";
import { rolesItem as Roles, rolesItem } from "../../config/RawData";
import { HiPencil as Pencil } from "react-icons/hi2";
import { FaTrashAlt as Delete } from "react-icons/fa";
import { useState } from "react";
import CustomizedMenu from '../../components/UserManagementCmp/CustomizedMenu.jsx';
import CustomModal from '../CustomModal.jsx';

const RoleDistribution = () => {

    const[rolesAnchorE1, setRolesAnchorE1] = useState(null);
    const rolesOpen = Boolean(rolesAnchorE1);

    const [isEdit, setIsEdit] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const handleEdit = (role) => {
        setIsEdit(true);
        setSelectedRole(role);
    }

    const [isDelete, setIsDelete] = useState(false);
    const handleDelete = (role) => {
        setIsDelete(true);
        setSelectedRole(role);
    }

    return (
        <div className='h-full w-full overflow-hidden'>
            {/* Search Departments */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-[7fr_2fr] gap-2 p-1 px-2 border-b border-border">
                    <div className="flex flex-row items-center relative border border-border rounded-md bg-surface-2">
                        <Search size={20} className="text-text-muted absolute ml-3"/>
                        <input
                            className='placeholder:text-text-muted p-1 pl-10 rounded-md text-white w-full outline-none border border-transparent focus:border-cyan-400 transition-colors duration-200'
                            type='text'
                            placeholder='Enter role'
                        />
                    </div>
                    <div className="bg-surface-2 p-1 text-text-muted text-center border border-border px-3 rounded-md flex flex-row items-center gap-1"
                        onClick={(e) => {
                            if(rolesAnchorE1){
                                setRolesAnchorE1(null)
                            }else{
                                setRolesAnchorE1(e.currentTarget)
                            }
                        }}
                    >
                        <div
                            className="relative w-full flex items-center text-center"
                        >
                            <CustomizedMenu
                                items={Roles}
                                anchorEl={rolesAnchorE1}
                                open={rolesOpen}
                                handleClose={() => setRolesAnchorE1(null)}
                                icons
                            />
                        </div>
                        {
                            rolesOpen ? (<Down size={20}/>) : (<Up size={20}/>)
                        }
                        
                    </div>
                </div>
            </div>

            <div className="h-112 flex flex-col gap-2 overflow-y-auto custom-scrollbar p-2">
                {
                    Roles.map((role, idx) => (
                        <div
                            key={idx}
                            className="flex flex-row items-center justify-between border border-border rounded-md p-2 hover:cursor-pointer hover:bg-surface-2"
                        >
                            <div className="flex flex-row items-center gap-2">
                                <div className={`${role.textCol} ${role.bgCol} h-15 w-15 rounded-full flex items-center justify-center`}>
                                    {<role.Icon size={30}/>}
                                </div>
                                <div className="flex flex-col">
                                    <div className={`text-[16px] ${role.textCol} font-bold`}>{role.title}</div>
                                    <div className="text-[12px] text-text-muted">{role.desc}</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-3 px-2">
                                <div className="text-text-muted text-[12px]">3 users</div>
                                <div className="flex flex-row items-center gap-3">
                                    <div className="flex flex-row items-center text-[15px] gap-1 text-white/68 bg-surface-2 border border-border px-2 rounded-md"
                                        onClick={() => handleEdit(role)}
                                    >
                                        <Pencil size={15} className="text-orange-700"/>Edit
                                    </div>
                                    <div className="bg-surface-2 border border-border px-2 py-1 rounded-md"
                                        onClick={() => handleDelete(role)}
                                    >
                                        <Delete size={15} className="text-red-500"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                isEdit && (
                    <CustomModal open={isEdit} handleClose={() => setIsEdit(false)}>
                        <div className="h-screen flex items-center justify-center text-white"
                            onClick={() => setIsEdit(false)}
                        >
                            Opened for: {selectedRole?.title}
                        </div>
                    </CustomModal>
                )
            }
            
            {
                isDelete && (
                    <CustomModal open={isDelete} handleClose={() => setIsDelete(false)}>
                        <div className="h-screen flex items-center justify-center text-white"
                            onClick={() => setIsDelete(false)}
                        >
                            Opened for delete: {selectedRole?.title}
                        </div>
                    </CustomModal>
                )
            }
        </div>
    )
}

export default RoleDistribution