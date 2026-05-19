import { useEffect, useState } from "react";
import MagnifyGlass from '../../assets/MagnifyingGlass.svg?react';
import CustomizedMenu from '../../components/UserManagementCmp/CustomizedMenu.jsx';
import { logTypes, eventLogs, activeUsers } from "../../config/RawData";
import ArrowUpDown from '../../assets/ArrowUpDown.svg?react';
import Calendar from '../../assets/Calendar.svg?react';
import Arrow from '../../assets/Arrow.svg?react';
import Download from '../../assets/Download.svg?react';
import OnlineTag from "../../components/OnlineTag.jsx";
import useInitials from "../../hooks/useInitials.js";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice.js";

const checkboxClass = [
  "appearance-none w-4 h-4 rounded-sm border border-border bg-gray-800",
  "checked:bg-green-500 checked:border-green-500",
  "cursor-pointer flex-shrink-0",
  "relative",
  "after:content-[''] after:absolute after:hidden",
  "checked:after:block",
  "after:left-[4px] after:top-[1px] after:w-[4px] after:h-[7px]",
  "after:border-r-2 after:border-b-2 after:border-white after:rotate-45",
  "focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 focus:ring-offset-surface",
  "transition-colors duration-150",
].join(" ");

const ActivityLogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["User Management", "Activity Logs"]));
  }, [dispatch]);

  const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
  const rolesOpen = Boolean(rolesAnchorE1);

  const [checked, setChecked] = useState([]);
  const allChecked = checked.length === eventLogs.length && eventLogs.length > 0;
  const indeterminate = checked.length > 0 && checked.length < eventLogs.length;

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setChecked(eventLogs.map((_, i) => i));
    } else {
      setChecked([]);
    }
  };

  const toggleCheck = (index, e) => {
    setChecked(prev =>
      e.target.checked ? [...prev, index] : prev.filter(i => i !== index)
    );
  };

  return (
    <div className="grid grid-cols-[6fr_2fr] h-full gap-2 [&>div]:bg-surface [&>div]:rounded-md">

      {/* ── Logs list ── */}
      <div className="flex flex-col overflow-hidden border border-border">

        {/* Toolbar */}
        <div className="grid p-2 grid-cols-[2fr_1.5fr_2fr_1fr_1fr] gap-1 border-b border-border flex-shrink-0">

          {/* Search input */}
          <div className="flex items-center">
            <div className="flex flex-row items-center relative w-full">
              <MagnifyGlass className="w-5 h-5 text-gray-500 absolute ml-1 pointer-events-none" />
              <input
                className="placeholder:text-gray-500 bg-surface-2 text-sm outline-none border border-border w-full py-1 rounded-md pl-6 text-white focus:border-cyan-400 transition-colors duration-200"
                type="text"
                placeholder="Search by User or IP..."
              />
            </div>
          </div>

          {/* Actions dropdown */}
          <div className="flex items-center p-0.5">
            <div
              className="relative bg-surface-2 flex flex-row items-center justify-between w-full px-2 border border-border h-full rounded-md cursor-pointer"
              onClick={(e) => setRolesAnchorE1(rolesAnchorE1 ? null : e.currentTarget)}
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
                <ArrowUpDown
                  size={18}
                  className={`transition-transform duration-200 ${rolesOpen ? "rotate-180" : "rotate-0"}`}
                />
              </div>
            </div>
          </div>

          {/* Date range */}
          <div className="flex items-center">
            <div className="text-text-muted w-full flex flex-row items-center border border-border justify-center py-0.5 rounded-md bg-surface-2">
              <Calendar size={20} />
              <div className="flex flex-row items-center text-sm">
                <span>2024-04-01</span>
                <Arrow size={15} />
                <span>2024-04-23</span>
              </div>
            </div>
          </div>

          {/* Export */}
          <div className="flex items-center">
            <button className="text-white font-bold w-full rounded-md py-0.5 flex flex-row items-center justify-center gap-1 bg-surface-2 border border-border cursor-pointer hover:border-cyan-400 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>

          {/* Search button */}
          <div className="flex items-center">
            <button className="flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 transition-colors w-full rounded-md font-bold py-0.5 cursor-pointer">
              <MagnifyGlass className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Meta bar */}
        <div className="border-b border-border flex flex-row items-center px-2 py-1.5 justify-between flex-shrink-0">
          <div className="flex flex-row items-center gap-2">
            <OnlineTag diameter={8} bgColor="cyan" />
            <span className="text-white text-[16px] font-bold">Event Logs</span>
          </div>
          <div className="text-text-muted text-sm">
            showing <span className="text-white">7</span> of{" "}
            <span>{(1213).toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto custom-scrollbar scroll-smooth">
          <table className="w-full border-collapse text-sm text-text-muted" style={{ minWidth: 820 }}>

            <thead className="sticky top-0 z-10 bg-surface border-b border-border">
              <tr>
                {/* Check-all */}
                <th className="w-10 px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    className={checkboxClass}
                    checked={allChecked}
                    ref={el => { if (el) el.indeterminate = indeterminate; }}
                    onChange={handleCheckAll}
                    aria-label="Select all logs"
                  />
                </th>
                {["USER", "EMAIL", "ACTION", "DESCRIPTION", "IP ADDRESS", "TIMESTAMP"].map(col => (
                  <th
                    key={col}
                    className="px-2 py-2 text-left font-semibold text-[11px] tracking-wide uppercase whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {eventLogs.map((event, idx) => {
                const initial = useInitials(event.user.name);
                const isChecked = checked.includes(idx);
                return (
                  <tr
                    key={idx}
                    className={`border-b border-border transition-colors duration-100 ${isChecked ? "bg-green-500/5" : "hover:bg-surface-2/60"}`}
                  >
                    {/* Checkbox */}
                    <td className="w-10 px-3 py-2.5 text-center">
                      <input
                        type="checkbox"
                        className={checkboxClass}
                        checked={isChecked}
                        onChange={(e) => toggleCheck(idx, e)}
                        aria-label={`Select log ${idx + 1}`}
                      />
                    </td>

                    {/* User */}
                    <td className="px-2 py-2.5 min-w-[150px]">
                      <div className="flex flex-row items-center gap-2">
                        <div className="text-base text-white bg-gradient-to-bl from-purple-500 to-pink-500 w-9 h-9 rounded-full flex items-center justify-center font-extrabold flex-shrink-0">
                          {initial}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[14px] text-white leading-tight truncate">{event.user.name}</span>
                          <span className="text-xs">{event.user.role}</span>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-2 py-2.5 min-w-[170px] truncate max-w-[180px]">
                      {event.email}
                    </td>

                    {/* Action */}
                    <td className="px-2 py-2.5 min-w-[110px]">
                      <span className={`inline-flex flex-row items-center gap-1 ${event.action.bgCol} ${event.action.textCol} px-2 py-0.5 rounded-full border ${event.action.border} whitespace-nowrap text-xs`}>
                        <OnlineTag diameter={6} bgColor={event.action.col} />
                        {event.action.title}
                      </span>
                    </td>

                    {/* Description */}
                    <td className="px-2 py-2.5 min-w-[160px]">
                      <div className="text-sm font-bold text-white leading-tight">{event.description.desc}</div>
                      <div className="text-xs mt-0.5">{event.description.subDesc}</div>
                    </td>

                    {/* IP Address */}
                    <td className="px-2 py-2.5 whitespace-nowrap min-w-[120px]">
                      {event.ipaddress}
                    </td>

                    {/* Timestamp */}
                    <td className="px-2 py-2.5 min-w-[130px]">
                      <div className="text-sm text-white leading-tight">{event.timestamp.day}</div>
                      <div className="text-xs mt-0.5">{event.timestamp.time}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-border px-4 py-2 flex items-center justify-between flex-shrink-0">
          <span className="text-text-muted text-xs">Page 1 of 174</span>
          <div className="flex items-center gap-1">
            {["«", "‹", "1", "2", "3", "›", "»"].map((p, i) => (
              <button
                key={i}
                className={`text-xs px-2.5 py-1 rounded border transition-colors ${p === "1"
                  ? "bg-cyan-500 text-gray-900 font-bold border-cyan-500"
                  : "text-text-muted hover:text-white hover:border-cyan-500 border-border bg-transparent"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Most Active Users sidebar ── */}
      <div className="border border-border flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex p-2 border-b border-border justify-between items-center flex-shrink-0">
          <div className="flex flex-row items-center gap-2">
            <OnlineTag diameter={8} bgColor="blue" />
            <h2 className="text-white font-semibold">Most Active Users</h2>
          </div>
          <button className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
            View all
          </button>
        </div>

        {/* Scrollable user list */}
        <div className="flex flex-col overflow-y-auto custom-scrollbar flex-1">
          {activeUsers.map((user) => {
            const initial = useInitials(user.name);
            return (
              <div
                key={user.id}
                className="grid grid-cols-[1fr_1fr] gap-2 p-2 items-center border-b border-border hover:bg-surface-2/50 transition-colors"
              >
                {/* Left: avatar + name */}
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br from-purple-500 to-cyan-400 flex-shrink-0 text-sm">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm truncate">{user.name}</div>
                    <div className="text-gray-400 text-xs truncate">{user.role}</div>
                  </div>
                </div>

                {/* Right: progress + score */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-1 rounded-full bg-purple-400 transition-all duration-500"
                      style={{ width: `${(user.score / 300) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-white w-8 text-right flex-shrink-0">
                    {user.score}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;