import { IoSearchOutline as Search } from "react-icons/io5";
import { rolesItem as Roles } from "../../config/RawData";
import Pencil from '../../assets/Edit.svg?react';
import Delete from '../../assets/TrashBin.svg?react';
import { useEffect, useState } from "react";
import CustomModal from '../CustomModal.jsx';
import EmptyRoles from '../../assets/empty_roles.png';
import { useSelector } from "react-redux";
import { getAllRoles, updateRole } from "../../api/rolesApi.js";
import CircularProgress from "@mui/material/CircularProgress";

const RoleDistribution = () => {

    const rolesSize = Roles.length;
    const width = useSelector((state) => state.app.width);
    const [selectedRole, setSelectedRole] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allRoles, setAllRoles] = useState([]);
    const [editItem, setEditItem] = useState(-1);
    const [newRole, setNewRole] = useState('');
    const [newRoleDesc, setNewRoleDesc] = useState('');

    const handleGetAllRoles = async () => {

        setLoading(true);

        try {
            const response = await getAllRoles();
            setAllRoles(response);
        } catch (error) {
            console.error(error.response);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetAllRoles();
    }, [])



    const handleEdit = (role) => {
        setNewRole(role.name);
        setNewRoleDesc(role.description);
        setEditItem(role.id);
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

    const handleUpdateRole = async (roleId) => {
        if(newRole.trim().length < 1 || newRoleDesc.trim().length < 1) return;
        console.log(newRole, newRoleDesc);
        try {
            const response = await updateRole(roleId, newRole, newRoleDesc);
            console.log(response);
            await handleGetAllRoles();
        } catch (error) {
            console.log(error);
        }finally{

        }
    }

    return (
        <div className='h-full flex flex-col p-1'>

            <div id="roles-container" className="h-full overflow-y-auto custom-scrollbar scroll-smooth p-2">
                <div id="roles" className="flex flex-col gap-2">
                    {loading ? (
                        <div className="flex-1 flex items-center justify-center">
                            <CircularProgress size={20} color="#fff" />
                        </div>
                    ) :
                        allRoles.length > 0 ? (
                            allRoles.map((role) => (
                                <div className="flex flex-col">
                                    <div
                                        key={role.id}
                                        className="flex flex-row items-center justify-between border border-border rounded-md p-2 hover:cursor-pointer bg-surface-2"
                                    >
                                        <div className="flex flex-row items-center gap-2">

                                            <div className="flex flex-col">
                                                <div
                                                    className={`text-[16px] text-white font-bold`}
                                                >
                                                    {role.name}
                                                </div>
                                                <div
                                                    className="text-[12px] text-text-muted"
                                                >
                                                    {role.description}
                                                </div>
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

                                    {
                                        (editItem === role.id) && (
                                            <div className="border-b border-l border-r border-border rounded-bl-md rounded-br-md px-2 bg-surface transition-all duration-200 flex flex-row items-center justify-between p-2">
                                                <div className="flex md:flex-row gap-2 flex-col">
                                                    {/* Input for Role Name */}
                                                    <div>
                                                        <input
                                                            className="updateInput" 
                                                            type="text" 
                                                            placeholder="Enter role name"
                                                            value={newRole}
                                                            onChange={(e) => setNewRole(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    {/* Input for Role Description */}
                                                    <div>
                                                        <input 
                                                            className="updateInput" 
                                                            type="text" 
                                                            placeholder="Enter role description"
                                                            value={newRoleDesc}
                                                            onChange={(e) => setNewRoleDesc(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex md:flex-row items-center gap-2 text-white flex-col">
                                                    {/* Button for Update */}
                                                    <div>
                                                        <button 
                                                            className="bg-green-500 px-2 rounded-md text-sm py-1 font-bold cursor-pointer active:bg-green-300"
                                                            onClick={() => handleUpdateRole(role.id)}
                                                        >
                                                            Update
                                                        </button>
                                                    </div>

                                                    {/* Button for Delete */}
                                                    <div>
                                                        <button
                                                            className="bg-red-500 px-2 rounded-md text-sm py-1 font-bold cursor-pointer active:bg-red-400"
                                                            onClick={() => setEditItem(-1)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) 
                                    }
                                </div>
                            ))
                        ) : (
                            <div className="flex-1 flex items-center justify-center p-6">
                                <div
                                    className="  w-full rounded-2xl  text-center "
                                >
                                    <img
                                        src={EmptyRoles}
                                        alt="Empty roles"
                                        className="w-32 h-32 mx-auto mb-4"
                                    />

                                    <h2 className="text-2xl font-bold text-text-muted">
                                        No Roles Yet
                                    </h2>

                                    <p className="text-text-muted mt-3">
                                        Roles help organize permissions and control what users can access.
                                        Create your first role to get started.
                                    </p>

                                    <button
                                        className=" mt-6 px-6 py-3 rounded-xl bg-cyan-500 text-gray-900 font-semibold hover:bg-cyan-400 transition-colors "
                                    >
                                        Create Role
                                    </button>
                                </div>
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