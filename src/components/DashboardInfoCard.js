"use client";

import InfoCard from "./InfoCard";

const DashboardInfoCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <InfoCard
                title="Total Sales"
                value="$120,784.02"
                change="+3.2%"
                description="+$453.91 today"
                link="#"
                isIncrease={true}
            />
            <InfoCard
                title="Total Orders"
                value="28,834"
                change="+2.1%"
                description="+2,876 today"
                link="#"
                isIncrease={true}
            />
            <InfoCard
                title="Visitors"
                value="18,896"
                change="-0.6%"
                description="-105 today"
                link="#"
                isIncrease={false}
            />
            <InfoCard
                title="Refunded"
                value="2,876"
                change="+1.2%"
                description="+34 today"
                link="#"
                isIncrease={true}
            />
        </div>
    );
};

export default DashboardInfoCard;
