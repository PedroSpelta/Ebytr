import React, { FC } from 'react';
import { useTaskContext } from '../../context/taskContext';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';

const Sidebar: FC = () => {
  const { lists } = useTaskContext();

  return (
    <div className="h-screen w-[300px] bg-[#F4F4F4] border-r" style={{ boxShadow: '0 0 0 1' }}>
      <h3 className="text-gray-400 p-3">Ebytr To Do</h3>
      {lists.map((list, index) => (
        <SidebarList list={list} key={list.listId} index={index} />
      ))}
      <SidebarAdd />
    </div>
  );
};

export default Sidebar;
