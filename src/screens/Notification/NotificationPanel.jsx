// redux
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../redux/uiSlice";

const NotificationPanel = () => {

    const isNotificationOpen = useSelector(
        (state) => state.ui.isNotificationOpen
    );
    const dispatch = useDispatch();

  return (
    <>
        {/* Overlay */}
        {isNotificationOpen && (
            <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => dispatch(setNotification(false))}
            />
        )}

        {/* Sliding panel */}
        <div
            className={`fixed rounded-bl-md rounded-tl-md top-0 right-0 h-full min-w-80 bg-surface border-l border-border z-50 transform transition-transform duration-300 ${isNotificationOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div
                className="p-4 flex justify-between items-center border-b border-border"
            >
                <h2 className="text-white font-semibold">Notifications</h2>
                <button onClick={() => dispatch(setNotification(false))}>x</button>
            </div>

            <div className="p-4">
                {/* Your Notification */}
                <p>No new notifications.</p>
            </div>
        </div>
    </>
  )
}

export default NotificationPanel