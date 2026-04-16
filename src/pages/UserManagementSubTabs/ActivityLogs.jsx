import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect, useState } from "react";
import MagnifyGlass from '../../assets/MagnifyingGlass.svg?react';
import CustomizedMenu from '../../components/UserManagementCmp/CustomizedMenu.jsx';
import { logTypes } from "../../config/RawData";
import ArrowUpDown from '../../assets/ArrowUpDown.svg?react';
import Calendar from '../../assets/Calendar.svg?react';
import Arrow from '../../assets/Arrow.svg?react';
import Download from '../../assets/Download.svg?react';

const ActivityLogs = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Activity Logs"]);
  }, []);

  const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
  const rolesOpen = Boolean(rolesAnchorE1);

  return (
    <div className="grid grid-cols-[6fr_2fr] h-full gap-2 [&>div]:bg-surface [&>div]:rounded-md">

      {/* Logs list */}
      <div className="grid grid-rows-[1fr_1fr_13fr] overflow-hidden">

        {/* Sorting items */}
        <div className="grid grid-cols-[2fr_1.5fr_2fr_1fr_1fr] gap-1 [&>div]:flex [&>div]:items-center [&>div]:justify-center border-b border-border">

          {/* Search */}
          <div id="search-active-logs">
            <div className="flex flex-row items-center relative w-full">
              <MagnifyGlass className="w-5 h-5 text-gray-500 absolute ml-1" />
              <input
                className="placeholder:text-gray-500 bg-surface-2 text-sm outline-none border border-border w-full py-1 rounded-md pl-6 text-white"
                type="text"
                placeholder="Search by User or IP..."
              />
            </div>
          </div>

          {/* Actions drop down */}
          <div className="p-0.5">
            <div className="relative bg-surface-2 flex flex-row items-center justify-between w-full px-2 border border-border h-full rounded-md"
              onClick={(e) => {
                if (rolesAnchorE1) {
                  setRolesAnchorE1(null)
                } else {
                  setRolesAnchorE1(e.currentTarget)
                }
              }}
            >
              <div className="relative w-full flex items-center text-center">
                <CustomizedMenu
                  items={logTypes}
                  anchorEl={rolesAnchorE1}
                  open={rolesOpen}
                  handleClose={() => setRolesAnchorE1(null)}
                  actions
                />
              </div>
              <div className="absolute right-0 text-text-muted">
                {
                  rolesOpen ? (
                    <ArrowUpDown size={18} className="rotate-180 transition-all duration-200" />
                  ) : (
                    <ArrowUpDown size={18} className="rotate-0 transition-all duration-200" />
                  )
                }
              </div>
            </div>
          </div>

          {/* Sorting by date */}
          <div className="">
            <div className="text-text-muted w-full flex flex-row items-center border border-border justify-center  py-0.5 rounded-md bg-surface-2">
              <div className="flex flex-row items-center">
                <Calendar size={20} />
                <div className="flex flex-row items-center text-sm">
                  <div>2024-04-01</div>
                  <Arrow size={15} />
                  <div>2024-04-23</div>
                </div>
              </div>

            </div>
          </div>

          {/* Export */}
          <div>
            <div className="text-white font-bold w-full rounded-md py-0.5 flex flex-row items-center justify-center gap-1 bg-surface-2 border border-border cursor-pointer">
              <div className="flex flex-row items-center gap-1">
                <Download className="w-5 h-5" />
                <div>Export</div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div>
            <div className="flex items-center justify-center bg-cyan-400 w-full rounded-md font-bold ">
              <div className="flex flex-row items-center">
                <MagnifyGlass className="w-7 h-7" />
                <div>Search</div>
              </div>
            </div>
          </div>

        </div>

        {/* Header */}
        <div>
          2
        </div>

        {/* Table of logs */}
        <div>
          3
        </div>


      </div>

      {/* Most active Users */}
      <div>2</div>
    </div>
  )
}

export default ActivityLogs;