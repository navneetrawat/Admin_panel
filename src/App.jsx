

import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import StatsCards from "./Components/StatsCard"

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

     
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-16"}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <StatsCards />
      </div>
    </div>
  );
}
