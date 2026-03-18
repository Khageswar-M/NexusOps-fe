import { Outlet } from "react-router-dom"
import { AppContext } from "../../context/TitleContext";
import { useEffect, useContext } from "react";
const UserManagement = () => {

  const {setTitle} = useContext(AppContext);
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