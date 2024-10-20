import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = ({ arr: data }) => {
  // Check if data is provided and has content
  if (!data || data.length === 0) {
    return <p className="text-white">No data available</p>;
  }

  // Extract attack names (labels) and their respective certainties (data for chart)
  const labels = data.map(item => item.attack);
  const certainties = data.map(item => item.certainty);

  const neonColors = [
    'rgba(58, 134, 255, 0.9)',   // Neon blue
    'rgba(50, 255, 126, 0.9)',   // Neon green
    'rgba(245, 66, 164, 0.9)',   // Neon pink
    'rgba(255, 199, 0, 0.9)',    // Neon yellow
    'rgba(178, 66, 245, 0.9)',   // Neon purple
  ];

  const borderColors = neonColors.map(color => color.replace('0.9', '1'));

  const chartData = {
    labels: labels, // Attacks as labels
    datasets: [
      {
        label: 'Certainty', // Label for the dataset
        data: certainties,  // Certainty values as the dataset data
        backgroundColor: neonColors, // Neon colors for the bars
        borderColor: borderColors,   // Border neon colors
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
        title: {
          display: true,
          text: 'Certainty (%)', // Title for the Y-axis
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Gridline color (faint white)
        },
      },
      x: {
        title: {
          display: true,
          text: 'Attack Types', // Title for the X-axis
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // White text for the legend
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-900 shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-white">Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
