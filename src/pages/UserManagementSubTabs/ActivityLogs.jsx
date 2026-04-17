import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect, useState } from "react";
import MagnifyGlass from '../../assets/MagnifyingGlass.svg?react';
import CustomizedMenu from '../../components/UserManagementCmp/CustomizedMenu.jsx';
import { logTypes, eventLogs, activeUsers } from "../../config/RawData";
import ArrowUpDown from '../../assets/ArrowUpDown.svg?react';
import Calendar from '../../assets/Calendar.svg?react';
import Arrow from '../../assets/Arrow.svg?react';
import Download from '../../assets/Download.svg?react';
import OnlineTag from "../../components/OnlineTag.jsx";
import useInitials from "../../hooks/useInitials.js";

const ActivityLogs = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Activity Logs"]);
  }, []);

  const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
  const rolesOpen = Boolean(rolesAnchorE1);

  const [checked, setChecked] = useState([]);
  const toggleCheck = (index) => {
    setChecked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // remove
        : [...prev, index] // add
    );
  };
  const CheckBox = ({ isChecked, onClick }) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div
          onClick={onClick}
          className={`w-4 h-4 rounded-sm cursor-pointer flex items-center justify-center 
          ${isChecked ? "bg-green-500" : "bg-gray-800"}
        `}
        >
          {isChecked && <span className="text-white text-[10px]">✓</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[6fr_2fr] h-full gap-2 [&>div]:bg-surface [&>div]:rounded-md">

      {/* Logs list */}
      <div className="grid grid-rows-[1fr_1fr_13fr] overflow-hidden  border border-border">

        {/* Sorting items */}
        <div className="grid p-2 grid-cols-[2fr_1.5fr_2fr_1fr_1fr] gap-1 [&>div]:flex [&>div]:items-center [&>div]:justify-center border-b border-border">

          {/* Search */}
          <div id="search-active-logs">
            <div className="flex flex-row items-center relative w-full">
              <MagnifyGlass className="w-5 h-5 text-gray-500 absolute ml-1" />
              <input
                className="placeholder:text-gray-500 bg-surface-2 text-sm outline-none border border-border w-full py-1 rounded-md pl-6 text-white focus:border-cyan-400 transition-colors duration-200"
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
        <div className="border-b border-border flex flex-row items-center px-2 justify-between">
          <div>
            <div className="flex flex-row items-center gap-2">
              <OnlineTag diameter={8} bgColor={"cyan"} />
              <div className="text-white text-[16px] font-bold">Event Logs</div>
            </div>
          </div>

          <div className="text-text-muted text-sm">
            showing <span className="text-white">7</span> of <span>{(1213).toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Table of logs */}
        <div className="grid grid-rows-[0.5fr_10fr] overflow-hidden">
          {/* Table Head */}
          <div id="activity-logs-table-head" className="border-b border-border grid grid-cols-[0.5fr_2fr_3fr_2fr_2fr_2fr_2fr] gap-1 text-sm text-text-muted">
            <div className="text-center">
              <CheckBox />
            </div>
            <div>USER</div>
            <div>EMAIL</div>
            <div>ACTION</div>
            <div>DESCRIPTION</div>
            <div>IP ADDRESS</div>
            <div>TIMESTAMP</div>

          </div>

          {/* Table body */}
          <div className="overflow-y-auto custom-scrollbar scroll-smooth">

            {
              eventLogs.map((event, idx) => {
                const initial = useInitials(event.user.name);
                return (
                  <div
                    key={idx}
                    id="activity-logs-table-head" className="border-b border-border grid grid-cols-[0.5fr_2fr_3fr_2fr_2fr_2fr_2fr] gap-1 text-sm text-text-muted py-2">
                    <div className="text-center">
                      <CheckBox
                        isChecked={checked.includes(idx)}
                        onClick={() => toggleCheck(idx)}
                      />
                    </div>

                    {/* USER */}
                    <div className="grid grid-cols-[1fr_2fr] items-center gap-1">
                      <div className="text-xl text-white bg-linear-to-bl from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center font-extrabold">
                        {initial}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[16px] text-white">{event.user.name}</div>
                        <div className="text-sm">{event.user.role}</div>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-center">
                      {event.email}
                    </div>

                    {/* ACTION */}
                    <div className="flex items-center">
                      <div className={`${event.action.bgCol} ${event.action.textCol} px-2 rounded-full border ${event.action.border} flex flex-row items-center gap-1`}>
                        <OnlineTag diameter={6} bgColor={event.action.col} />
                        {event.action.title}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-white">{event.description.desc}</div>
                      <div className="text-xs">{event.description.subDesc}</div>
                    </div>

                    {/* IP ADDRESS */}
                    <div className="flex items-center">
                      {event.ipaddress}
                    </div>

                    {/* TIMESTAMP */}
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="text-sm text-white">{event.timestamp.day}</div>
                        <div className="text-xs">{event.timestamp.time}</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>

      {/* Most active Users */}
      <div className=" rounded-xl border border-border  flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex p-2 border-b border-border justify-between items-center mb-3">
          <div className="flex flex-row items-center gap-2">
            <OnlineTag diameter={8} bgColor={"blue"} />
            <h2 className="text-white font-semibold">Most Active Users</h2>
          </div>
          <span className="text-sm text-blue-400 cursor-pointer">View all</span>
        </div>

        {/* Scrollable List */}
        <div className="flex flex-col overflow-y-auto  custom-scrollbar ">

          {activeUsers.map((user) => {
            const initial = useInitials(user.name)
            return (
              <div key={user.id} className="flex items-center justify-between pb-2 border-b border-border px-2">

                {/* Left */}
                <div className="grid grid-cols-[1fr_2fr] items-center gap-">

                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-linear-to-br from-purple-500 to-cyan-400">
                    {initial}
                  </div>

                  <div>
                    <div className="text-white text-sm">{user.name}</div>
                    <div className="text-gray-400 text-xs">{user.role}</div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 w-1/2">

                  {/* Progress */}
                  <div className="w-full h-1 bg-gray-700 rounded-full">
                    <div
                      className="h-1 rounded-full bg-purple-400"
                      style={{ width: `${(user.score / 300) * 100}%` }}
                    />
                  </div>

                  <div className="text-sm text-white w-8 text-right">
                    {user.score}
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ActivityLogs;