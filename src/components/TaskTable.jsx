import { useState } from "react";
import EditIcon from '../assets/EditIcon.svg?react';
import RetryIcon from '../assets/IconRetry.svg?react';
import DeleteIcon from '../assets/TrashBin.svg?react';
import CheckIcon from '../assets/Check.svg?react'

// ─── Icons ─────────────────────────────────────────────────────────────────────
const IconEdit = () => (
  <EditIcon />
);
const IconRetry = () => (
  <RetryIcon />
);
const IconDelete = () => (
  <DeleteIcon className="h-4 w-4" />
);

// ─── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  active: { label: "Active", dot: "bg-green-500", badge: "bg-green-500/10 text-green-400 border border-green-500/20" },
  paused: { label: "Paused", dot: "bg-amber-400", badge: "bg-amber-400/10 text-amber-400 border border-amber-400/20" },
  failed: { label: "Failed", dot: "bg-red-500", badge: "bg-red-500/10   text-red-400   border border-red-500/20" },
  idle: { label: "Idle", dot: "bg-gray-500", badge: "bg-gray-500/10  text-gray-400  border border-gray-500/20" },
};

// ─── Sample data ───────────────────────────────────────────────────────────────
const SAMPLE_TASKS = [
  { id: 1, name: "Data Backup", sub: "Storage › S3 bucket", status: "active", freq: "Daily", last: "Today 3:00 PM", next: "Tomorrow 3:00 AM", rate: 96.56 },
  { id: 2, name: "Email Digest", sub: "Notifications › SMTP", status: "active", freq: "Hourly", last: "Today 4:00 PM", next: "Today 5:00 PM", rate: 88.2 },
  { id: 3, name: "DB Cleanup", sub: "Database › Postgres", status: "paused", freq: "Weekly", last: "May 9, 9:00 AM", next: "May 16, 9:00 AM", rate: 74.5 },
  { id: 4, name: "Report Export", sub: "Analytics › PDF export", status: "failed", freq: "Monthly", last: "May 1, 12:00 AM", next: "Jun 1, 12:00 AM", rate: 42.0 },
  { id: 5, name: "Cache Warm-up", sub: "CDN › Edge nodes", status: "active", freq: "Every 6h", last: "Today 12:00 PM", next: "Today 6:00 PM", rate: 99.1 },
  { id: 6, name: "Sync Contacts", sub: "CRM › Salesforce", status: "idle", freq: "Daily", last: "Yesterday 8:00 AM", next: "Today 8:00 AM", rate: 61.3 },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.idle;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function FreqBadge({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs whitespace-nowrap bg-white/5 text-gray-400 border border-white/10">
      {label}
    </span>
  );
}

function SuccessRate({ rate }) {
  const pct = Math.round(rate);
  const color = rate >= 85 ? "text-green-400" : rate >= 60 ? "text-amber-400" : "text-red-400";
  const bar = rate >= 85 ? "bg-green-500" : rate >= 60 ? "bg-amber-400" : "bg-red-500";
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <span className={`text-xs font-semibold tabular-nums ${color}`}>{rate.toFixed(1)}%</span>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ActionBtn({ label, danger = false, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`
        w-7 h-7 flex items-center justify-center rounded-md border shrink-0
        transition-all duration-150 cursor-pointer
        ${danger
          ? "border-white/10 text-gray-500 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
          : "border-white/10 text-gray-500 hover:bg-white/5 hover:text-gray-200"
        }
      `}
    >
      {children}
    </button>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function TaskTable({ tasks = SAMPLE_TASKS }) {
  const [data, setData] = useState(tasks);
  const [selected, setSelected] = useState(new Set());

  const allChecked = selected.size === data.length && data.length > 0;
  const someChecked = selected.size > 0 && !allChecked;

  const toggleAll = () =>
    setSelected(allChecked ? new Set() : new Set(data.map((t) => t.id)));

  const toggleRow = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const deleteRow = (id) => {
    setData((prev) => prev.filter((t) => t.id !== id));
    setSelected((prev) => { const n = new Set(prev); n.delete(id); return n; });
  };

  const deleteSelected = () => {
    setData((prev) => prev.filter((t) => !selected.has(t.id)));
    setSelected(new Set());
  };

  const [checkAll, setCheckAll] = useState(false);
  const [checkedRows, setCheckedRows] = useState({});
  const handleCheckAll = () => {
    const next = !checkAll;
    setCheckAll(next);
    if (next) {
      const all = {};
      SAMPLE_TASKS.forEach((_, i) => { all[i] = true; });
      setCheckedRows(all);
    } else {
      setCheckedRows({});
    }
  };

  const handleRowCheck = (i) => {
    setCheckedRows(prev => {
      const updated = { ...prev, [i]: !prev[i] };
      const allChecked = SAMPLE_TASKS.every((_, idx) => updated[idx]);
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

  return (
    <div className="w-full bg-surface  border border-white/10  overflow-hidden">

      {/* Horizontal scroll wrapper — kicks in below ~780px */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full border-collapse"
          style={{ tableLayout: "fixed", minWidth: "780px" }}
        >
          {/*
            colgroup controls exact column widths.
            Total: 40px + 22% + 12% + 10% + 14% + 14% + 12% + 10% ≈ 100%
            Adjust percentages to taste — just keep their sum ≤ 100%.
          */}
          <colgroup>
            <col style={{ width: "40px" }} />   {/* checkbox      */}
            <col style={{ width: "22%" }} />   {/* task name     */}
            <col style={{ width: "12%" }} />   {/* status        */}
            <col style={{ width: "10%" }} />   {/* frequency     */}
            <col style={{ width: "14%" }} />   {/* last run      */}
            <col style={{ width: "14%" }} />   {/* next run      */}
            <col style={{ width: "12%" }} />   {/* success rate  */}
            <col style={{ width: "10%" }} />   {/* actions       */}
          </colgroup>

          {/* ── THEAD ─────────────────────────────────────────────────────────── */}
          <thead>
            <tr className="border-b border-white/10">
              {/* Select-all */}
              <th className="px-3 py-3 text-center">
                {/* <input
                  type="checkbox"
                  checked={allChecked}
                  ref={(el) => { if (el) el.indeterminate = someChecked; }}
                  onChange={toggleAll}
                  aria-label="Select all tasks"
                  className="w-3.5 h-3.5 accent-indigo-500 cursor-pointer"
                /> */}

                <Checkbox checked={checkAll} onClick={() => handleCheckAll()}/>
              </th>

              {/* Column headers */}
              {[
                { label: "Task Name", align: "text-left" },
                { label: "Status", align: "text-left" },
                { label: "Frequency", align: "text-left" },
                { label: "Last Run", align: "text-left" },
                { label: "Next Run", align: "text-left" },
                { label: "Success Rate", align: "text-left" },
                { label: "Actions", align: "text-center" },
              ].map(({ label, align }) => (
                <th
                  key={label}
                  className={`px-3 py-3 ${align} text-[11px] font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          {/* ── TBODY ─────────────────────────────────────────────────────────── */}
          <tbody className="divide-y divide-white/5 overflow-y-auto custom-scrollbar">
            {data.length === 0 && (
              <tr>
                <td colSpan={8} className="py-14 text-center text-gray-500 text-sm">
                  No tasks found.
                </td>
              </tr>
            )}

            {data.map((task) => {
              const isChecked = checkedRows[task.id] ?? checkAll;
              return (<tr
                key={task.id}
                className={`transition-colors duration-100 ${selected.has(task.id)
                    ? "bg-indigo-500/5"
                    : "hover:bg-white/2"
                  }`}
              >
                {/* Checkbox */}
                <td className="px-3 py-4 text-center">
                  {/* <input
                    type="checkbox"
                    checked={selected.has(task.id)}
                    onChange={() => toggleRow(task.id)}
                    aria-label={`Select ${task.name}`}
                    className="w-3.5 h-3.5 accent-indigo-500 cursor-pointer"
                  /> */}
                  <Checkbox checked={isChecked} onClick={() => handleRowCheck(task.id)}/>
                </td>

                {/* Task name */}
                <td className="px-3 py-4">
                  <p className="text-white text-sm font-semibold leading-snug truncate">
                    {task.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 truncate">{task.sub}</p>
                </td>

                {/* Status */}
                <td className="px-3 py-4">
                  <StatusBadge status={task.status} />
                </td>

                {/* Frequency */}
                <td className="px-3 py-4">
                  <FreqBadge label={task.freq} />
                </td>

                {/* Last run */}
                <td className="px-3 py-4">
                  <span className="text-white text-xs whitespace-nowrap">{task.last}</span>
                </td>

                {/* Next run */}
                <td className="px-3 py-4">
                  <span className="text-gray-400 text-xs whitespace-nowrap">{task.next}</span>
                </td>

                {/* Success rate */}
                <td className="px-3 py-4 pr-4">
                  <SuccessRate rate={task.rate} />
                </td>

                {/* Actions */}
                <td className="px-3 py-4">
                  <div className="flex items-center gap-1">
                    <ActionBtn label={`Edit ${task.name}`} onClick={() => { }}>
                      <IconEdit />
                    </ActionBtn>
                    <ActionBtn label={`Retry ${task.name}`} onClick={() => { }}>
                      <IconRetry />
                    </ActionBtn>
                    <ActionBtn
                      label={`Delete ${task.name}`}
                      danger
                      onClick={() => deleteRow(task.id)}
                    >
                      <IconDelete />
                    </ActionBtn>
                  </div>
                </td>
              </tr>)
})}
          </tbody>
        </table>
      </div>

      {/* ── Bulk-action bar (appears when rows are selected) ──────────────────── */}
      {selected.size > 0 && (
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-indigo-500/5">
          <span className="text-xs text-indigo-400 font-medium">
            {selected.size} task{selected.size > 1 ? "s" : ""} selected
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelected(new Set())}
              className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Deselect all
            </button>
            <button
              onClick={deleteSelected}
              className="text-xs text-red-400 hover:text-red-300 transition-colors cursor-pointer"
            >
              Delete selected
            </button>
          </div>
        </div>
      )}
    </div>
  );
}