// import Navbar from "./Components/Navbar"
// import React from "react";
// import StatsCard from "./Components/StatsCard";
// function App() {
//   return (
//     <div className="bg-neutral-300 h-screen w-full">
//       <Navbar/>
//       <StatsCard/>
//     </div>
//   )
// }

// export default App;

import React, { useState } from "react";
// import Navbar from "./Components./Navbar";
// import Sidebar from "./Components./Sidebar";
// import StatsCards from "./Components./StatsCards";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import StatsCards from "./Components/StatsCard"

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-16"}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <StatsCards />
      </div>
    </div>
  );
}
