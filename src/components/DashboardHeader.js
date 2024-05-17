"use client"

import { FaFilter, FaDownload } from 'react-icons/fa';

const DashboardHeader = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Here's your analytic details</p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-2">
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
            <FaFilter className="mr-2" /> Filter by
            </button>
            <button className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            <FaDownload className="mr-2" /> Export
            </button>
        </div>
        </div>
    );
};

export default DashboardHeader;