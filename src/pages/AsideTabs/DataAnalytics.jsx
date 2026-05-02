import { useEffect } from "react";
import OnlineTag from "../../components/OnlineTag";
import CustomPieChart from "../../components/UserAnalytics/CustomPiChart";
import { recordProcessing, alertTypes, taskAutomation, recentReports, efficiency, recentAlert } from "../../config/RawData";
import TaskBarChart from "../../components/TaskBarChart";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const DataAnalytics = () => {

  const dispatch = useDispatch();
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
                className='grid grid-cols-[2fr_1fr] items-center '
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
    <div className='h-full  grid grid-rows-[1fr_2fr] grid-cols-1 gap-2 overflow-hidden'>
      {/* ROW ONE */}
      <div className=" grid grid-cols-3 grid-rows-1 gap-2 [&>div]:rounded-md overflow-hidden">

        {/* RECORD PROCESSING */}
        <div className="bg-surface border border-border grid grid-rows-[1fr_5fr] grid-cols-1">
          {/* HEADER */}
          <div className="border-b border-border px-2 flex flex-row items-center">
            <HeadBar title={"Record Processing"} color={"purple"} />
          </div>

          {/* CONTENT */}
          <div className='grid grid-cols-2 grid-rows-1 overflow-hidden'>
            {/* PI Chart */}
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

        {/* TASK AUTOMATION BREAKDOWN */}
        <div className="bg-surface relative border border-border grid grid-rows-[1fr_5fr] grid-cols-1">
          {/* HEADER */}
          <div className="border-b border-border px-2 flex flex-row items-center">
            <HeadBar title={"Task Automation Breakdown"} color={"cyan"} />
          </div>

          {/* CONTENT */}
          <div className=" h-full ">
            <div className="h-full">
              <TaskBarChart />

              <div className="absolute px-2 pb-0.5 bottom-0 flex flex-row items-center gap-3">
                {
                  taskAutomation.map((task, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-row items-center gap-1"
                      >
                        <div
                          className={`h-2 w-2 rounded-xs`}
                          style={{ backgroundColor: task.color }}
                        />
                        <div className="text-white text-[0.6rem]">{task.title}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        {/* ALERT TYPES */}
        <div className="bg-surface border border-border grid grid-rows-[1fr_5fr] grid-cols-1">
          {/* HEADER */}
          <div className="border-b border-border px-2 flex flex-row items-center">
            <HeadBar title={"Alert Types"} color={"orange"} />
          </div>

          {/* CONTENT */}
          <div className='grid grid-cols-2 grid-rows-1 overflow-hidden'>
            {/* PI Chart */}
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

      {/* ROW TWO */}
      <div className=" grid grid-cols-[1.5fr_1fr] grid-rows-1 gap-2 [&>div]:rounded-md overflow-hidden">

        {/* RECENT REPORTS */}
        <div className="bg-surface overflow-hidden border border-border grid grid-rows-[1fr_10fr] grid-cols-1">
          {/* HEADER */}
          <div className="border-b border-border px-2 flex flex-row items-center">
            <HeadBar title={"Recent Reports"} color={"cyan"} />
          </div>

          {/* CONTENT */}
          <div className="grid grid-rows-[1fr_10fr] grid-cols-1 overflow-hidden">
            {/* TABLE HEADER */}
            <div className="grid grid-rows-1 grid-cols-[2fr_1fr_1fr_1.5fr] gap-0.5 text-text-muted font-bold text-[0.7rem] items-center [&>div:not(:first-child)]:text-center border-b border-border">
              <div className="px-2">REPORT</div>
              <div>RECORDS</div>
              <div>STATUS</div>
              <div>GENERATED</div>
            </div>

            {/* TABLE BODY */}
            <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
              {
                recentReports.map(( item,i) => {
                  return(<div key={i} className="grid grid-rows-1 grid-cols-[2fr_1fr_1fr_1.5fr] items-center gap-0.5  border-b border-border py-3">
                    {/* REPORTS */}
                    <div className="text-white text-[1rem] px-2">
                      {item.reports}
                    </div>

                    {/* RECORDS */}
                    <div className={`text-center ${item.txt} text-[1rem] font-bold`}>
                      {(item.records).toLocaleString("en-IN")}
                    </div>

                    {/* STATUS */}
                    <div className="m-auto">
                      <div className={`flex flex-row items-center justify-center w-fit px-2  gap-1 py-0 border ${item.border} ${item.bgCol} rounded-full`}>
                        <OnlineTag diameter={7} bgColor={item.col} />
                        <div className={`${item.txt} text-[0.8rem] font-bold`}>{item.status}</div>
                      </div>
                    </div>

                    {/* GENERATED  */}
                    <div className="text-center text-text-muted text-[0.7rem]">
                      {item.generated}
                    </div>
                  </div>)
                })
              }

            </div>
          </div>
        </div>

        {/* PROCESSING EFFICIENCY */}
        <div className="grid grid-rows-[1fr_1fr] grid-cols-1 gap-2 [&>div]:bg-surface [&>div]:rounded-md [&>div]:border [&>div]:border-border overflow-hidden">
          
          {/* PROCESSING EFFICIENCY */}
          <div className="grid grid-rows-[1fr_4.5fr] grid-cols-1 overflow-hidden">
              <div className="border-b border-border flex flex-row items-center px-2">
                <HeadBar color={"purple"} title={"Processing Efficiency"}/>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                {
                  efficiency.map((item, i) => {
                    return (
                      <div key={i} className="flex flex-col gap-1 p-2">
                        <div className="flex flex-row items-center justify-between ">
                          <div className="flex flex-row items-center gap-2">
                            <div className="bg-cyan-500/10 p-0.5 rounded-md">{item.icon}</div>
                            <div className="text-white text-[0.8rem]">{item.title}</div>
                          </div>
                          <div className="text-white text-[0.8rem]">{item.val}%</div>
                        </div>

                        <div className="h-1.5 rounded-sm bg-cyan-500/10 overflow-hidden">
                          <div 
                            style={{width: `${item.val}%`, backgroundColor: "cyan"}}
                            className="h-full"
                          />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </div>

          {/* RECENT ALERTS */}
          <div className="grid grid-rows-[1fr_4.5fr] grid-cols-1 overflow-hidden">
              <div className="border-b border-border flex flex-row items-center px-2">
                <HeadBar color={"red"} title={"Recent Alerts"}/>
              </div>
              
              <div className="flex flex-col overflow-y-auto custom-scrollbar">
                {
                  recentAlert.map((item, i) => {
                    return(
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
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataAnalytics;