import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { apiAddList } from '../../api';
import { useTaskContext } from '../../context/taskContext';

const SidebarAdd: React.FC = () => {
  const { lists } = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<string>('');

  const addList = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const listId = (lists.length + 1).toString();
    apiAddList(listId, list);
  };

  const handleListChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setList(evt.target.value);
  };

  const handleDivFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="px-3 py-2 flex items-center text-blue-400 hover:bg-white focus:!bg-black cursor-pointer"
      onClick={handleDivFocus}
      aria-hidden="true"
    >
      <AiOutlinePlus className="w-6 h-6" />
      <form action="" onSubmit={addList}>
        <input
          ref={inputRef}
          value={list}
          onChange={handleListChange}
          className="pl-2 placeholder:text-blue-300 bg-transparent focus:outline-none text-black w-full"
          type="text"
          placeholder="Nova lista"
        />
      </form>
    </div>
  );
};

export default SidebarAdd;
