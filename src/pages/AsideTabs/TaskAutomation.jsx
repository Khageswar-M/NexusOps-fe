import { useEffect } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import DropDown from "../../components/DropDown";
import { statusType, frequencyType } from "../../config/RawData";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
import OnlineTag from '../../components/OnlineTag.jsx';
import EditBtn from '../../components/EditBtn.jsx';
import DeleteBtn from '../../components/DeleteBtn.jsx';
import RetryBtn from '../../components/RetryBtn.jsx';
import TaskTable from "../../components/TaskTable.jsx";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const TaskAutomation = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Task Automation"]));
  }, [dispatch]);

  return (
    <div className="bg-surface h-full border border-border rounded-md grid grid-rows-[1fr_0.8fr_10fr]">
      {/* ROW ONE */}
      <div className="border-b border-border flex flex-row items-center px-2 gap-2">
        {/* SEARCH */}
        <div className="w-[30%]">
          <div className="flex flex-row items-center relative bg-surface-2 rounded-md">
            <Glass className="absolute text-text-muted ml-1" />
            <input
              type="text"
              className="outline-none border border-border focus:border-cyan-500 rounded-md transition-colors duration-200 placeholder:text-text-muted text-[1rem] pl-7 pr-1 text-white p-0.5 w-full"
              placeholder="Search by name, type or owner"
            />
          </div>
        </div>

        {/* STATUS TYPE */}
        <div className="w-fit relative flex items-center">
          <DropDown items={statusType} />
        </div>
        {/* STATUS TYPE */}
        <div className="w-fit relative flex items-center">
          <DropDown items={frequencyType} />
        </div>

        <div className="flex flex-row items-center gap-2 bg-surface-2 border border-border px-3 rounded-md py-0.5 text-white">
          <div className="text-[1rem] font-bold">Export</div>
          <Download className="h-5 w-5" />
        </div>

        {/* NEW REPORT */}
        <div className="flex flex-row items-center gap-1 text-gray-900 bg-cyan-500 px-2 py-0.5 rounded-md">
          <Plus />
          <div className="text-[1rem] font-bold">Create Task</div>
        </div>
      </div>

      {/* ROW TWO */}
      <div className="border-b border-border flex flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center gap-1">
          <OnlineTag diameter={7} bgColor={"cyan"} />
          <div className="text-text-muted text-[1rem]">Task List</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-sm font-bold text-red-500 bg-red-500/10 px-3 rounded-full">8 failed</div>
          <div className="text-sm text-text-muted">Showing <strong className="text-white">7</strong> of 128</div>
        </div>
      </div>

      {/* ROW THREE */}
      <div className="">
        <TaskTable/>
      </div>
    </div>
  )
}

export default TaskAutomation;