import KpiCards from "../Dashboard/KpiCards";
import PerformanceChart from "../Dashboard/PerformanceChart";
import ActivityFeed from "../Dashboard/ActivityFeed";
import { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const Dashboard = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Dashboard"]))
  }, [dispatch]);


  return (
    <div className='grid grid-rows-[1fr_3fr_3fr] gap-2 h-full  overflow-y-auto'>
      <KpiCards />
      <PerformanceChart />
      <ActivityFeed />
    </div>
  )
}

export default Dashboard;