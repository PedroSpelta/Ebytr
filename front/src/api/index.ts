import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const apiAddList = async (listId: string, title: string) => {
  const response = axios.put('http://localhost:5000/lists/1234', {
    title,
    listId,
  });
  return response;
};

export const apiAddTaskToList = async (
  userId: string,
  listId: string,
  createdAt: string,
  message: string,
) => {
  console.log(userId, listId, message);
  const url = `${baseUrl}/lists/add-task/${userId}`;
  const response = await axios.put(url, { createdAt, message, listId });
};

export const apiDeleteTaskFromList = async (
  userId: string,
  listId: string,
  createdAt: string,
) => {
  const url = `${baseUrl}/lists/delete-task/${userId}`;
  const response = await axios.delete(url, { data: { createdAt, listId } });
  console.log(response.data);
};

export const apiUpdateTaskStatus = async (
  userId: string,
  listId: string,
  createdAt: string,
  status:string,
) => {
  console.log(userId, listId, createdAt, status);
  const url = `${baseUrl}/lists/status/${userId}`;
  const response = await axios.put(url, { createdAt, listId, status });
  console.log(response.data);
};

export const a = () => {};
