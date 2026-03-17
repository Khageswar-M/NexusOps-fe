import { Outlet } from "react-router-dom"
import { titleIs } from "../../context/TitleContext";
import { useEffect, useContext } from "react";
const UserManagement = () => {

  const {setTitle} = useContext(titleIs);
  useEffect(() => {
    setTitle("User Management");
  }, []);
  return (
    <div className="h-full w-full">
      <Outlet/>
    </div>
  )
}

export default UserManagement;