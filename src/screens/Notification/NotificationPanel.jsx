import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../redux/uiSlice";
import BellIcon from '../../assets/BellIcon.svg?react';
import Plus from '../../assets/Plus.svg?react';
import { useEffect, useState } from "react";

const NotificationPanel = () => {

    const isNotificationOpen = useSelector(
        (state) => state.ui.isNotificationOpen
    );

    const dispatch = useDispatch();

    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        console.log(color);
    }, [color]);
    
    if (!isNotificationOpen) return null;


    return (
        <div
            className="absolute top-full right-0 mt-2 w-80 h-80 bg-surface border border-border rounded-md shadow-lg z-50 flex flex-col"
        >
            {/* Header */}
            <div className="p-4 flex justify-between border-b border-border text-white shrink-0">
                <span className="flex flex-row items-center gap-2">
                    <BellIcon className="h-5 w-5" />
                    <span className="text-md">Notification</span>
                </span>

                <button
                    onClick={() => dispatch(setNotification(false))}
                    className="hover:bg-white/10 flex items-center justify-center cursor-pointer rounded-full"
                >
                    <Plus className="h-6 w-6 rotate-45" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto text-white">
                <input
                    type="color"
                    name=""
                    id=""
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                />
            </div>
        </div>
    );
};

export default NotificationPanel;