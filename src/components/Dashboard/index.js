import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import CardList from '../CardList';
import initialData from './initial-data';

const Dashboard = () => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return null;
    }

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newCardIds = [...column.cardIds];

    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      cardIds: newCardIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newData);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const cards = column.cardIds.map((cardId) => data.cards[cardId]);

          return <CardList key={columnId} column={column} cards={cards} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
