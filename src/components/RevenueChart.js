"use client"

import React from 'react';
import Chart from 'react-apexcharts';

const RevenueChart = ({ cardHeight = "auto" }) => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      title: {
        text: 'Revenue',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val}`,
      },
    },
    colors: ['#4F46E5', '#8B5CF6'],
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          xaxis: {
            labels: {
              rotate: -45,
            },
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = [
    {
      name: 'Profit',
      data: [10, 15, 12, 25, 14, 17],
    },
    {
      name: 'Loss',
      data: [8, 11, 9, 20, 10, 13],
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col" style={{ height: cardHeight }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Revenue</h3>
        <button className="text-gray-400 hover:text-gray-600 px-2 py-1 rounded-lg border border-gray-300">
          Month
        </button>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-2xl font-semibold text-gray-800">$16,400.12</p>
        <span className="text-green-500 text-sm ml-2">▲ 10%</span>
      </div>
      <div className="flex justify-end text-sm text-gray-600 mb-2">
        <div className="flex items-center mr-4">
          <span className="inline-block w-3 h-3 mr-1 bg-purple-700 rounded-full"></span>
          <span>Profit</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-purple-300 rounded-full"></span>
          <span>Loss</span>
        </div>
      </div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height="100%" />
    </div>
  );
};

export default RevenueChart;
