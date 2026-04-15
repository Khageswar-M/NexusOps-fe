import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect, useState } from "react";
import MagnifyGlass from '../../assets/MagnifyingGlass.svg?react';
import CustomizedMenu from '../../components/UserManagementCmp/CustomizedMenu.jsx';
import { logTypes } from "../../config/RawData";

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
        <div className="grid grid-cols-[2fr_1.5fr_2fr_1fr_1fr] gap-1 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:bg-surface-2 border-b border-border">

          {/* Search */}
          <div id="search-active-logs">
            <div className="flex flex-row items-center relative w-full px-2">
              <MagnifyGlass className="w-5 h-5 text-gray-500 absolute ml-1" />
              <input
                className="placeholder:text-gray-500 text-sm outline-none border border-border w-full py-1 rounded-md pl-6 text-white"
                type="text"
                placeholder="Search by User or IP..."
              />
            </div>
          </div>

          {/* Actions drop down */}
          <div className="">
            <div className="flex flex-row items-center justify-between w-full px-2 border border-border h-full rounded-md"
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
            </div>
          </div>

          {/* Sorting by date */}
          <div>3</div>

          {/* Export */}
          <div>4</div>

          {/* Search */}
          <div>5</div>

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