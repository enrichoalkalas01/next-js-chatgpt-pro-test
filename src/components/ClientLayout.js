"use client"

import { useSidebar } from '@/context/SidebarContext';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className={`flex-1 pt-16 p-6 bg-gray-50 min-h-screen transition-transform transform ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <Navbar />
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

