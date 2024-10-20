import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/DashBoard';
import { BackgroundBeamsWithCollision } from "./components/BgBeams.jsx";

function App() {
  const [currState, setCurrState] = useState([]);
  const [prevState, setPrevState] = useState([]);
  const [alerts, setAlerts] = useState([]); // Add alerts to state

  useEffect(() => {
    const pollApi = async () => {
      try {
        const response = await fetch('http://localhost:8000/globals');
        const data = await response.json();
        console.log("API response:", data);

        // Extract the final_response string
        const finalResponseString = data.final_response;
        console.log("Raw final_response:", finalResponseString); // Log the raw response

        // Use a regular expression to extract the JSON array
        const matches = finalResponseString.match(/(\[.*\])/s);
        if (matches && matches[1]) {
          const final = JSON.parse(matches[1]); // Parse the JSON array
          console.log("Parsed final response:", final);

          // Set current state with the parsed final response
          setCurrState(final);

          // Create a new alerts array based on the conditions
          const newAlerts = final.reduce((acc, f) => {
            if (!(f.attack === "HTTP status code 200" || f.attack === "GET request")) {
              if (f.certainty > 3) {
                acc.push({
                  attack: f.attack,
                  certainty: f.certainty,
                  lines: f.lines_indicating_attack, // Ensure you're using the correct field
                  createdAt: new Date().toISOString(), // Add createdAt timestamp
                });
              }
            }
            return acc;
          }, []);

          // Update alerts without duplicates
          setAlerts((prevAlerts) => {
            const uniqueAlerts = newAlerts.filter(newAlert =>
              !prevAlerts.some(prevAlert => prevAlert.attack === newAlert.attack)
            );
            return [...uniqueAlerts, ...prevAlerts];
          });
          console.log("New Alerts:", newAlerts);
        } else {
          console.error("Could not find valid JSON array in final_response.");
        }

        // Update previous state with current data
        setPrevState(currState); // Simply set prevState to the old currState
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    // Call API immediately once on component mount
    pollApi();
    // Set up interval for polling
    const intervalId = setInterval(pollApi, 35000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Include currState as a dependency to keep track of updates

  return (
    <div className="bg-gray-900 min-h-screen dark">
        <Dashboard arr={currState} alerts={alerts} /> {/* Pass currState and alerts to Dashboard */}
    
    </div>
  );
}

export default App;
