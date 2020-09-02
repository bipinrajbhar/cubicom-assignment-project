import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="relative overflow-hidden bg-gray-100 p-4 rounded-md "
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
