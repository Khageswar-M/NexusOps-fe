import { useContext, useEffect } from "react";
import { AppContext } from "../../context/TitleContext";
import AddUserForm from "../../components/AddUserCmp/AddUserForm";
import RoleDetails from "../../components/AddUserCmp/RoleDetails";
import QuickTips from "../../components/AddUserCmp/QuickTips";
import RecentlyAdded from "../../components/AddUserCmp/RecentlyAdded";

const AddUser = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Add User"]);
  }, []);

  return (
    <div className='grid grid-cols-[5fr_1.5fr] gap-2 h-full'>
      <div className="bg-surface rounded-md border border-border">
        <AddUserForm />
      </div>
      <div className="[&>div]:bg-surface [&>div]:rounded-md [&>div]:border [&>div]:border-border grid grid-rows-[1fr_1fr_1fr] gap-2">
        <RoleDetails/>
        <QuickTips/>
        <RecentlyAdded/>
      </div>
    </div>
  )
}

export default AddUser;