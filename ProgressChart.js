import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ goals }) => {
  const completed = goals.filter(g => g.done).length;
  const remaining = goals.length - completed;

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ['#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h3>📊 Goal Progress</h3>
      <Pie data={data} />
    </div>
  );
};

export default ProgressChart;
