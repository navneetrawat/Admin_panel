import React from "react";
import { FaBars, FaRegUser, FaGithub } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Navbar.css"; // Import the CSS file

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="menu-button" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Ctrl + k"
              className="search-input"
            />
          </div>
        </div>

        <div className="navbar-right">
          <FaGithub size={24} className="icon" />
          <IoMdNotificationsOutline size={24} className="icon" />
          <div className="user-info">
            <FaRegUser size={24} className="icon" />
            <p className="username">JWT User</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
