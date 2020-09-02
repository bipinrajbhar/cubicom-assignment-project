import React from 'react';

import { connect } from 'react-redux';

import DeliveryIcon from '../../assets/delivery_icon.svg';

const Shipments = ({ orders }) => {
  return (
    <div>
      <img
        className="w-32 h-32 rounded-full p-8 inline-block bg-gray-200 absolute top-0 right-0 -mt-6 -mr-6"
        src={DeliveryIcon}
        alt="delivery"
      />
      <span className="text-6xl font-bold text-gray-500 uppercase">
        {orders.delivered + orders.undelivered}
      </span>
      <span className="block my-2 text-base font-bold text-gray-900">
        Shipments
      </span>
      <span className="block my-2 text-sm text-gray-500">
        Total Number of Shipments
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(Shipments);
