import UserActivity from '../../components/PerformanceChartCmp/UserActivity.jsx';
import ResourceUsage from '../../components/PerformanceChartCmp/ResourceUsage.jsx';
import ServerStatus from '../../components/PerformanceChartCmp/ServerStatus.jsx';

import { useSelector } from 'react-redux';

const PerformanceChart = () => {
  const width = useSelector((state) => state.app.width);

  const layoutClass =
    width >= 1200
      ? "grid-cols-[1.5fr_1fr_1fr]"
      : width >= 800
      ? "grid-rows-2 "
      : "grid-cols-1";

  const topSectionClass =
    width >= 1200
      ? ""
      : width >= 800
      ? "grid grid-cols-[2fr_1fr] gap-2 h-70"
      : "grid grid-cols-1 gap-2 h-70";

  return (
    <div
      className={`rounded-md grid gap-2
      ${layoutClass}
      [&>div]:rounded-md
      [&>div]:border
      [&>div]:border-border overflow-hidden`}
    >
      {width >= 1200 ? (
        <>
          <UserActivity />
          <ResourceUsage />
          <ServerStatus />
        </>
      ) : (
        <>
          <div className={topSectionClass}>
            <UserActivity />
            <ResourceUsage />
          </div>

          <ServerStatus />
        </>
      )}
    </div>
  );
};

export default PerformanceChart;