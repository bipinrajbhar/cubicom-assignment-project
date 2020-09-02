import React from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';

const PieChart = ({ orders }) => {
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
        data: [orders.delivered, orders.undelivered],
      },
    ],
  };

  return (
    <div>
      <Pie
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
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(PieChart);
