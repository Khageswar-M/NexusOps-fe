import { AppContext } from "../../context/TitleContext";
import { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const HeaderScreen = () => {

    const { title } = useContext(AppContext);


    return (
        <div className="bg-[linear-gradient(147deg,rgba(23,23,23,1)_0%,rgba(41,41,41,1)_50%,rgba(66,66,66,1)_100%)] rounded-md flex items-center justify-between px-5">
            <h1 className="text-white  font-poppins text-2xl font-bold">
                {title}
            </h1>

            <div className="flex flex-row items-center justify-between w-[15%] ">
                <div className="">
                    <IoIosNotifications size={24} />
                </div>
                <div className="flex flex-row gap-2">
                    <FaRegCircleUser size={24} />
                    <h3>onetwothree</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderScreen;