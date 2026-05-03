import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import Arrow from '../../assets/ArrowUpDown.svg?react';
import CustomizedMenu from "../../components/UserManagementCmp/CustomizedMenu";
import { reportsData } from "../../config/RawData";
// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const Reports = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Reports"]));
  }, [dispatch]);

  const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
  const rolesOpen = Boolean(rolesAnchorE1);

  return (
    <div
      className="bg-surface h-full border border-border"
    >
      {/* ROW ONE */}
      <div className="border-b border-border flex flex-row items-center p-2 w-full gap-2">
        {/* SEARCH */}
        <div className="w-[25%]">
          <div className="flex flex-row items-center relative bg-surface-2 rounded-md">
            <Glass className="absolute text-text-muted ml-1" />
            <input
              type="text"
              className="outline-none border border-border focus:border-cyan-500 rounded-md transition-colors duration-200 placeholder:text-text-muted text-[1rem] pl-7 pr-1 text-white p-0.5 w-full"
              placeholder="Search by name, type or owner"
            />
          </div>
        </div>

        {/* ALL TYPES */}
        <div className="w-[15%] bg-amber-50">
          
        </div>

        {/* AL STATUS */}
        <div>3</div>

        {/* LAST DAYS */}
        <div>4</div>

        {/* EXPORT */}
        <div>5</div>

        {/* NEW REPORT */}
        <div>6</div>

      </div>

      {/* ROW TWO */}
      <div className="border-b border-border">2</div>

      {/* ROW THREE */}
      <div className="">3</div>
    </div>
  )
}

export default Reports