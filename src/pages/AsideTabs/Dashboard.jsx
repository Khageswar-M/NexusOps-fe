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
    <div className='grid grid-cols-1 gap-2 h-full'>
      <KpiCards />
      <PerformanceChart />
      <ActivityFeed />
    </div>
  )
}

export default Dashboard;