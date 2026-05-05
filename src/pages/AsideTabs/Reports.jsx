import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import Arrow from '../../assets/ArrowUpDown.svg?react';
import CustomizedMenu from "../../components/UserManagementCmp/CustomizedMenu";
import DropDown from "../../components/DropDown";
import { reportType, statusType, lastDay } from "../../config/RawData";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
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
      <div className="border-b border-border flex flex-row items-center p-2 w-full gap-2 overflow-y-auto">
        {/* SEARCH */}
        <div className="min-w-80">
          <div className="flex flex-row items-center relative bg-surface-2 rounded-md">
            <Glass className="absolute text-text-muted ml-1" />
            <input
              type="text"
              className="outline-none border border-border focus:border-cyan-500 rounded-md transition-colors duration-200 placeholder:text-text-muted text-[1rem] pl-7 pr-1 text-white p-0.5 w-full"
              placeholder="Search by name, type or owner"
            />
          </div>
        </div>

        <div className="flex flex-row items-center">
          {/* ALL TYPES */}
          <div className=" relative flex items-center">
            <DropDown items={reportType} />
          </div>

          {/* ALL STATUS */}
          <div className="w-fit relative flex items-center">
            <DropDown items={statusType} />
          </div>

          {/* LAST DAYS */}
          <div className="w-fit relative flex items-center">
            <DropDown items={lastDay} />
          </div>
        </div>


        {/* EXPORT */}
        <div className="flex flex-row items-center gap-2 bg-surface-2 border border-border px-3 rounded-md py-0.5 text-white">
          <div className="text-[1rem] font-bold">Export</div>
          <Download className="h-5 w-5"/>
        </div>

        {/* NEW REPORT */}
        <div className="flex flex-row items-center gap-1 text-gray-900 bg-cyan-500 px-2 py-0.5 rounded-md">
          <Plus/>
          <div className="text-[1rem] font-bold">New Report</div>
        </div>

      </div>

      {/* ROW TWO */}
      <div className="border-b border-border">2</div>

      {/* ROW THREE */}
      <div className="">3</div>
    </div>
  )
}

export default Reports