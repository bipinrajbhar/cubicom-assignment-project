import React from 'react';

import Card from '../Card';
import BarChart from '../BarChart';
import PieChart from '../PieChart';
import Shipments from '../Shipments';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="p-4 rounded-md bg-white shadow-md grid grid-cols-3 gap-4">
        <Card>
          <Shipments />
        </Card>
        <Card>
          <BarChart />
        </Card>
        <Card>
          <PieChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
