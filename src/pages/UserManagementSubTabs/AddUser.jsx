import { useContext, useEffect } from "react";
import { AppContext } from "../../context/TitleContext";
import AddUserForm from "../../components/AddUserCmp/AddUserForm";

const AddUser = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Add User"]);
  }, []);

  return (
    <div className='grid grid-cols-[1fr] gap-2 h-full'>
      <div className="bg-surface rounded-md border border-border relative overflow-y-auto custom-scrollbar">
        <AddUserForm />
      </div>
    </div>
  )
}

export default AddUser;