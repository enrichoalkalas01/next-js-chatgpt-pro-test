"use client"

import React from 'react';
import Chart from 'react-apexcharts';

const TrafficChannel = () => {
    const chartOptions = {
        chart: {
        type: 'donut',
        },
        labels: ['Direct', 'Organic', 'Referral'],
        colors: ['#4F46E5', '#8B5CF6', '#A78BFA'],
        legend: {
        show: true,
        position: 'bottom',
        },
        dataLabels: {
        enabled: true,
        formatter: (val) => `${val.toFixed(1)}%`,
        },
        responsive: [
        {
            breakpoint: 480,
            options: {
            chart: {
                width: 200,
            },
            legend: {
                position: 'bottom',
            },
            },
        },
        ],
    };

    const chartSeries = [50.5, 30.5, 19];

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Traffic Channel</h3>
            <button className="text-gray-400 hover:text-gray-600 px-2 py-1 rounded-lg border border-gray-300">
            All time
            </button>
        </div>
        <Chart options={chartOptions} series={chartSeries} type="donut" height={320} />
        <div className="mt-4 flex justify-around text-gray-600">
            <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-700 rounded-full"></span>
            <span>Direct</span>
            </div>
            <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-500 rounded-full"></span>
            <span>Organic</span>
            </div>
            <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-300 rounded-full"></span>
            <span>Referral</span>
            </div>
        </div>
        </div>
    );
};

export default TrafficChannel;
