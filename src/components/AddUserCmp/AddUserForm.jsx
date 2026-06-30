import { useEffect, useState } from 'react';
import OnlineTag from '../../components/OnlineTag.jsx';
import { AiFillFolder as Folder } from "react-icons/ai";
import { TbMail as Mail } from "react-icons/tb";
import { MdOutlineLocalPhone as Phone } from "react-icons/md";
import { FaBuilding as Department } from "react-icons/fa";
import { rolesItem as roles, statusItem as status } from '../../config/RawData.js';
import { GiCheckMark as Check } from "react-icons/gi";
import CustomModal from "../CustomModal.jsx";
import { useSelector } from 'react-redux';
import DownloadIcon from '../../assets/Download.svg?react';
import { getAllRoles } from '../../api/rolesApi.js';
import { addUser } from '../../api/users/usersApi.js';
import { showSuccess, showWarning } from '../../utils/alert.js';

const CustomInputField = ({ label, Logo, placeholder, value, onChange }) => {
    return (
        <div className='w-full'>
            <label className='text-white text-[13px]'>
                {label} <span className='text-red-500'>*</span>
            </label>

            <div className='relative flex flex-row items-center'>
                <div className='absolute p-3 flex items-center justify-center'>
                    {
                        Logo ? (
                            Logo
                        ) : (
                            <OnlineTag diameter={5} bgColor={"gray"} />
                        )
                    }
                </div>

                <input
                    type="text"
                    className='border border-border outline-none focus:border-cyan-500 transition-colors duration-200 rounded-md placeholder:text-text-muted text-white pl-10 p-1 w-full bg-surface-2'
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )
}
const AddUserForm = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [department, setDepartment] = useState("IT");
    const [isModal, setIsModal] = useState(false);
    const width = useSelector((state) => state.app.width);
    const [allRoles, setAllRoles] = useState([]);
    const [currRole, setCurrRole] = useState(null);
    const [currStatus, setCurrStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClear = () => {
        setFirstName(null);
        setLastName(null);
        setEmail(null);
        setPhoneNumber(null);
        setDepartment("IT");
        setCurrRole(null);
        setCurrStatus(null);
        setTagCheck(-1);
    }

    useEffect(() => {
        handleGetAllRoles();
    }, []);

    const handleAddUser = async () => {
        

        setLoading(true);
        const roleIs = allRoles[currRole].id;
        const statusIs = status[currStatus].title;

        try {
            const response = await addUser(
                firstName,
                lastName,
                email,
                phoneNumber,
                department,
                roleIs,
                statusIs
            );
            console.log(response);
            showSuccess("Create User", "User is being created successfully!");
        } catch (error) {
            console.log(error);
            showWarning("Duplicate", "User with same email or mobile number is present");
        }finally{
            setLoading(false);
        }

    }

    const CheckCircle = ({ currRoleId, currStatusId }) => {

        const isRole = currRoleId !== undefined;

        const isSelected = isRole
            ? currRole === currRoleId
            : currStatus === currStatusId;

        return (
            <button
                className={`w-5 h-5 rounded-full border border-border cursor-pointer ${isSelected ? "bg-cyan-500" : "bg-gray-700"}  flex items-center justify-center`}
                onClick={() => {
                    if (isRole) {
                        setCurrRole(currRoleId);
                    } else {
                        setCurrStatus(currStatusId);
                    }
                }}
            >
                {isSelected && <Check />}
            </button>
        );
    };

    const ActivityStatus = () => {
        return (
            <div className={`grid ${width > 600 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                {
                    status.map((sts, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center bg-surface-2 justify-between border ${sts.borderCol} py-2 px-4 rounded-md`}
                            >
                                <div className='flex flex-row items-center gap-2'>
                                    <div className={`p-1 rounded-full ${sts.textCol} ${sts.bgCol}`}>
                                        <sts.Icon size={15} />
                                    </div>
                                    <div className={`${sts.textCol} text-1xl flex flex-row items-center gap-3`}>
                                        <div>{sts.title}</div>
                                        <div className='text-text-muted text-[10px]'>{sts.desc}</div>
                                    </div>
                                </div>
                                <div>
                                    <CheckCircle currStatusId={index} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // validate file type
        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validTypes.includes(file.type)) {
            alert("Only JPG, PNG or GIF files are allowed.");
            return;
        }

        // validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert("File size must be less than 2MB.");
            return;
        }

        // preview image
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };

        reader.readAsDataURL(file);
    }

    const handleGetAllRoles = async () => {
        try {
            const response = await getAllRoles();
            setAllRoles(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }



    const MainTainRoles = () => {
        return (
            <div className={`grid ${width > 600 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                {
                    allRoles.length > 0 ? (
                        allRoles.map((role, index) => (
                            <div
                                key={role.id}
                                className="bg-surface-2 rounded-md py-3 border border-border flex flex-row items-center justify-between px-5"
                            >
                                <div className='flex flex-row items-center gap-2'>

                                    {/* TITLE & SUB-TITLE */}
                                    <div className={` flex flex-col`}>
                                        <div className='text-1xl font-bold text-white'>{role.name}</div>
                                        <div className='text-text-muted text-[12px]'>{role.description}</div>
                                    </div>
                                </div>

                                {/* CHECK */}
                                <div>
                                    <CheckCircle currRoleId={index} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            Add Role.
                        </div>
                    )
                }
            </div>
        );
    };

    return (
        <div className='relative'>
            {/* HEADER */}
            <div className='px-5 py-2 w-full flex flex-row items-center justify-between border-b border-border sticky top-0 bg-surface z-10'>
                <div className='flex items-center flex-row gap-2'>
                    <OnlineTag diameter={8} bgColor={"cyan"} />
                    <div className='text-white text-[12px] font-bold'>Add User Details</div>
                </div>
                <div className='text-[11px] text-text-muted'>
                    All fields marked <span className='text-red-600'>*</span> are required
                </div>
            </div>

            <div className='flex flex-col p-5 overflow-y-scroll custom-scrollbar'>

                {/* BASIC INFORMATION */}
                <div className='flex flex-col gap-2'>
                    {/* TITLE */}
                    <div className='border-b border-border text-text-muted font-bold text-1xl pt-2 py-0.5'>
                        Basic Information
                    </div>

                    {/* Required Inputs */}
                    <div className='flex flex-col gap-2'>

                        {/* First and Last name */}
                        <div className={`grid ${width > 600 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                            <CustomInputField
                                label={"First name"}
                                placeholder={"e.g John"}
                                value={firstName}
                                onChange={setFirstName}
                            />
                            <CustomInputField
                                label={"Last name"}
                                placeholder={"e.g Doe"}
                                value={lastName}
                                onChange={setLastName}
                            />
                        </div>

                        {/* Email input */}
                        <div>
                            <CustomInputField
                                label={"Email Address"}
                                Logo={<Mail size={20} className='text-text-muted' />}
                                placeholder={"e.g user@example.com"}
                                value={email}
                                onChange={setEmail}
                            />
                            <span className='text-text-muted text-[12px]'>An welcome email will sent to this address</span>
                        </div>

                        {/* Phone number and Department */}
                        <div className={`grid ${width > 600 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                            <CustomInputField
                                label={"Phone Number"}
                                Logo={<Phone size={20} className='text-text-muted' />}
                                placeholder={"+91 1234567890"}
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                            />

                            <div className='flex  flex-col'>
                                <label htmlFor="department" className='text-white text-sm pb-1'>Department <span className='text-red-500'>*</span></label>
                                <select
                                    id="department"
                                    className='bg-surface-2 border border-border py-1 rounded-md text-white px-2 appearance-none outline-none focus:border-cyan-500'
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="IT">IT</option>
                                    <option value="NON-IT">NON-IT</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ASSIGN ROLE */}
                <div className='flex flex-col gap-2'>
                    {/* TITLE */}
                    <div className='border-b border-border text-text-muted font-bold text-1xl pt-2 py-0.5'>
                        Assign Role
                    </div>

                    <div>
                        <MainTainRoles roles={5} />
                    </div>
                </div>

                {/* ACCOUNT STATUS */}
                <div className='flex flex-col gap-2 border-b border-border pb-5'>
                    {/* TITLE */}
                    <div className='border-b border-border text-text-muted font-bold text-1xl pt-2 py-0.5'>
                        Account Status
                    </div>

                    <div className='flex flex-col gap-2'>
                        <ActivityStatus />
                    </div>
                </div>

                {/* SAVE / CANCEL */}
                <div className='grid grid-cols-2 [&>div]:text-center pt-5 gap-5 [&>div]:rounded-md [&>div]:py-1 [&>div]:font-bold [&>div]:cursor-pointer [&>div]:active:bg-white/5'>
                    <div className='border-2 border-gray-500 text-gray-500 bg-gray-500/10'
                        onClick={() => handleClear()}
                    >Cancel</div>
                    <div 
                        className='border-2 border-cyan-500 text-cyan-500 bg-cyan-500/10'
                        onClick={() => handleAddUser()}
                    >
                        {
                            loading ? "Saving..." : "Save"
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserForm;