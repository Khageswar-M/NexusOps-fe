import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import AreaChartComponent from '../../components/AreaChartComponent';

const dateAxisFormatter = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const percentageFormatter = (value) => {
  return `${value}%`;
};

const PerformanceChart = () => {

  const xAxis = [
    {
      dataKey: 'date',
      scaleType: 'time',
      valueFormatter: dateAxisFormatter,
      
    },
  ];

  const yAxis = [
    {
      valueFormatter: percentageFormatter,
    },
  ];

  const series = [
    {
      dataKey: 'rate',
      showMark: false,
      valueFormatter: percentageFormatter,
    },
  ];

  const usUnemploymentRate = [
  { date: new Date('1948-01-01'), rate: 3.4 },
  { date: new Date('1948-02-01'), rate: 3.8 },
  { date: new Date('1948-03-01'), rate: 4.0 },
  { date: new Date('1948-04-01'), rate: 3.9 },
  { date: new Date('1948-05-01'), rate: 3.5 },
  { date: new Date('1948-06-01'), rate: 3.6 },
  { date: new Date('1948-07-01'), rate: 3.6 },
  { date: new Date('1948-08-01'), rate: 3.9 },
  ];

  return (
    <div className='rounded-md font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)] grid grid-rows-[1fr_10fr] gap-1 text-white  overflow-hidden bg-[linear-gradient(147deg,rgba(23,23,23,1)_0%,rgba(41,41,41,1)_50%,rgba(66,66,66,1)_100%)]'>
      <div className=' flex items-center justify-between px-5 py-2'>
        <h3>User Activity Over Time:</h3>
        <div className='flex items-center justify-between gap-2'>
          <div className='bg-[hsl(0,0%,25%)] px-3 py-0.5 cursor-pointer rounded-md text-[14px]'>Last 7 Days</div>
          <div className='bg-[hsl(0,0%,25%)] px-3 py-0.5 cursor-pointer rounded-md text-[14px]'>Last 30 Days</div>
        </div>
      </div>
      <div className='w-full h-full  flex items-center justify-center'>
        <AreaChartComponent/>
      </div>
    </div>
  )
}

export default PerformanceChart;