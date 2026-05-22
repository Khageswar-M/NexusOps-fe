import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import CustomizedMenu from "../../components/UserManagementCmp/CustomizedMenu";
import DropDown from "../../components/DropDown";
import { reportType, statusType, lastDay, allReportsData } from "../../config/RawData";
import OnlineTag from "../../components/OnlineTag";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
import CheckIcon from '../../assets/Check.svg?react';
import ViewBtn from "../../components/ViewBtn";
import FilterIcon from '../../assets/Filter.svg?react';
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/appSlice";
import RetryBtn from "../../components/RetryBtn";
import DLBtn from "../../components/DLBtn";
import DeleteBtn from "../../components/DeleteBtn";
import EditBtn from "../../components/EditBtn";

const Reports = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Reports"]));
  }, [dispatch]);

  const width = useSelector((state) => state.app.width);
  const [openFilter, setOpenFilter] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const [checkedRows, setCheckedRows] = useState({});

  useEffect(() => {
    if (width > 1400) {
      setOpenFilter(false);
    }
  }, [width]);

  const handleCheckAll = () => {
    const next = !checkAll;
    setCheckAll(next);
    if (next) {
      const all = {};
      allReportsData.forEach((_, i) => { all[i] = true; });
      setCheckedRows(all);
    } else {
      setCheckedRows({});
    }
  };

  const handleRowCheck = (i) => {
    setCheckedRows(prev => {
      const updated = { ...prev, [i]: !prev[i] };
      const allChecked = allReportsData.every((_, idx) => updated[idx]);
      setCheckAll(allChecked);
      return updated;
    });
  };

  const Checkbox = ({ checked, onClick }) => (
    <div
      className={`h-4 w-4 rounded-sm cursor-pointer flex items-center justify-center shrink-0 transition-colors duration-150 ${checked ? "bg-cyan-500" : "bg-gray-800 border border-gray-600"}`}
      onClick={onClick}
    >
      {checked && <CheckIcon className="w-3 h-3 text-gray-900" />}
    </div>
  );

  const Type = ({ item }) => (
    <span className={`${item.textCol} ${item.bgCol} text-[0.75rem] px-2 py-0.5 rounded-md font-bold whitespace-nowrap`}>
      {item.title}
    </span>
  );

  const Status = ({ item }) => (
    <span className={`inline-flex flex-row items-center gap-1.5 ${item.bgCol} px-2 py-0.5 rounded-full whitespace-nowrap`}>
      <OnlineTag
        diameter={7}
        bgColor={
          item.title === "Done" ? "green" :
            item.title === "Running" ? "cyan" :
              item.title === "Failed" ? "red" :
                item.title === "Scheduled" ? "purple" :
                  item.title === "Pending" ? "orange" : "gray"
        }
      />
      <span className={`${item.textCol} font-bold text-[0.75rem]`}>{item.title}</span>
    </span>
  );

  const OwnerAvatar = ({ name }) => (
    <div className="flex flex-row items-center gap-2 min-w-0">
      <div className="text-[0.65rem] text-white font-bold bg-linear-to-br from-blue-500 to-purple-500 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
        {name.split(" ").map(w => w[0]).join("").toUpperCase()}
      </div>
      <span className="text-white text-[0.82rem] truncate">{name}</span>
    </div>
  );

  const RowActions = ({ report }) => (
    <div className="flex flex-row items-center gap-1.5 flex-wrap">
      {report.status === "done" ? <><ViewBtn /><DLBtn /></> :
        report.status === "running" ? <><ViewBtn /></> :
          report.status === "failed" ? <><RetryBtn /></> :
            (report.status === "pending" || report.status === "scheduled") ? <><EditBtn /></> : null}
      <DeleteBtn />
    </div>
  );

  const theadCols = [
    { key: "check", label: "", className: "w-10 text-center" },
    { key: "name", label: "REPORT NAME", className: "min-w-[180px]" },
    { key: "type", label: "TYPE", className: "min-w-[80px]" },
    { key: "status", label: "STATUS", className: "min-w-[110px]" },
    { key: "records", label: "RECORDS", className: "min-w-[90px]" },
    { key: "size", label: "SIZE", className: "min-w-[70px]" },
    { key: "owner", label: "OWNER", className: "min-w-[150px]" },
    { key: "generated", label: "GENERATED", className: "min-w-[140px]" },
    { key: "actions", label: "ACTIONS", className: "min-w-[140px]" },
  ];

  return (
    <div className="bg-surface h-full border border-border flex flex-col overflow-hidden">

      {/* ── ROW ONE: Toolbar ── */}
      <div className="border-b border-border flex flex-row overflow-auto items-center gap-2 p-2 w-full">

        {/* Search */}
        <div className="flex-1 min-w-45 max-w-xs shrink-0">
          <div className="flex flex-row items-center relative bg-surface-2 rounded-md">
            <Glass className="absolute text-text-muted ml-2 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              className="outline-none border border-border focus:border-cyan-500 rounded-md transition-colors duration-200 placeholder:text-text-muted text-[0.9rem] pl-7 pr-2 text-white py-1 w-full bg-transparent"
              placeholder="Search by name, type or owner"
            />
          </div>
        </div>

        {/* Filters — inline or filter icon */}
        {width >= 1400 ? (
          <div className="flex flex-row items-center gap-1 flex-wrap">
            <DropDown items={reportType} />
            <DropDown items={statusType} />
            <DropDown items={lastDay} />
          </div>
        ) : (
          <button
            className="text-text-muted hover:text-cyan-500 cursor-pointer bg-surface-2 p-1.5 rounded-md border border-border transition-colors"
            onClick={() => setOpenFilter(true)}
            aria-label="Open filters"
          >
            <FilterIcon className="h-4 w-4" />
          </button>
        )}

        <div className="flex flex-row items-center gap-2 ml-auto">
          {/* Export */}
          <button className="flex shrink-0 flex-row items-center gap-2 bg-surface-2 border border-border px-3 rounded-md py-1 text-white hover:border-cyan-500 transition-colors">
            <span className="text-[0.85rem] font-bold">Export</span>
            <Download className="h-4 w-4" />
          </button>

          {/* New Report */}
          <button className="flex shrink-0 flex-row items-center gap-1 text-gray-900 bg-cyan-500 hover:bg-cyan-400 px-3 py-1 rounded-md transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-[0.85rem] font-bold">New Report</span>
          </button>
        </div>
      </div>

      {/* ── ROW TWO: Meta bar ── */}
      <div className="border-b border-border px-3 py-1.5 flex items-center justify-between shrink-0">
        <div className="flex flex-row items-center gap-2">
          <OnlineTag diameter={8} bgColor="cyan" />
          <span className="text-text-muted text-sm">All Reports</span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full font-bold">32 failed</span>
          <span className="text-white text-xs">Showing 1–8 of 435</span>
        </div>
      </div>

      {/* ── TABLE AREA ── */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full border-collapse text-sm" style={{ minWidth: 900 }}>

          {/* thead */}
          <thead className="sticky top-0 z-10 bg-surface border-b border-border">
            <tr>
              {theadCols.map(col => (
                <th
                  key={col.key}
                  className={`${col.className} text-left px-3 py-2 text-text-muted font-semibold text-[0.72rem] tracking-wide uppercase whitespace-nowrap`}
                >
                  {col.key === "check" ? (
                    <div className="flex justify-center">
                      <Checkbox checked={checkAll} onClick={handleCheckAll} />
                    </div>
                  ) : col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* tbody */}
          <tbody>
            {allReportsData.map((report, i) => {
              const isChecked = checkedRows[i] ?? checkAll;
              return (
                <tr
                  key={i}
                  className="border-b border-border hover:bg-surface-2/60 transition-colors group"
                >
                  {/* Checkbox */}
                  <td className="px-3 py-2.5 text-center w-10">
                    <div className="flex justify-center">
                      <Checkbox checked={isChecked} onClick={() => handleRowCheck(i)} />
                    </div>
                  </td>

                  {/* Report Name */}
                  <td className="px-3 py-2.5 min-w-45">
                    <div className="font-semibold text-white text-[0.82rem] leading-tight">{report.title}</div>
                    <div className="text-text-muted text-[0.73rem] mt-0.5">{report.source}</div>
                  </td>

                  {/* Type */}
                  <td className="px-3 py-2.5">
                    {report.type === "pdf" ? <Type item={reportType[1]} /> :
                      report.type === "xls" ? <Type item={reportType[2]} /> :
                        report.type === "csv" ? <Type item={reportType[3]} /> :
                          report.type === "json" ? <Type item={reportType[4]} /> : "—"}
                  </td>

                  {/* Status */}
                  <td className="px-3 py-2.5">
                    {report.status === "done" ? <Status item={statusType[1]} /> :
                      report.status === "running" ? <Status item={statusType[2]} /> :
                        report.status === "failed" ? <Status item={statusType[5]} /> :
                          report.status === "scheduled" ? <Status item={statusType[3]} /> :
                            report.status === "pending" ? <Status item={statusType[4]} /> : "—"}
                  </td>

                  {/* Records */}
                  <td className="px-3 py-2.5 text-white text-[0.82rem] tabular-nums">
                    {report.records.toLocaleString()}
                  </td>

                  {/* Size */}
                  <td className="px-3 py-2.5 text-white text-[0.82rem]">
                    {report.size}
                  </td>

                  {/* Owner */}
                  <td className="px-3 py-2.5 max-w-40">
                    <OwnerAvatar name={report.owner} />
                  </td>

                  {/* Generated */}
                  <td className="px-3 py-2.5 text-text-muted text-[0.78rem] whitespace-nowrap">
                    {report.generated}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-2.5">
                    <RowActions report={report} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── PAGINATION (bonus production touch) ── */}
      <div className="border-t border-border px-4 py-2 flex items-center justify-between shrink-0">
        <span className="text-text-muted text-xs">Page 1 of 55</span>
        <div className="flex items-center gap-1">
          {["«", "‹", "1", "2", "3", "›", "»"].map((p, i) => (
            <button
              key={i}
              className={`text-xs px-2.5 py-1 rounded border border-border transition-colors ${p === "1" ? "bg-cyan-500 text-gray-900 font-bold border-cyan-500" : "text-text-muted hover:text-white hover:border-cyan-500 bg-transparent"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* ── FILTER MODAL ── */}
      {openFilter && (
        <CustomModal open={openFilter}>
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="flex flex-col gap-3 bg-surface-2 p-4 rounded-lg border border-border w-72 shadow-xl">
              <h3 className="text-sm font-bold text-white mb-1">Filters</h3>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-text-muted font-semibold uppercase tracking-wide">Type</label>
                <DropDown items={reportType} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-text-muted font-semibold uppercase tracking-wide">Status</label>
                <DropDown items={statusType} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-text-muted font-semibold uppercase tracking-wide">Last Day</label>
                <DropDown items={lastDay} />
              </div>

              <div className="flex flex-row items-center justify-between gap-2 mt-2">
                <button
                  className="flex-1 text-sm font-bold border border-border px-3 py-1.5 rounded-md text-white bg-red-500/20 hover:bg-red-500/40 transition-colors"
                  onClick={() => setOpenFilter(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 text-sm font-bold border border-border px-3 py-1.5 rounded-md text-white bg-green-500/20 hover:bg-green-500/40 transition-colors"
                  onClick={() => setOpenFilter(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export default Reports;