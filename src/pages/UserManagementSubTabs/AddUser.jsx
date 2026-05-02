import {useEffect } from "react";
import AddUserForm from "../../components/AddUserCmp/AddUserForm";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const AddUser = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["User Management", "Add User"]))
  }, [dispatch]);

  return (
    <div className='grid grid-cols-[1fr] gap-2 h-full'>
      <div className="bg-surface rounded-md border border-border relative overflow-y-auto custom-scrollbar">
        <AddUserForm />
      </div>
    </div>
  )
}

export default AddUser;