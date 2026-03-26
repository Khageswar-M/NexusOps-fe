import UserActivity from '../../components/PerformanceChartCmp/UserActivity.jsx';
import ResourceUsage from '../../components/PerformanceChartCmp/ResourceUsage.jsx';
import ServerStatus from '../../components/PerformanceChartCmp/ServerStatus.jsx';

const PerformanceChart = () => {

  return (
    <div className='rounded-md overflow-hidden  grid grid-cols-[1.5fr_1fr_1fr] gap-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border'>

      {/* User Activity over time */}
      <UserActivity/>

      {/* Resource Usage */}
      <ResourceUsage/>

      {/* Server status */}
      <ServerStatus/>

    </div>
  )
}

export default PerformanceChart;