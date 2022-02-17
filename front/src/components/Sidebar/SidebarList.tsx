import React from 'react';
import { useTaskContext } from '../../context/taskContext';
import { IList } from '../../types/context';

interface ISidebarList {
  list: IList;
  index: number;
}

const SidebarList: React.FC<ISidebarList> = ({ list, index }) => {
  const { selectedTask, setSelectedTask } = useTaskContext();
  const isSelected = index === selectedTask;

  const handleClick = () => {
    setSelectedTask(index);
  };

  return (
    <div
      onClick={() => handleClick()}
      aria-hidden="true"
      className={`${
        isSelected && '!bg-[#e0e0e0]'
      } flex justify-between py-2 px-3 hover:bg-white cursor-pointer`}
    >
      <h4>{list.title}</h4>
      <p>{list.tasks.length}</p>
    </div>
  );
};

export default SidebarList;
