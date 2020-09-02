import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-gray-100 p-4 rounded-md ">
      {children}
    </div>
  );
};

export default Card;
