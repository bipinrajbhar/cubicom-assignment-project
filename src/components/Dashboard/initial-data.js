import Shipments from '../Shipments';
import BarChart from '../BarChart';
import PieChart from '../PieChart';

const initialData = {
  cards: {
    'card-1': { id: 'card-1', Component: Shipments },
    'card-2': { id: 'card-2', Component: BarChart },
    'card-3': { id: 'card-3', Component: PieChart },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      cardIds: ['card-1', 'card-2', 'card-3'],
    },
  },
  columnOrder: ['column-1'],
};

export default initialData;
