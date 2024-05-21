import BarChart from '@/components/Chart';
import DashboardHeader from '@/components/DashboardHeader';
import InfoCard from '@/components/InfoCard';
import DashboardInfoCard from '@/components/DashboardInfoCard';
import RecentActivity from '@/components/RecentActivity';
import TrafficChannel from '@/components/TrafficChannel';
import RevenueChart from '@/components/RevenueChart';
import ProgressBars from '@/components/ProgressBar';

export default function Home() {
    return (
        <div>
            <div className='py-2 px-2'>
                <DashboardHeader />
            </div>
            <div className="">
                <div className="px-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-2">
                        <DashboardInfoCard />
                    </div>
                    <div className="lg:col-span-2">
                        <RevenueChart />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="px-4 lg:col-span-2 mt-8">
                        <RecentActivity />
                    </div>
                    <div className="px-4 lg:col-span-1 mt-8">
                        <TrafficChannel />
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md mt-4'>
                    <ProgressBars />
                </div>
            </div>
        </div>
    );
}
