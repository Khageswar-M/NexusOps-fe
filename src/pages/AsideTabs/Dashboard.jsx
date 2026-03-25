import KpiCards from "../Dashboard/KpiCards";
import PerformanceChart from "../Dashboard/PerformanceChart";
import ActivityFeed from "../Dashboard/ActivityFeed";
import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const Dashboard = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["Dashboard"]);
  }, []);


  return (
    <div className='grid grid-rows-[1fr_3fr_3fr] gap-2 h-full p-2 overflow-y-auto'>
      <KpiCards />
      <PerformanceChart />
      <ActivityFeed />
    </div>
  )
}

export default Dashboard;