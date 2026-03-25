import { AppContext } from "../../context/TitleContext";
import { UIContext } from "../../context/UIContext";
import { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import OnlineTag from "../../components/OnlineTag";

const HeaderScreen = () => {

    const { title } = useContext(AppContext);

    const { setIsNotificationOpen } = useContext(UIContext);


    return (
        <div className="bg-surface rounded-md flex items-center justify-between px-5 border border-border">
            <h1 className="text-white font-poppins text-[18px] font-bold">
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

            <div className="flex flex-row items-center justify-between gap-5">
                {/* for input */}
                <div className="relative flex items-center">
                    <IoSearch
                        className="absolute left-3 text-text-muted"
                        size={18}
                    />
                    <input
                        className="w-full bg-surface-2 border border-border rounded-md py-2 pl-9 pr-4 text-sm placeholder:text-text-muted focus:outline-none focus:border-cyan-400 transition-all duration-200 text-white"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* For live session*/}
                <div className="flex flex-row items-center gap-2">

                    <OnlineTag
                        diameter={2}
                        bgColor={"green"}
                    />

                    <div className="flex flex-row items-center gap-3 text-text-muted text-[14px]">
                        <h5>Live</h5>
                        <div className="w-1 h-1 rounded-full bg-text-muted" />
                        <h5>2s ago</h5>
                    </div>
                </div>

                {/* For Notification */}
                <button
                    className="relative bg-surface-2 border border-border rounded-md p-2 cursor-pointer"
                    onClick={() => setIsNotificationOpen(true)}
                >
                    <div className="absolute right-1.25 top-2">
                        <OnlineTag
                            diameter={2}
                            bgColor={"red"}
                        />
                    </div>
                    <IoIosNotifications
                        className="text-text-muted"
                        size={20}
                    />
                </button>
            </div>
        </div>
    )
}

export default HeaderScreen;