import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import DropDown from "../../components/DropDown";
import { statusType, frequencyType } from "../../config/RawData";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
import OnlineTag from '../../components/OnlineTag.jsx';
import TaskTable from "../../components/TaskTable.jsx";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const TOTAL_PAGES = 19;

const TaskAutomation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Task Automation"]));
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const getPageNumbers = () => {
    if (TOTAL_PAGES <= 7) return Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", TOTAL_PAGES];
    if (currentPage >= TOTAL_PAGES - 3) return [1, "...", TOTAL_PAGES - 4, TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", TOTAL_PAGES];
  };

  return (
    <div className="bg-surface h-full border border-border rounded-md grid grid-rows-[1fr_0.8fr_10fr_auto]">

      {/* ROW ONE */}
      <div className="border-b border-border flex flex-row items-center px-2 gap-2 overflow-y-auto">
        <div className="w-[30%] shrink-0">
          <div className="flex flex-row items-center relative bg-surface-2 rounded-md">
            <Glass className="absolute text-text-muted ml-1" />
            <input
              type="text"
              className="outline-none border border-border focus:border-cyan-500 rounded-md transition-colors duration-200 placeholder:text-text-muted text-[1rem] pl-7 pr-1 text-white p-0.5 w-full"
              placeholder="Search by name, type or owner"
            />
          </div>
        </div>

        <div className="w-fit relative flex items-center shrink-0">
          <DropDown items={statusType} />
        </div>
        <div className="w-fit relative flex items-center shrink-0">
          <DropDown items={frequencyType} />
        </div>

        <button className="flex flex-row items-center gap-2 bg-surface-2 border border-border px-3 rounded-md py-0.5 text-white hover:border-cyan-500 transition-colors shrink-0">
          <span className="text-[1rem] font-bold">Export</span>
          <Download className="h-5 w-5" />
        </button>

        <button className="flex flex-row items-center gap-1 text-gray-900 bg-cyan-500 hover:bg-cyan-400 px-2 py-0.5 rounded-md transition-colors shrink-0">
          <Plus />
          <span className="text-[1rem] font-bold">Create Task</span>
        </button>
      </div>

      {/* ROW TWO */}
      <div className="border-b border-border flex flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center gap-1">
          <OnlineTag diameter={7} bgColor="cyan" />
          <div className="text-text-muted text-[1rem]">Task List</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-sm font-bold text-red-500 bg-red-500/10 px-3 rounded-full">8 failed</div>
          <div className="text-sm text-text-muted">
            Showing <strong className="text-white">7</strong> of 128
          </div>
        </div>
      </div>

      {/* ROW THREE */}
      <div className="overflow-hidden">
        <TaskTable currentPage={currentPage} />
      </div>

      {/* ROW FOUR — Pagination */}
      <div className="border-t border-border px-4 py-2 flex items-center justify-between shrink-0">
        <span className="text-text-muted text-xs">
          Page <span className="text-white font-semibold">{currentPage}</span> of {TOTAL_PAGES}
        </span>

        <div className="flex items-center gap-1">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs px-2.5 py-1 rounded border border-border text-text-muted hover:text-white hover:border-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ‹
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="text-xs px-1.5 py-1 text-text-muted select-none">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                  currentPage === p
                    ? "bg-cyan-500 text-gray-900 font-bold border-cyan-500"
                    : "text-text-muted hover:text-white hover:border-cyan-500 border-border bg-transparent"
                }`}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() => setCurrentPage(p => Math.min(TOTAL_PAGES, p + 1))}
            disabled={currentPage === TOTAL_PAGES}
            className="text-xs px-2.5 py-1 rounded border border-border text-text-muted hover:text-white hover:border-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskAutomation;