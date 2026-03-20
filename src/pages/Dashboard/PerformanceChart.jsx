import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

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
    <div className='row-span-3  rounded-md font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)] grid grid-rows-[1fr_4fr] gap-1 text-white bg-[hsl(0,0%,40%)]'>
      <div className=' flex items-center justify-between px-5'>
        <h3>User Activity Over Time</h3>
        <div className='flex items-center justify-between gap-2'>
          <div>Year</div>
          <div>Month</div>
          <div>Week</div>
        </div>
      </div>
      <div className='w-full h-full bg-[hsl(0,0%,40%)]'>
        <LineChart
          dataset={usUnemploymentRate}
          xAxis={xAxis}
          yAxis={yAxis}
          series={series}
          grid={{ vertical: true, horizontal: true }}
          
        />
      </div>
    </div>
  )
}

export default PerformanceChart;