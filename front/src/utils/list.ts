import { ITasks } from '../types/context';

export const sortTasks = (tasks:ITasks, sortBy: string, isCrescent: boolean) => {
  const order = isCrescent ? 1 : -1;
  const sorted = tasks.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1 * order;
    if (a[sortBy] > b[sortBy]) return 1 * order;
    return 0;
  });
  return sorted;
};

export const a = '';
