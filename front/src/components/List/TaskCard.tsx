import React from 'react';
import { RiZzzFill } from 'react-icons/ri';
import { VscTrash } from 'react-icons/vsc';
import { apiDeleteTaskFromList, apiUpdateTaskStatus } from '../../api';
import { useTaskContext } from '../../context/taskContext';
import { ITask, ITaskCard } from '../../types/context';
import TaskStatus from './TaskStatus';

const TaskCard: React.FC<ITaskCard> = ({ task }) => {
  const { selectedTask } = useTaskContext();
  const isComplete = task.status === 'complete';

  const handleDeleteTask = async () => {
    const userId = (1234).toString();
    const { createdAt } = task;
    const listId = (selectedTask + 1).toString();
    await apiDeleteTaskFromList(userId, listId, createdAt);
  };

  const handleChangeStatus = async (status: string) => {
    const { createdAt } = task;
    const listId = (selectedTask + 1).toString();
    const userId = (1234).toString();
    await apiUpdateTaskStatus(userId, listId, createdAt, status);
  };

  return (
    <div className="bg-white shadow-md m-2 rounded-md p-4 flex items-center hover:bg-[#F4F4F4] justify-between">
      <div className="flex items-center">
        <div
          className={`border border-blue-500 rounded-full w-4 h-4 mr-2 ${
            isComplete && 'bg-blue-500'
          }`}
          onClick={() => {
            if (task.status === 'complete') { return handleChangeStatus('pending'); }
            return handleChangeStatus('complete');
          }}
          aria-hidden="true"
        />
        <TaskStatus
          status={task.status}
          onClick={() => {
            if (task.status === 'pending') { return handleChangeStatus('working'); }
            return handleChangeStatus('pending');
          }}
        />
        <p className={`${isComplete && 'line-through'}`}>{task.message}</p>
      </div>
      <VscTrash
        onClick={handleDeleteTask}
        className="text-red-500 w-4 h-4 m-2 cursor-pointer"
      />
    </div>
  );
};

export default TaskCard;
