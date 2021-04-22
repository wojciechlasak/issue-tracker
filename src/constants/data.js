import { v4 as uuid4 } from 'uuid';
import { STATUS } from './status';

export const ISSUES = [
  {
    id: uuid4(),
    title: 'ALorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1618471915000,
    status: STATUS.PENDING,
  },
  {
    id: uuid4(),
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1619092055000,
    status: STATUS.OPEN,
  },
  {
    id: uuid4(),
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1619048855000,
    status: STATUS.OPEN,
  },
  {
    id: uuid4(),
    title: 'CLorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1619041655000,
    status: STATUS.OPEN,
  },
  {
    id: uuid4(),
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1619092860000,
    status: STATUS.PENDING,
  },
  {
    id: uuid4(),
    title: 'ELorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, est id congue ultrices, nunc quam tempus mauris, quis blandit augue elit eu enim. Nulla gravida nibh ex, quis sollicitudin enim eleifend at. Praesent sit amet augue cursus, aliquet diam et, euismod diam. Fusce placerat est scelerisque sem maximus feugiat.',
    created_date: 1619028060000,
    status: STATUS.CLOSED,
  },
];
