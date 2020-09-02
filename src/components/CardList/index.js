import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card';
import useWindowSize from '../hooks/useWindowSize';

const CardList = ({ column, cards }) => {
  const [size] = useWindowSize({ width: undefined, height: undefined });

  return (
    <Droppable
      droppableId={column.id}
      direction={`${size.width <= 768 ? 'vertical' : 'horizontal'}`}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          className="p-4 rounded-md bg-white shadow-md grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {cards.map(({ id, Component }, index) => (
            <Card key={id} id={id} index={index}>
              <Component />
            </Card>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CardList;
