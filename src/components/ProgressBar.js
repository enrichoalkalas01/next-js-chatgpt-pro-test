"use client"

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
        <span>{label}</span>
        <span className="text-blue-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const ProgressBars = () => {
  const data = [
    { label: 'Product Design & Development', percentage: 67 },
    { label: 'Web Development', percentage: 89 },
    { label: 'Front-End Development', percentage: 55 },
    { label: 'UI Design & UX Development', percentage: 67 },
  ];

  return (
    <div className="p-4">
      {data.map((item, index) => (
        <ProgressBar key={index} label={item.label} percentage={item.percentage} />
      ))}
    </div>
  );
};

export default ProgressBars;
