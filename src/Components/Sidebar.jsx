import React, { useState } from "react";
import { FaTachometerAlt, FaSignInAlt, FaUserPlus, FaPalette, FaFont, FaCube, FaIcons, FaQuestionCircle } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const menu = [
    {
      section: "Navigation",
      items: [
        { icon: <FaTachometerAlt />, label: "Dashboard" }
      ]
    },
    {
      section: "Authentication",
      items: [
        { icon: <FaSignInAlt />, label: "Login" },
        { icon: <FaUserPlus />, label: "Register" }
      ]
    },
    {
      section: "Utilities",
      items: [
        { icon: <FaFont />, label: "Typography" },
        { icon: <FaPalette />, label: "Color" },
        { icon: <FaCube />, label: "Shadow" },
        { icon: <FaIcons />, label: "Ant Icons" }
      ]
    },
    {
      section: "Support",
      items: [
        { icon: <FaQuestionCircle />, label: "Sample Page" },
        { icon: <SiGitbook />, label: "Documentation" }
      ]
    }
  ];

  return (
    <div
      className={`bg-white shadow h-screen fixed top-0 left-0 transition-all duration-300 border-r border-gray-200 z-80 
        ${isOpen ? "w-60" : "w-16 hover:w-60"} group`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 p-4">
        <div className="text-blue-600 text-2xl">🔷</div>
        <span
          className={`font-bold text-lg transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          Mantis
        </span>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menu.map((section, idx) => (
          <div key={idx} className="mb-4">
            <p
              className={`px-4 text-xs text-gray-400 mb-2 transition-opacity duration-300
              ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              {section.section}
            </p>
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
