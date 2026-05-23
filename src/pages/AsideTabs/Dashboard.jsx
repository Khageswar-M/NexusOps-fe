import KpiCards from "../Dashboard/KpiCards";
import PerformanceChart from "../Dashboard/PerformanceChart";
import ActivityFeed from "../Dashboard/ActivityFeed";
import { useEffect } from "react";
import UserActivity from "../../components/PerformanceChartCmp/UserActivity";
import ResourceUsage from "../../components/PerformanceChartCmp/ResourceUsage";
import ServerStatus from "../../components/PerformanceChartCmp/ServerStatus";
import ActivityFeedTable from "../../components/ActivityFeedTable";
import NotificationTable from "../../components/NotificationTable";
import { useSelector } from "react-redux";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const Dashboard = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Dashboard"]))
  }, [dispatch]);
  const width = useSelector((state) => state.app.width);


  return (
    <div className={`grid
      ${width >= 1200 ? "grid-rows-[1fr_2fr_2fr]" : "grid-cols-1"}
      gap-2
      h-full overflow-y-auto custom-scrollbar scroll-smooth scroll-m-0`}>

      <KpiCards />


      {
        width >= 1200 ? (
          <>
            <div className={`grid ${width >= 1200 ? "grid-cols-[1.5fr_1fr_1fr]" : "grid-cols-1"}  gap-2 overflow-hidden [&>div]:rounded-md [&>div]:border [&>div]:border-border`}>
              <UserActivity />
              <ResourceUsage />
              <ServerStatus />
            </div>

            <div className={`grid grid-rows-1 grid-cols-[1fr_1fr] gap-2 overflow-hidden [&>div]:rounded-md [&>div]:border [&>div]:border-border`}>
              <ActivityFeedTable />
              <NotificationTable />
            </div>
          </>
        ) : (
          <div className="[&>div]:h-70 gap-2 flex flex-col [&>div]:rounded-md [&>div]:border [&>div]:border-border">
            <UserActivity />
            <ResourceUsage />
            <ServerStatus />
            <ActivityFeedTable />
            <NotificationTable />
          </div>
        )
      }


      {/* <div className={`grid grid-rows-1 grid-cols-[1fr_1fr] gap-2 overflow-hidden [&>div]:rounded-md [&>div]:border [&>div]:border-border`}>

        <ActivityFeedTable />
        <NotificationTable />

      </div> */}
    </div>
  )
}

export default Dashboard;