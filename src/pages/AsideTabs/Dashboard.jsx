import KpiCards from "../Dashboard/KpiCards";
import PerformanceChart from "../Dashboard/PerformanceChart";
import ActivityFeed from "../Dashboard/ActivityFeed";

const Dashboard = () => {
  return (
    <div className='grid grid-rows-9 gap-2 h-full p-2 overflow-y-auto'>
      <KpiCards/>
      <PerformanceChart/>
      <ActivityFeed/>
    </div>
  )
}

export default Dashboard;