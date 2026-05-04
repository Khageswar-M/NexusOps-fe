import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import OnlineTag from "../../components/OnlineTag";
import CustomToolTip from "../../components/CustomToolTip";
import Hamburger from '../../assets/Hamburger.svg?react';
import SearchIcon from '../../assets/MagnifyingGlass.svg?react';
import Github from '../../assets/Github.svg?react';
import AppLogo from '../../../public/nexus_ops_logo.png';

// redux
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../redux/uiSlice";
import { setOpenSidebar } from "../../redux/uiSlice";

const HeaderScreen = () => {

    const dispatch = useDispatch();
    const title = useSelector((state) => state.app.title);
    const width = useSelector((state) => state.app.width);
    const sidebar = useSelector((state) => state.ui.openSidebar);

    return (
        <div className={`bg-surface h-17 rounded-md flex flex-row items-center justify-between px-2 gap-2 border border-border w-full`}>
            <div className="flex items-center gap-2">
                {
                    width <= 900 && (
                        <div
                            className={`text-cyan-500 flex items-center justify-center`}
                            onClick={() => dispatch(setOpenSidebar(!sidebar))}
                        >
                            <Hamburger className={`w-7 h-7`} />
                        </div>
                    )
                }

                {
                    width <= 700 ? (
                        <h1 className="text-cyan-500 text-[1.5rem] font-bold">NexusOps</h1>
                    ) : (
                        <h1 className="text-white font-poppins text-[1rem] font-bold">
                            {title.length === 0 ?
                                (
                                    <span>Dashboard</span>
                                ) :
                                (
                                    title.map((item, index) => (
                                        <span
                                            key={index}
                                        >
                                            <span
                                                className={
                                                    index === title.length - 1 ? "text-cyan" : "text-text-muted"
                                                }
                                            >
                                                {item}
                                            </span>
                                            {index !== title.length - 1 && (
                                                <span className="text-text-muted">{" > "}</span>
                                            )}
                                        </span>
                                    ))
                                )
                            }
                        </h1>
                    )
                }

            </div>



            <div className="flex flex-row items-center justify-between gap-5">

                {/* For live session*/}
                {
                    width >= 1200 && (
                        <CustomToolTip title={"Status"}>
                            <div className="flex flex-row items-center gap-2">

                                <OnlineTag
                                    diameter={7}
                                    bgColor={"green"}
                                />

                                <div className="flex flex-row items-center gap-3 text-text-muted text-[14px]">
                                    <h5>Live</h5>
                                    <div className="w-1 h-1 rounded-full bg-text-muted" />
                                    <h5>2s ago</h5>
                                </div>
                            </div>
                        </CustomToolTip>
                    )
                }


                {/* FOR SEARCH */}
                <CustomToolTip title={"Search"}>
                    <button className="flex items-center justify-center bg-surface-2 border border-border p-1 rounded-md cursor-pointer ">
                        <SearchIcon className="h-7 w-7 text-text-muted hover:text-cyan-500" />
                    </button>
                </CustomToolTip>

                {/* FOR GITHUB */}
                <CustomToolTip title={"See code-base"}>
                    <button
                        className="bg-surface-2 border border-border rounded-md cursor-pointer"
                    >
                        <Github className="h-9 w-9 text-text-muted hover:text-cyan-500" />
                    </button>
                </CustomToolTip>

                {/* For Notification */}
                <CustomToolTip title={"Notification"}>
                    <button
                        className="relative bg-surface-2 border border-border rounded-md p-2 cursor-pointer"
                        onClick={() => dispatch(setNotification(true))}
                    >
                        <div className="absolute right-1.25 top-2">
                            <OnlineTag
                                diameter={7}
                                bgColor={"red"}
                            />
                        </div>

                        <IoIosNotifications
                            className="text-text-muted hover:text-cyan-500"
                            size={20}
                        />
                    </button>
                </CustomToolTip>
            </div>
        </div >
    )
}

export default HeaderScreen;