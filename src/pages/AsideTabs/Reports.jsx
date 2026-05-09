import { useEffect, useState } from "react";
import Glass from '../../assets/MagnifyingGlass.svg?react';
import Arrow from '../../assets/ArrowUpDown.svg?react';
import CustomizedMenu from "../../components/UserManagementCmp/CustomizedMenu";
import DropDown from "../../components/DropDown";
import { reportType, statusType, lastDay, allReportsData } from "../../config/RawData";
import OnlineTag from "../../components/OnlineTag";
import Download from '../../assets/Download.svg?react';
import Plus from '../../assets/Plus.svg?react';
import ArrowPrevNext from '../../assets/Arrow.svg?react';
import CheckIcon from '../../assets/Check.svg?react';
import ViewBtn from "../../components/ViewBtn";
// redux
import { useDispatch } from "react-redux";
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

  const [rolesAnchorE1, setRolesAnchorE1] = useState(null);
  const rolesOpen = Boolean(rolesAnchorE1);

  const [checkAll, setCheckAll] = useState(true);

  const Type = ({ item }) => {
    return (
      <div className={`${item.textCol} ${item.bgCol} text-[0.8rem] px-2 rounded-md w-fit font-bold`}>
        {item.title}
      </div>
    )
  }

  const Status = ({ item }) => {
    return (
      <div className={`flex flex-row items-center gap-2 ${item.bgCol} px-2 w-fit rounded-full`}> 
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
        <div className={`${item.textCol} font-bold text-[0.8rem]`}>
          {item.title}
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-surface h-full border border-border overflow-hidden"
    >
      {/* ROW ONE */}
      <div className="border-b border-border flex flex-row items-center p-2 w-full gap-2">
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
          <Download className="h-5 w-5" />
        </div>

        {/* NEW REPORT */}
        <div className="flex flex-row items-center gap-1 text-gray-900 bg-cyan-500 px-2 py-0.5 rounded-md">
          <Plus />
          <div className="text-[1rem] font-bold">New Report</div>
        </div>

      </div>

      {/* ROW TWO */}
      <div className="border-b border-border px-2 py-0.5 flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <OnlineTag diameter={8} bgColor={"cyan"} />
          <div className="text-text-muted">All Reports</div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="text-sm text-red-500 bg-red-500/10 px-2 rounded-full font-bold">
            32 failed
          </div>
          <div className="text-white text-sm">
            Showing 1 - 8 of 435
          </div>
        </div>
      </div>

      {/* ROW THREE */}
      <div className="h-full grid grid-rows-[5fr_1.5fr] grid-cols-1">
        {/* TABLE */}
        <div className="grid grid-rows-[1fr_15fr] overflow-hidden">
          {/* TABLE ROW */}
          <div className="grid grid-rows-1 grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr_1.5fr_1.5fr_2fr] border-b border-border p-1 items-center">
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
                      checkAll && <CheckIcon className="w-5 h-5 text-gray-800" />
                    }
                  </div>
                ) : (
                  <div className={`text-sm text-text-muted px-2`}>{item}</div>
                )
              ))
            }
          </div>

          {/* TABLE COL */}
          <div className="h-full overflow-y-auto custom-scrollbar flex flex-col">
            {
              allReportsData.map((report, i) => {
                return (
                  <div
                    key={i}
                    className="grid grid-rows-1 grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr_1.5fr_1.5fr_2fr] border-b border-border p-1 items-center py-2">
                    {/* CHECK */}
                    <div className={`h-4 w-4  ${checkAll ? "bg-cyan-500" : "bg-gray-800"} m-auto rounded-sm cursor-pointer flex items-center justify-center`}
                      onClick={() => setCheckAll(prev => !prev)}
                    >
                      {
                        checkAll && <CheckIcon className="w-5 h-5 text-gray-800" />
                      }
                    </div>

                    {/* REPORT NAME */}
                    <div className="flex flex-col">
                      <div className="text-[0.8rem] text-white font-bold">{report.title}</div>
                      <div className="text-[0.8rem] text-text-muted">{report.source}</div>
                    </div>

                    {/* TYPE */}
                    <div>
                      {
                        report.type === "pdf" ? <Type item={reportType[1]} /> :
                          report.type === "xls" ? <Type item={reportType[2]} /> :
                            report.type === "csv" ? <Type item={reportType[3]} /> :
                              report.type === "json" ? <Type item={reportType[4]} /> : ""
                      }
                    </div>

                    {/* STATUS */}
                    <div className="px-2">
                      {
                        report.status === "done" ? <Status item={statusType[1]} /> :
                          report.status === "running" ? <Status item={statusType[2]} /> :
                            report.status === "failed" ? <Status item={statusType[5]} /> :
                              report.status === "scheduled" ? <Status item={statusType[3]} /> :
                                report.status === "pending" ? <Status item={statusType[4]} /> : ""
                      }
                    </div>

                    {/* RECORDS */}
                    <div className="text-white text-[0.8rem] px-2">
                      {
                        (report.records).toLocaleString()
                      }
                    </div>

                    {/* SIZE */}
                    <div className="text-white text-[0.8rem] px-2">
                      {
                        report.size
                      }
                    </div>

                    {/* OWNER */}
                    <div className="flex flex-row items-center gap-2">
                      <div className="text-[0.7rem] text-white font-bold bg-linear-to-br from-blue-500 to-purple-500 w-7 h-7 rounded-full flex items-center justify-center">
                        {
                          report.owner
                            .split(" ")
                            .map(word => word[0])
                            .join("")
                            .toUpperCase()
                        }
                      </div>
                      <div className="text-white text-[0.9rem]">{report.owner}</div>
                    </div>

                    {/* GENERATED */}
                    <div className="text-text-muted text-[0.8rem] px-2">
                      {report.generated}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-row items-center gap-2">
                      {/* <ViewBtn/>
                      <RetryBtn/>
                      <DLBtn/>
                      <DeleteBtn/> */}
                      {
                        report.status === "done" ? <>
                          <ViewBtn/> <DLBtn/>
                        </> : 
                        report.status === "running" ? <><ViewBtn/></> : 
                        report.status === "failed" ? <><RetryBtn/></> : 
                        report.status === "pending" || "scheduled"? <><EditBtn/></> : ""
                      }
                      <DeleteBtn/>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* INDEXING */}
        <div className="flex flex-row items-center justify-center border-t border-border p-1 h-fit">
          <div className="flex flex-row items-center gap-2 [&>div]:flex [&>div]:flex-row [&>div]:items-center [&>div]:bg-surface-2 [&>div]:px-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border [&>div]:text-[0.7rem] [&>div]:text-text-muted">
            <div className=""><ArrowPrevNext className="rotate-180" />Prev</div>
            <div className="">Next <ArrowPrevNext /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports