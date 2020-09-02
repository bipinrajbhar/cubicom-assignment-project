import { GET_ORDERS } from './orderTypes';
import initialState from '../data/orderData';

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return state;
    default:
      return state;
  }
};

export default orderReducer;
