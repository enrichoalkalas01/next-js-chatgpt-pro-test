"use client"

import { FaUserCircle, FaBars } from 'react-icons/fa';
import { useSidebar } from '@/context/SidebarContext';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-sidebarBg shadow w-full fixed top-0 left-0 z-40">
      <div className="flex items-center">
        <FaBars className="mr-3 cursor-pointer text-sidebarText md:hidden" onClick={toggleSidebar} />
      </div>
      <FaUserCircle size={28} className="text-sidebarText" />
    </div>
  );
};

export default Navbar;

