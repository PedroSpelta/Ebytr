import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useTaskContext } from '../../context/taskContext';

const TaskSortDropdown: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const {
    setIsCrescent, isCrescent, sortBy, setSortBy,
  } = useTaskContext();

  return (
    <div className="flex items-center pr-5">
      <div
        className="hover:bg-[#a7a7a7] p-1 rounded-md"
        onClick={() => setIsCrescent((state) => !state)}
        aria-hidden="true"
      >
        {isCrescent ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        <p className="h-10 flex justify-center items-center">
          <BiSortAlt2 className="w-5 h-5" />
          Ordenar
        </p>
        {show && (
          <div className="absolute right-0 w-40 bg-white rounded-md shadow-md flex flex-col py-3 cursor-pointer">
            <p className="font-semibold text-center pb-3 border-b ">
              Ordenar por
            </p>
            <div
              className="py-1 px-4 hover:bg-[#F5F5F5]"
              onClick={() => setSortBy('status')}
              aria-hidden="true"
            >
              Status
            </div>
            <div
              className="py-1 px-4 hover:bg-[#F5F5F5]"
              onClick={() => setSortBy('message')}
              aria-hidden="true"
            >
              Alfabética
            </div>
            <div
              className="py-1 px-4 hover:bg-[#F5F5F5]"
              onClick={() => setSortBy('createdAt')}
              aria-hidden="true"
            >
              Data de criação
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSortDropdown;
