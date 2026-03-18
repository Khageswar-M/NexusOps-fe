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
    <div className='row-span-3 bg-[hsl(0,0%,40%)] rounded-md flex font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)]'>
      <div className='w-full h-full'>
        <LineChart
          dataset={usUnemploymentRate}
          xAxis={xAxis}
          yAxis={yAxis}
          series={series}
          // height={300}
          grid={{ vertical: true, horizontal: true }}
          
        />
      </div>
    </div>
  )
}

export default PerformanceChart;