import React from 'react';
import { useTaskContext } from '../../context/taskContext';
import { sortTasks } from '../../utils/list';
import CreateTask from './CreateTask';
import TaskCard from './TaskCard';
import TaskHeader from './TaskHeader';

const List: React.FC = () => {
  const {
    lists, selectedTask, sortBy, isCrescent,
  } = useTaskContext();
  const sortedTasks = lists[selectedTask]
    ? sortTasks(lists[selectedTask].tasks, sortBy, isCrescent)
    : [];
  return (
    <>
      <TaskHeader />
      <CreateTask />
      {sortedTasks.map((task) => (
        <TaskCard key={task.createdAt} task={task} />
      ))}
    </>
  );
};

export default List;
