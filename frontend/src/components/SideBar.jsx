// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  const Icon = ({ children }) => (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {children}
    </svg>
  );

  return (
    <div className="bg-black  text-white w-64 h-full p-4">
      <h2 className="text-2xl font-bold mb-6 animate-pulse">Admin Dashboard</h2>
      <ul>
        <li className="flex items-center mb-4 hover:bg-purple-400 p-3 rounded transition">
         
          <span className="ml-3 text-lg">Dashboard</span>
        </li>
        <li className="flex items-center mb-4 hover:bg-pink-700 p-3 rounded transition">
         
          <span className="ml-3 text-lg">Users</span>
        </li>
        <li className="flex items-center mb-4 hover:bg-blue-400 p-3 rounded transition">
         
          <span className="ml-3 text-lg">Reports</span>
        </li>
        <li className="flex items-center mb-4 hover:bg-indigo-400 p-3 rounded transition">
        
          <span className="ml-3 text-lg">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
