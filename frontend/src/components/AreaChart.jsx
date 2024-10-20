import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register components from Chart.js for the Line chart with area fill
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Area Dataset',
        data: [65, 59, 80, 81],
        fill: true, // This makes it an area chart
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Area color
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0.4, // Curved lines
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Area Chart',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AreaChart;
