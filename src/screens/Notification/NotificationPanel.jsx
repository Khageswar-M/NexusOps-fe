import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../redux/uiSlice";

const NotificationPanel = () => {

    const isNotificationOpen = useSelector(
        (state) => state.ui.isNotificationOpen
    );

    const dispatch = useDispatch();

    if (!isNotificationOpen) return null;

    return (
        <div
            className="
                absolute
                top-full
                right-0
                mt-2
                w-80
                h-80
                bg-surface
                border
                border-border
                rounded-md
                shadow-lg
                z-50
            "
        >
            <div className="p-4 flex justify-between border-b border-border">
                <h2 className="font-semibold">
                    Notifications
                </h2>

                <button
                    onClick={() =>
                        dispatch(setNotification(false))
                    }
                >
                    ×
                </button>
            </div>

            <div className="p-4">
                <p>No new notifications.</p>
            </div>
        </div>
    );
};

export default NotificationPanel;