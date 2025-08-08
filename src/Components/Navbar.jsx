

import React from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaGithub } from "react-icons/fa"; 

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow border-b border-gray-200">
      <div className="max-w-full mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <FaBars className="text-gray-600" size={24} />
            </button>

            <div className="flex-1 flex justify-center">
              <input
                type="text"
                placeholder="Ctrl + k"
                className="w-72 border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
        
          <div className="flex items-center px-8 gap-5 text-gray-700">
            <FaGithub size={24} />
            <IoMdNotificationsOutline size={24} />
            <div className="flex items-center gap-2">
              <FaRegUser size={24} />
              <p className="text-shadow-black">JWT User</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
