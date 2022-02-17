import React from 'react';

import { RiZzzFill } from 'react-icons/ri';
import { HiDotsHorizontal } from 'react-icons/hi';

interface ITaskStatus {
  status: string;
  onClick: any;
}

const TaskStatus: React.FC<ITaskStatus> = ({ status, onClick }) => {
  if (status === 'pending') {
    return (
      <div onClick={onClick} aria-hidden="true">
        <RiZzzFill />
      </div>
    );
  }
  if (status === 'working') {
    return (
      <div onClick={onClick} aria-hidden="true">
        <HiDotsHorizontal />
      </div>
    );
  }
  return <div />;
};

export default TaskStatus;
