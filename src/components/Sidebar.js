"use client"

import { FaHome, FaBox, FaUsers, FaChartLine, FaCog, FaQuestionCircle, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useSidebar } from '@/context/SidebarContext';
import { useState } from 'react';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`fixed md:relative top-0 left-0 w-64 h-auto p-6 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 bg-sidebarBg text-sidebarText shadow-lg z-50 flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'}`}>Storeshop</h1>
          <FaTimes className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-sidebarText'} md:hidden`} onClick={toggleSidebar} />
        </div>
        <ul className="space-y-6">
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaHome className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Dashboard</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaBox className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Products</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaUsers className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Customers</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaChartLine className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Campaigns</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaCog className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Settings</span>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group">
            <FaQuestionCircle className={`mr-4 text-lg ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`} />
            <span className={`text-md font-medium ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-sidebarText group-hover:text-white'}`}>Help Center</span>
          </li>
        </ul>
      </div>
      <div className="mt-auto flex items-center p-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer group" onClick={handleDarkModeToggle}>
        {isDarkMode ? (
          <>
            <FaSun className="mr-4 text-lg text-gray-400 group-hover:text-white" />
            <span className="text-md font-medium text-gray-400 group-hover:text-white">Light Mode</span>
          </>
        ) : (
          <>
            <FaMoon className="mr-4 text-lg text-sidebarText group-hover:text-white" />
            <span className="text-md font-medium text-sidebarText group-hover:text-white">Dark Mode</span>
          </>
        )}
        <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle} className="hidden" />
      </div>
    </div>
  );
};

export default Sidebar;
