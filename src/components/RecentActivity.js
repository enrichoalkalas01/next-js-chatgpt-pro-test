"use client"

import { FaEllipsisH } from 'react-icons/fa';

const RecentActivity = ({ activities = [
    {
        customer: "Ronald Richards",
        email: "ronald@example.com",
        status: "Member",
        customerID: "#7465820",
        time: "5 min ago",
        amount: "$2,408.20",
    },
    {
        customer: "Darrell Steward",
        email: "darrell@example.com",
        status: "Signed In",
        customerID: "#2234465",
        time: "10 min ago",
        amount: "$201.50",
    },
    {
        customer: "Marvin McKinney",
        email: "marvin@example.com",
        status: "New Customer",
        customerID: "#45498327",
        time: "15 min ago",
        amount: "$2,856.03",
    },
] }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
            <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisH />
            </button>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr className="text-left text-gray-500">
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Customer ID</th>
                    <th className="py-3 px-4">Refreshed</th>
                    <th className="py-3 px-4">Amount</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity, index) => (
                    <tr key={index} className="whitespace-nowrap">
                    <td className="py-4 px-4">
                        <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full object-cover" src={`https://i.pravatar.cc/150?img=${index+1}`} alt={activity.customer} />
                        <div className="ml-3">
                            <p className="text-gray-800">{activity.customer}</p>
                            <p className="text-gray-400 text-sm">{activity.email}</p>
                        </div>
                        </div>
                    </td>
                    <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-sm rounded-full ${activity.status === "Member" ? "bg-green-100 text-green-800" : activity.status === "Signed In" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                        {activity.status}
                        </span>
                    </td>
                    <td className="py-4 px-4">{activity.customerID}</td>
                    <td className="py-4 px-4">{activity.time}</td>
                    <td className="py-4 px-4">{activity.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default RecentActivity;
