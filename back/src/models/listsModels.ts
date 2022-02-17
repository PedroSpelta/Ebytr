import { IList, ITask } from '../types/list';
import { connectToDatabase } from './connection';

const findById = async (userId: string) => {
  const conn = await connectToDatabase();
  const coll = await conn.collection('lists');
  const response = await coll.findOne({ userId });
  return response;
};

const addListToId = async (userId: string, list: IList) => {
  const conn = await connectToDatabase();
  const coll = await conn.collection('lists');
  console.log('teste');

  const response = await coll.updateOne({ userId }, { $push: { lists: list } });
  return response;
};

const addTaskToList = async (userId: string, listId: number, task: ITask) => {
  const conn = await connectToDatabase();
  const coll = await conn.collection('lists');

  const response = await coll.updateOne(
    { userId, 'lists.listId': listId },
    { $push: { 'lists.$.tasks': task } }
  );
  return response;
};

const deleteTaskWithCreatedAt = async (
  userId: string,
  listId: string,
  createdAt: string
) => {
  const conn = await connectToDatabase();
  const coll = await conn.collection('lists');

  const response = await coll.updateOne(
    { userId, 'lists.listId': listId },
    { $pull: { 'lists.$.tasks': { createdAt } } }
  );
  return response;
};

const updateTaskStatusByCreatedAt = async (
  userId: string,
  listId: string,
  createdAt: string,
  status: string
) => {
  const conn = await connectToDatabase();
  const coll = await conn.collection('lists');

  const response = await coll.updateOne(
    { userId },
    { $set: { 'lists.$[l].tasks.$[t].status': status } },
    { arrayFilters: [{ 'l.listId': listId }, { 't.createdAt': createdAt }] }
  );
  return response;
};

export default {
  findById,
  addListToId,
  addTaskToList,
  deleteTaskWithCreatedAt,
  updateTaskStatusByCreatedAt,
};
