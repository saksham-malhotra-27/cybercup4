import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChart = ({ arr: alerts }) => {
  console.log("Piechart data:", alerts);

  // Handle empty or undefined data
  if (!alerts || alerts.length === 0) {
    return <p className="text-white">No data available</p>;
  }

  // Aggregate certainties for the same attack
  const aggregatedData = alerts.reduce((acc, alert) => {
    if (!acc[alert.attack]) {
      acc[alert.attack] = 0; // Initialize if not already set
    }
    acc[alert.attack] += alert.certainty; // Aggregate certainties
    return acc;
  }, {});

  const labels = Object.keys(aggregatedData);
  const certainties = Object.values(aggregatedData);

  const neonColors = [
    'rgba(58, 134, 255, 0.9)',   // Neon blue
    'rgba(50, 255, 126, 0.9)',   // Neon green
    'rgba(245, 66, 164, 0.9)',   // Neon pink
    'rgba(255, 199, 0, 0.9)',    // Neon yellow
    'rgba(178, 66, 245, 0.9)',   // Neon purple
  ];

  const borderColors = neonColors.map(color => color.replace('0.9', '1'));

  const getColorArray = (colorsArray, length) =>
    Array.from({ length }, (_, i) => colorsArray[i % colorsArray.length]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: certainties,
        backgroundColor: getColorArray(neonColors, labels.length), // Neon pie slice colors
        borderColor: getColorArray(borderColors, labels.length),   // Neon border colors
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff', // White text for the legend
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-white">Pie Chart</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
