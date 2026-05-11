import { useEffect } from "react";
import OnlineTag from "../../components/OnlineTag";
import CustomPieChart from "../../components/UserAnalytics/CustomPiChart";
import { recordProcessing, alertTypes, taskAutomation, recentReports, efficiency, recentAlert } from "../../config/RawData";
import TaskBarChart from "../../components/TaskBarChart";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const DataAnalytics = () => {

  const dispatch = useDispatch();
  const width = useSelector((state) => state.app.width);
  useEffect(() => {
    dispatch(setTitle(["Data Analytics"]));
  }, [dispatch]);

  const totalRecords = recordProcessing.reduce((acc, curr) => acc + curr.value, 0);
  const totalAlert = alertTypes.reduce((acc, curr) => acc + curr.value, 0);

  const HeadBar = ({ title, color }) => {
    return (
      <div>
        <div className="flex flex-row items-center gap-2">
          <OnlineTag diameter={8} bgColor={color} />
          <div className="text-white text-[1rem]">{title}</div>
        </div>
      </div>
    )
  }

  const ChartContent = ({ roles, totalCount }) => {
    return (
      <div>
        {
          roles.map((role, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-[2fr_1fr] items-center'
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <OnlineTag diameter={7} bgColor={role.col} />
                  </div>
                  <div className='text-text-muted'>
                    <div className='text-[1rem]'>{role.name}</div>
                    <div className='text-[0.7rem]'>{role.value} {totalCount == totalAlert ? "alerts" : "users"}</div>
                  </div>
                </div>
                <div className={`${role.text} text-[1rem] font-bold`}>
                  {((role.value / totalCount) * 100).toFixed(2)}%
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className={`h-full grid grid-cols-1 gap-2 transition-all duration-500 ease-in-out ${
      width >= 1313 ? "grid-rows-[1fr_2fr] overflow-hidden" :
      width > 700   ? "grid-rows-3 overflow-hidden" :
                      "auto-rows-auto overflow-y-auto"
    }`}>

      {/* ROW ONE */}
      <div className={`grid gap-2 [&>div]:rounded-md ${
        width >= 1313 ? "grid-cols-3 grid-rows-1 overflow-hidden" :
        width > 700   ? "grid-cols-2 grid-rows-1 overflow-hidden" :
                        "grid-cols-1"
      }`}>

        {/* RECORD PROCESSING */}
        <div className={`bg-surface border border-border grid grid-cols-1 ${
          width <= 700 ? "grid-rows-[auto_1fr]" : "grid-rows-[1fr_5fr]"
        }`}>
          {/* HEADER */}
          <div className="border-b border-border px-2 py-2 flex flex-row items-center">
            <HeadBar title={"Record Processing"} color={"purple"} />
          </div>

          {/* CONTENT */}
          <div className={`grid grid-cols-2 overflow-hidden ${
            width <= 700 ? "h-48" : "grid-rows-1"
          }`}>
            {/* PIE Chart */}
            <div>
              <CustomPieChart data={recordProcessing} />
            </div>

            {/* Chart Content */}
            <div className='grid p-1 grid-cols-1 grid-rows-1 overflow-y-auto custom-scrollbar'>
              <div className='flex flex-col gap-2'>
                <ChartContent roles={recordProcessing} totalCount={totalRecords} />
              </div>
            </div>
          </div>
        </div>

        {/* TASK AUTOMATION BREAKDOWN — only in ROW ONE when width > 1313 */}
        {
          width > 1313 && (
            <div className="bg-surface relative border border-border grid grid-rows-[1fr_5fr] grid-cols-1">
              {/* HEADER */}
              <div className="border-b border-border px-2 py-2 flex flex-row items-center">
                <HeadBar title={"Task Automation Breakdown"} color={"cyan"} />
              </div>

              {/* CONTENT */}
              <div className="h-full">
                <div className="h-full">
                  <TaskBarChart />
                  <div className="absolute px-2 pb-0.5 bottom-0 flex flex-row items-center gap-3">
                    {
                      taskAutomation.map((task, idx) => (
                        <div key={idx} className="flex flex-row items-center gap-1">
                          <div
                            className="h-2 w-2 rounded-xs"
                            style={{ backgroundColor: task.color }}
                          />
                          <div className="text-white text-[0.6rem]">{task.title}</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {/* ALERT TYPES */}
        <div className={`bg-surface border border-border grid grid-cols-1 ${
          width <= 700 ? "grid-rows-[auto_1fr]" : "grid-rows-[1fr_5fr]"
        }`}>
          {/* HEADER */}
          <div className="border-b border-border px-2 py-2 flex flex-row items-center">
            <HeadBar title={"Alert Types"} color={"orange"} />
          </div>

          {/* CONTENT */}
          <div className={`grid grid-cols-2 overflow-hidden ${
            width <= 700 ? "h-48" : "grid-rows-1"
          }`}>
            {/* PIE Chart */}
            <div>
              <CustomPieChart data={alertTypes} />
            </div>

            {/* Chart Content */}
            <div className='grid p-1 grid-cols-1 grid-rows-1 overflow-y-auto custom-scrollbar'>
              <div className='flex flex-col gap-2'>
                <ChartContent roles={alertTypes} totalCount={totalAlert} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW — Task Automation + Processing Efficiency (hidden when > 1313) */}
      {
        width <= 1313 && (
          <div className={`grid gap-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border ${
            width <= 700 ? "grid-cols-1" : "grid-cols-2 grid-rows-1"
          }`}>

            {/* TASK AUTOMATION BREAKDOWN */}
            <div className={`bg-surface relative border border-border grid grid-cols-1 ${
              width <= 700 ? "h-64 grid-rows-[auto_1fr]" : "grid-rows-[1fr_5fr]"
            }`}>
              {/* HEADER */}
              <div className="border-b border-border px-2 py-2 flex flex-row items-center">
                <HeadBar title={"Task Automation Breakdown"} color={"cyan"} />
              </div>

              {/* CONTENT */}
              <div className="h-full">
                <div className="h-full">
                  <TaskBarChart />
                  <div className="absolute px-2 pb-0.5 bottom-0 flex flex-row items-center gap-3">
                    {
                      taskAutomation.map((task, idx) => (
                        <div key={idx} className="flex flex-row items-center gap-1">
                          <div
                            className="h-2 w-2 rounded-xs"
                            style={{ backgroundColor: task.color }}
                          />
                          <div className="text-white text-[0.6rem]">{task.title}</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* PROCESSING EFFICIENCY */}
            <div className={`bg-surface grid grid-cols-1 ${
              width <= 700 ? "grid-rows-[auto_1fr] h-64" : "grid-rows-[1fr_4.5fr] overflow-hidden"
            }`}>
              <div className="border-b border-border flex flex-row items-center px-2 py-2">
                <HeadBar color={"purple"} title={"Processing Efficiency"} />
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                {
                  efficiency.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 p-2">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="bg-cyan-500/10 p-0.5 rounded-md">{item.icon}</div>
                          <div className="text-white text-[0.8rem]">{item.title}</div>
                        </div>
                        <div className="text-white text-[0.8rem]">{item.val}%</div>
                      </div>
                      <div className="h-1.5 rounded-sm bg-cyan-500/10 overflow-hidden">
                        <div
                          style={{ width: `${item.val}%`, backgroundColor: "cyan" }}
                          className="h-full"
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }

      {/* ROW TWO */}
      <div className={`grid gap-2 [&>div]:rounded-md ${
        width <= 700 ? "grid-cols-1" : "grid-cols-[1.5fr_1fr] grid-rows-1 overflow-hidden"
      }`}>

        {/* RECENT REPORTS */}
        <div className={`bg-surface border border-border grid grid-cols-1 ${
          width <= 700 ? "grid-rows-[auto_1fr]" : "grid-rows-[1fr_10fr] overflow-hidden"
        }`}>
          {/* HEADER */}
          <div className="border-b border-border px-2 py-2 flex flex-row items-center">
            <HeadBar title={"Recent Reports"} color={"cyan"} />
          </div>

          {/* CONTENT */}
          <div className={`grid grid-cols-1 ${
            width <= 700 ? "grid-rows-[auto_1fr]" : "grid-rows-[1fr_10fr] overflow-hidden"
          }`}>
            {/* TABLE HEADER */}
            <div className="grid grid-rows-1 grid-cols-[2fr_1fr_1fr_1.5fr] gap-0.5 text-text-muted font-bold text-[0.7rem] items-center [&>div:not(:first-child)]:text-center border-b border-border">
              <div className="px-2">REPORT</div>
              <div>RECORDS</div>
              <div>STATUS</div>
              <div>GENERATED</div>
            </div>

            {/* TABLE BODY */}
            <div className={`flex flex-col overflow-y-auto custom-scrollbar ${
              width <= 700 ? "max-h-72" : "h-full"
            }`}>
              {
                recentReports.map((item, i) => (
                  <div key={i} className="grid grid-rows-1 grid-cols-[2fr_1fr_1fr_1.5fr] items-center gap-0.5 border-b border-border py-3">
                    {/* REPORT */}
                    <div className="text-white text-[1rem] px-2">{item.reports}</div>

                    {/* RECORDS */}
                    <div className={`text-center ${item.txt} text-[1rem] font-bold`}>
                      {(item.records).toLocaleString("en-IN")}
                    </div>

                    {/* STATUS */}
                    <div className="m-auto">
                      <div className={`flex flex-row items-center justify-center w-fit px-2 gap-1 py-0 border ${item.border} ${item.bgCol} rounded-full`}>
                        <OnlineTag diameter={7} bgColor={item.col} />
                        <div className={`${item.txt} text-[0.8rem] font-bold`}>{item.status}</div>
                      </div>
                    </div>

                    {/* GENERATED */}
                    <div className="text-center text-text-muted text-[0.7rem]">{item.generated}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Processing Efficiency (desktop only) + Recent Alerts */}
        <div className={`grid grid-cols-1 gap-2 [&>div]:bg-surface [&>div]:rounded-md [&>div]:border [&>div]:border-border ${
          width <= 1313 ? "grid-rows-1" : "grid-rows-[1fr_1fr] overflow-hidden"
        }`}>

          {/* PROCESSING EFFICIENCY — desktop only */}
          {
            width >= 1313 && (
              <div className="grid grid-rows-[1fr_4.5fr] grid-cols-1 overflow-hidden">
                <div className="border-b border-border flex flex-row items-center px-2 py-2">
                  <HeadBar color={"purple"} title={"Processing Efficiency"} />
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                  {
                    efficiency.map((item, i) => (
                      <div key={i} className="flex flex-col gap-1 p-2">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-2">
                            <div className="bg-cyan-500/10 p-0.5 rounded-md">{item.icon}</div>
                            <div className="text-white text-[0.8rem]">{item.title}</div>
                          </div>
                          <div className="text-white text-[0.8rem]">{item.val}%</div>
                        </div>
                        <div className="h-1.5 rounded-sm bg-cyan-500/10 overflow-hidden">
                          <div
                            style={{ width: `${item.val}%`, backgroundColor: "cyan" }}
                            className="h-full"
                          />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }

          {/* RECENT ALERTS */}
          <div className={`grid grid-cols-1 ${
            width <= 700 ? "grid-rows-[auto_1fr]" : "grid-rows-[1fr_4.5fr] overflow-hidden"
          }`}>
            <div className="border-b border-border flex flex-row items-center px-2 py-2">
              <HeadBar color={"red"} title={"Recent Alerts"} />
            </div>
            <div className={`flex flex-col overflow-y-auto custom-scrollbar ${
              width <= 700 ? "max-h-64" : ""
            }`}>
              {
                recentAlert.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center justify-between py-2 border-b border-border px-2"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className={`${item.bgCol} p-1 rounded-md text-[1rem] flex items-center justify-center`}>{item.icon}</div>
                      <div className="text-white font-bold text-[0.9rem]">{item.title}</div>
                    </div>
                    <div className="text-text-muted text-[0.7rem]">{item.time}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataAnalytics;