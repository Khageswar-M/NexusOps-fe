import UserActivity from '../../components/PerformanceChartCmp/UserActivity.jsx';
import ResourceUsage from '../../components/PerformanceChartCmp/ResourceUsage.jsx';
import ServerStatus from '../../components/PerformanceChartCmp/ServerStatus.jsx';

import { useSelector } from 'react-redux';

const PerformanceChart = () => {
  const width = useSelector((state) => state.app.width);

  return (
    <div className={`rounded-md grid 
    ${width >= 1200 && "grid-cols-[1.5fr_1fr_1fr]"}
    gap-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border`}>

      {
        width >= 1200 ? (
          <>
            {/* User Activity over time */}
            <UserActivity />

            {/* Resource Usage */}
            <ResourceUsage />

            {/* Server status */}
            <ServerStatus />
          </>
        ) : width >= 800 ? (
          <div className='grid grid-rows-2 h-full gap-2'>
            <div className='grid grid-cols-[2fr_1fr] gap-2'>
              {/* User Activity over time */}
              <UserActivity />

              {/* Resource Usage */}
              <ResourceUsage />
            </div>
            {/* Server status */}
            <ServerStatus />
          </div>
        ) : (
          <div className='grid grid-cols-1 h-full gap-2'>
            {/* User Activity over time */}
            <UserActivity />

            {/* Resource Usage */}
            <ResourceUsage />

            {/* Server status */}
            <ServerStatus />
          </div>
        )
      }


    </div>
  )
}

export default PerformanceChart;