import { Dispatch, SetStateAction } from 'react';

export interface IList {
  listId: number;
  title: string;
  tasks: ITasks;
}

export type ILists = Array<IList>;

export interface ITaskContext {
  lists: ILists;
  setLists: Dispatch<SetStateAction<ILists>>;
  selectedTask: number;
  setSelectedTask: Dispatch<SetStateAction<number>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  isCrescent: boolean;
  setIsCrescent: Dispatch<SetStateAction<boolean>>;
  // tasks: ITasks;
  // setTasks: Dispatch<SetStateAction<ITasks>>;
}

export interface ITask {
  [key: string]: string;
  createdAt: string;
  message: string;
  status: string;
}

export type ITasks = Array<ITask>;

export interface ITaskCard {
  task: ITask;
}
