import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import Arrow from '../../assets/ArrowUpDown.svg?react';
import CustomizedMenu from "../../components/UserManagementCmp/CustomizedMenu";
import DropDown from "../../components/DropDown";
import { reportType, statusType, lastDay } from "../../config/RawData";
import OnlineTag from "../../components/OnlineTag";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
import ArrowPrevNext from '../../assets/Arrow.svg?react';
import CheckIcon from '../../assets/Check.svg?react';
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

  const [checkAll, setCheckAll] = useState(true);

  return (
    <div
      className="bg-surface h-full border border-border overflow-hidden"
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
      <div className="border-b border-border px-2 py-0.5 flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <OnlineTag diameter={8} bgColor={"cyan"}/>
          <div className="text-text-muted">All Reports</div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="text-sm text-red-500 bg-red-500/10 px-2 rounded-full font-bold">
            32 failed
          </div>
          <div className="text-white text-sm">
            Showing 8 of 435
          </div>
        </div>
      </div>

      {/* ROW THREE */}
      <div className="h-full flex flex-col">
        {/* TABLE */}
        <div className="h-[80%]">
          {/* TABLE ROW */}
          <div className="grid grid-rows-1 grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr_1.5fr_1.5fr_2fr] border-b border-border p-1">
            {
              [
                '', 
                'REPORT NAME', 
                'TYPE', 
                'STATUS', 
                'RECORDS', 
                'SIZE', 
                'OWNER', 
                'GENERATED', 
                'ACTIONS'
              ].map((item, i) => (
                  item === '' ? (
                    <div className={`h-4 w-4  ${checkAll ? "bg-cyan-500" : "bg-gray-800"} m-auto rounded-sm cursor-pointer flex items-center justify-center`}
                      onClick={() => setCheckAll(prev => !prev)}
                    >
                      {
                        checkAll && <CheckIcon className="w-5 h-5 text-gray-800"/> 
                      }
                    </div>
                  ) : (
                    <div className={`text-sm text-text-muted px-2`}>{item}</div>
                  )
              ))
            }
          </div>
          {/* TABLE COL */}
        </div>

        {/* INDEXING */}
        <div className="flex flex-row items-center border-t border-border">
          <div className="flex flex-row items-center gap-2 justify-end w-full text-text-muted [&>div]:bg-surface-2 [&>div]:px-2 [&>div]:rounded-md px-2 ">
            <div className="flex flex-row"><ArrowPrevNext className="rotate-180"/>Prev</div>
            <div className="flex flex-row">Next <ArrowPrevNext/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports