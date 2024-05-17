// src/components/Topbar.js
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="w-full h-16 bg-white shadow-md flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
            <FaSearch />
            <input
            type="text"
            placeholder="Search"
            className="border-none outline-none focus:ring-0"
            />
        </div>
        <div className="flex items-center space-x-4">
            <FaBell />
            <FaUserCircle />
        </div>
        </div>
    );
}

export default Topbar;
