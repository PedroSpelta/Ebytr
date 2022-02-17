/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { apiAddTaskToList } from '../../api';
import { useTaskContext } from '../../context/taskContext';
import TaskSortDropdown from './TaskSortDropdown';

const CreateTask: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedTask, lists } = useTaskContext();

  const handleChangeMessage = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(evt.target.value);
  };

  const handleDivFocus = () => {
    inputRef.current?.focus();
  };

  const handleAddTask = async (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const createdAt = new Date().toISOString();
    const listId = (selectedTask + 1).toString();
    const userId = (1234).toString();

    await apiAddTaskToList(userId, listId, createdAt, message);
  };

  return (
    <div
      className="m-2 rounded-md py-2 flex items-center bg-[#F4F4F4] cursor-pointer"
      onClick={handleDivFocus}
      aria-hidden="true"
    >
      <AiOutlinePlus className="w-6 h-6 ml-3" />
      <form action="" onSubmit={handleAddTask} className="w-full px-2 mr-4">
        <input
          ref={inputRef}
          value={message}
          onChange={handleChangeMessage}
          placeholder="Digite sua tarefa aqui"
          className="bg-[#F4F4F4] w-full h-full px-2 py-2 focus:outline-none focus:border-black border-b border-transparent"
        />
      </form>
    </div>
  );
};

export default CreateTask;
