import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

import Sidebar from "./Components/SideBar/SideBar";
import "./App.css"; // Import the CSS

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />

      <div
        className={`main-content ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        
      </div>
    </div>
  );
}
