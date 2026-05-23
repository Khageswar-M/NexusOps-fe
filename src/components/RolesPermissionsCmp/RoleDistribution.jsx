import { IoSearchOutline as Search } from "react-icons/io5";
import { rolesItem as Roles} from "../../config/RawData";
import Pencil from '../../assets/Edit.svg?react';
import Delete from '../../assets/TrashBin.svg?react';
import { useState } from "react";
import CustomModal from '../CustomModal.jsx';
import EmptyRoles from '../../assets/empty_roles.png';
import { useSelector } from "react-redux";

const RoleDistribution = () => {

    const rolesSize = Roles.length;
    const width = useSelector((state) => state.app.width);

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
            <div className="flex flex-row w-full gap-2 pb-1 px-2 border-b border-border">
                <div className="flex flex-row min-w-10 items-center relative border border-border rounded-md bg-surface-2">
                    <Search size={20} className="text-text-muted absolute ml-3" />
                    <input
                        className='placeholder:text-text-muted p-1 pl-10 rounded-md text-white w-full outline-none border border-transparent focus:border-cyan-400 transition-colors duration-200'
                        type='text'
                        placeholder={rolesSize === 0 ? "Disabled due to empty roles" : "Enter role"}
                        disabled={rolesSize === 0}
                    />
                </div>
                <div id="search-button" className="bg-cyan-500 border border-border rounded-md flex items-center justify-center text-lg  text-gray-800 active:border-cyan-300 cursor-pointer select-none px-5 font-bold"
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
                                    <div className={`${role.textCol} ${width > 500 && role.bgCol} h-15 w-15 rounded-full flex items-center justify-center`}>
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
                                        <div className="flex flex-row items-center text-[15px] gap-1 text-white/68 bg-surface-2 border border-border  rounded-md p-1"
                                            onClick={() => handleEdit(role)}
                                        >
                                            <Pencil className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="bg-surface-2 border border-border p-1 rounded-md"
                                            onClick={() => handleDelete(role)}
                                        >
                                            <Delete className="h-5 w-5 text-red-500" />
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