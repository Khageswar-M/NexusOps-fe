import { IoSearchOutline as Search } from "react-icons/io5";
import { rolesItem as Roles} from "../../config/RawData";
import { HiPencil as Pencil } from "react-icons/hi2";
import { FaTrashAlt as Delete } from "react-icons/fa";
import { useState } from "react";
import CustomModal from '../CustomModal.jsx';
import EmptyRoles from '../../assets/empty_roles.png';

const RoleDistribution = () => {

    const rolesSize = Roles.length;

    const [selectedRole, setSelectedRole] = useState(null);

    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = (role) => {
        setIsEdit(true);
        setSelectedRole(role);
    }

    const [isDelete, setIsDelete] = useState(false);
    const handleDelete = (role) => {
        setIsDelete(true);
        setSelectedRole(role);
    }

    const [isSearch, setIsSearch] = useState(false);
    const handleSearch = () => {
        console.log("search clicked")
        setIsSearch(true);
        setTimeout(() => setIsSearch(false), 3000);
    }
    return (
        <div className='h-full flex flex-col p-1'>
            {/* Search Departments */}
            <div className="grid grid-cols-[7fr_2fr] gap-2 p-1 px-2 border-b border-border">
                <div className="flex flex-row items-center relative border border-border rounded-md bg-surface-2">
                    <Search size={20} className="text-text-muted absolute ml-3" />
                    <input
                        className='placeholder:text-text-muted p-1 pl-10 rounded-md text-white w-full outline-none border border-transparent focus:border-cyan-400 transition-colors duration-200'
                        type='text'
                        placeholder={rolesSize === 0 ? "Disabled due to empty roles" : "Enter role"}
                        disabled={rolesSize === 0}
                    />
                </div>
                <div id="search-button" className="bg-surface-2 border border-border rounded-md flex items-center justify-center text-2xl text-cyan-400 active:border-cyan-300 cursor-pointer select-none"
                    onClick={() => {
                        if (rolesSize > 0 && !isSearch) {
                            handleSearch()
                        } else {
                            console.log("Empty roles");
                        }
                    }}
                >
                    {
                        rolesSize > 0 ? (
                            <div>
                                {
                                    isSearch ? "Searching..." : "Search"
                                }
                            </div>
                        ) : (
                            <div className="text-text-muted">
                                Search
                            </div>
                        )
                    }

                </div>
            </div>

            <div id="roles-container" className="h-full overflow-y-auto custom-scrollbar scroll-smooth p-2">
                <div id="roles" className="flex flex-col gap-2">
                    {rolesSize > 0 ? (
                        Roles.map((role, idx) => (
                            <div
                                key={idx}
                                className="flex flex-row items-center justify-between border border-border rounded-md p-2 hover:cursor-pointer hover:bg-surface-2"
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <div className={`${role.textCol} ${role.bgCol} h-15 w-15 rounded-full flex items-center justify-center`}>
                                        {<role.Icon size={30} />}
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
                                            <Pencil size={15} className="text-orange-700" />Edit
                                        </div>
                                        <div className="bg-surface-2 border border-border px-2 py-1 rounded-md"
                                            onClick={() => handleDelete(role)}
                                        >
                                            <Delete size={15} className="text-red-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div id="empty-roles" className="flex-1 flex items-center justify-center">
                            <img
                                src={EmptyRoles}
                                alt="Empty roles"
                                className="w-50 h-50"
                            />
                        </div>
                    )
                    }
                </div>
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