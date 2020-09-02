import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Delivered', 'Undelivered'],
    datasets: [
      {
        label: 'Shipments',
        backgroundColor: [
          'rgba(245, 101, 101, 0.5)',
          'rgba(72, 187, 120, 0.5)',
        ],
        borderColor: ['rgba(245, 101, 101, 0.7)', 'rgba(72, 187, 120, 0.7)'],
        borderWidth: 2,
        data: [25, 5],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Average Shipments per Month',
            fontSize: 16,
          },
          legend: {
            display: true,
            position: 'right',
          },
          scales: {
            yAxes: [{ ticks: { beginAtZero: true } }],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
