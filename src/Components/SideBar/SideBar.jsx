import React from "react";
import "./Sidebar.css";
import {
  FaTachometerAlt,
  FaSignInAlt,
  FaUserPlus,
  FaPalette,
  FaFont,
  FaCube,
  FaIcons,
  FaQuestionCircle,
} from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export default function Sidebar({ isOpen }) {
  const menu = [
    {
      section: "Navigation",
      items: [{ icon: <FaTachometerAlt />, label: "Dashboard" }],
    },
    {
      section: "Authentication",
      items: [
        { icon: <FaSignInAlt />, label: "Login" },
        { icon: <FaUserPlus />, label: "Register" },
      ],
    },
    {
      section: "Utilities",
      items: [
        { icon: <FaFont />, label: "Typography" },
        { icon: <FaPalette />, label: "Color" },
        { icon: <FaCube />, label: "Shadow" },
        { icon: <FaIcons />, label: "Ant Icons" },
      ],
    },
    {
      section: "Support",
      items: [
        { icon: <FaQuestionCircle />, label: "Sample Page" },
        { icon: <SiGitbook />, label: "Documentation" },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">🔷</div>
        <span className="logo-text">Mantis</span>
      </div>

      <nav className="sidebar-menu">
        {menu.map((section, idx) => (
          <div key={idx} className="menu-section">
            <p className="section-title">{section.section}</p>
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
