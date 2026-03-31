import OnlineTag from '../../components/OnlineTag.jsx';
import { AiFillFolder as Folder } from "react-icons/ai";

const AddUserForm = () => {
    return (
        <div className='overflow-hidden'>
            {/* HEADER */}
            <div className='px-5 py-2 flex flex-row items-center justify-between border-b border-border'>
                <div className='flex items-center flex-row gap-2'>
                    <OnlineTag diameter={8} bgColor={"cyan"} />
                    <div className='text-white text-[12px] font-bold'>Add User Details</div>
                </div>
                <div className='text-[11px] text-text-muted'>
                    All fields marked <span className='text-red-600'>*</span> are required
                </div>
            </div>

            <div className='flex flex-col p-5 overflow-y-auto custom-scrollbar pb-10'>
                {/* PROFILE PHOTO */}
                <div className='border-b border-border flex items-center py-3 gap-3'>
                    <div className='w-15 h-15 rounded-full bg-linear-to-bl from-blue-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white'>
                        ?
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <div className='text-white font-bold text-[15px]'>Profile Photo</div>
                        <div className='flex flex-row items-center gap-1 text-text-muted text-[11px]'>
                            <div>JPG, PNG or GIF</div>
                            <OnlineTag diameter={2} bgColor={"gray"} />
                            <div>MAX 2MB</div>
                            <OnlineTag diameter={2} bgColor={"gray"} />
                            <div>Min 200x200px</div>
                        </div>
                        <div className='w-31 border border-border flex flex-row items-center gap-2 px-2 rounded-md py-0.5 bg-surface-2 cursor-pointer active:bg-surface-3'>
                            <Folder className='text-orange-400 text-1xl' />
                            <div className='text-white text-[12px] font-bold'>Upload Photo</div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default AddUserForm;