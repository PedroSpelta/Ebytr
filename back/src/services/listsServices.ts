import listsModels from '../models/listsModels';
import { IList, ITask } from '../types/list';

const getLists = async (userId: string) => {
  const result = await listsModels.findById(userId);
  return result;
};

const addList = async (userId: string, list: IList) => {
  const result = await listsModels.addListToId(userId, list);
  return result;
};

const addTask = async (userId: string, listId: number, task: ITask) => {
  const result = await listsModels.addTaskToList(userId, listId, task);
  return result;
};

const deleteTask = async (
  userId: string,
  listId: string,
  createdAt: string
) => {
  const result = await listsModels.deleteTaskWithCreatedAt(
    userId,
    listId,
    createdAt
  );
  return result;
};

const updateTaskStatus = async (
  userId: string,
  listId: string,
  createdAt: string,
  status: string
) => {
  const result = await listsModels.updateTaskStatusByCreatedAt(
    userId,
    listId,
    createdAt,
    status
  );
  return result;
};

export default { getLists, addList, addTask, deleteTask, updateTaskStatus };
