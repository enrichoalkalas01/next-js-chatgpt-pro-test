"use client"

import { FaArrowUp, FaArrowDown, FaEllipsisH, FaArrowRight } from 'react-icons/fa';

const InfoCard = ({
    title = "Title",
    value = "Value",
    change = "0%",
    description = "Description",
    link = "#",
    isIncrease = true,
}) => {
    return (
        <div className="h-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisH />
                </button>
            </div>
            <div className="mt-2">
                <p className="text-2xl font-semibold text-gray-800">{value}</p>
                <div className="flex items-center text-sm mt-1">
                {isIncrease ? (
                    <FaArrowUp className="text-green-500" />
                ) : (
                    <FaArrowDown className="text-red-500" />
                )}
                <span className={`ml-1 ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
                <span className="text-gray-400 ml-2">{description}</span>
                </div>
            </div>
            <div className="mt-4">
                <a href={link} className="text-sm text-primary hover:underline flex items-center">
                View Report <FaArrowRight className="ml-1" />
                </a>
            </div>
        </div>
    );
};

export default InfoCard;
