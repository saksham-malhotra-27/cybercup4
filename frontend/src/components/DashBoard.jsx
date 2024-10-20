import React, { useState } from 'react';
import Sidebar from './SideBar';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { FiBell } from 'react-icons/fi'; // Importing bell icon from react-icons
import { BackgroundBeamsWithCollision } from './BgBeams';
import { BackgroundGradient } from './BgGradient'
import { Vortex} from './Vortex'



const Dashboard = ({ arr: currState, alerts }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);


  console.log("ALERTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.", alerts)
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Set selected alert when an alert is clicked
  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="flex bg-gray-900 text-white h-screen w-screen overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar  className="w-64 flex-shrink-0" />
      <div className="flex-1 overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center  py-4 w-full h-full overflow-x-hidden"
      >
      <div>
        
      {/* Notification Bell Area (now the entire div is clickable) */}
      <div className="absolute top-4 right-6">
        <div
          className="relative p-4 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700"
          onClick={toggleDropdown} // Clicking anywhere in this div will trigger the dropdown
        >
          <FiBell className="text-3xl text-white" />
          {alerts.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {alerts.length}
            </span>
          )}
        </div>

        {/* Dropdown Menu for Alerts */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-lg z-50 overflow-hidden">
            <h3 className="p-2 text-center font-bold bg-gray-700">Alerts</h3>
            <div className="max-h-60 overflow-y-auto">
            {alerts.map((alert, index) => {
              console.log("alerts>>>>>>>>>>>>>>", alert, index);
              return (
                <div
                  key={index}
                  className="p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
                  onClick={() => handleAlertClick(alert)}
                >
                  <p className="text-lg font-semibold">{alert.attack}</p>
                  <p className="text-sm">Certainty: {alert.certainty}</p>
                  <p className="text-xs text-gray-400">
                    Created At: {new Date(alert.createdAt).toLocaleString()}
                  </p>
                </div>
              );
            })}
            
            
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 text-white">
        <h1 className="text-5xl font-bold mb-6 text-center ">Dashboard </h1>

        {/* Chart Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-gray-800 p-4 shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h2 className="text-xl mb-4">Bar Chart</h2>
            <BarChart arr={currState} />
          </div>

          <div className="bg-gray-800 p-4 shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h2 className="text-xl mb-4">Pie Chart</h2>
            <PieChart arr={currState} />
          </div>
        </div>

        {/* Selected Alert Details Modal */}
        {selectedAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">{selectedAlert.attack}</h2>
              <p className="mb-2">Certainty: {selectedAlert.certainty}</p>
              <div className="mb-4">
              </div>
              <button
                className="bg-red-600 px-4 py-2 rounded-lg"
                onClick={() => setSelectedAlert(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
      </Vortex>
        </div>

    </div>
  );
};

export default Dashboard;
