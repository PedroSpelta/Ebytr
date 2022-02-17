import React from 'react';
import { useTaskContext } from '../../context/taskContext';
import TaskSortDropdown from './TaskSortDropdown';

const TaskHeader:React.FC = () => {
  const { lists, selectedTask } = useTaskContext();
  const { title } = lists[selectedTask];
  return (
    <div className="flex justify-between items-end bg-[#F4F4F4]">
      <div className="pl-5 py-2 text-3xl font-medium ">{title}</div>
      <TaskSortDropdown />
    </div>

  );
};

export default TaskHeader;
