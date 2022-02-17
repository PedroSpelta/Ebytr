import axios from 'axios';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { io } from 'socket.io-client';
import {
  IList, ILists, ITaskContext, ITasks,
} from '../types/context';
import socket from '../utils/socketClient';

const TaskContext = createContext<ITaskContext>(null!);

const defaultLists: ILists = [];

export const TaskContextWrapper: FC = ({ children }) => {
  const [lists, setLists] = useState<ILists>(defaultLists);
  const [selectedTask, setSelectedTask] = useState<number>(0);
  const [isCrescent, setIsCrescent] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>('createdAt');
  // const [tasks, setTasks] = useState<ITasks>(defaultTasks);

  useEffect(() => {
    const test = socket;
    const getLists = async () => {
      const response = await axios.get('http://localhost:5000/lists/1234');
      const listResponse = response.data.lists;
      setLists(listResponse);
    };
    test.on('change', () => {
      getLists();
    });
    getLists();
  }, []);

  const value = useMemo(
    () => ({
      lists,
      setLists,
      selectedTask,
      setSelectedTask,
      sortBy,
      setSortBy,
      isCrescent,
      setIsCrescent,
      // tasks,
      // setTasks,
    }),
    [lists, selectedTask, sortBy, isCrescent],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export function useTaskContext() {
  return useContext(TaskContext);
}
