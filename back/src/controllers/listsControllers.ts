import { StatusCodes } from 'http-status-codes';
import listsServices from '../services/listsServices';
import { IExpressController } from '../types/express';

const getLists: IExpressController = async (req, res, next) => {
  try {
    // Get user input and auth
    const { userId } = req.params;
    // const token = req.headers.authorization;
    const result = await listsServices.getLists(userId);

    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    // Catches error and send it to the error middle ware
    next(err);
  }
};

const addList: IExpressController = async (req, res, next) => {
  try {
    // Get user input and auth
    const { userId } = req.params;
    const { title, listId } = req.body;
    const list = { title, listId, tasks: [] };

    // const token = req.headers.authorization;

    const result = await listsServices.addList(userId, list);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    // Catches error and send it to the error middle ware
    next(err);
  }
};

const addTask: IExpressController = async (req, res, next) => {
  try {
    // Get user input and auth
    const { userId } = req.params;
    const { message, createdAt, listId } = req.body;
    const task = { message, createdAt, status: 'pending' };

    // const token = req.headers.authorization;
    console.log(userId, listId, task);

    const result = await listsServices.addTask(userId, listId, task);
    console.log(result);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    // Catches error and send it to the error middle ware
    next(err);
  }
};

const deleteTask: IExpressController = async (req, res, next) => {
  try {
    // Get user input and auth
    const { userId } = req.params;
    const { createdAt, listId } = req.body;

    // const token = req.headers.authorization;
    console.log(createdAt, listId);

    const result = await listsServices.deleteTask(userId, listId, createdAt);
    console.log(result);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    // Catches error and send it to the error middle ware
    next(err);
  }
};

const updateTaskStatus: IExpressController = async (req, res, next) => {
  try {
    // Get user input and auth
    const { userId } = req.params;
    const { createdAt, listId, status } = req.body;

    console.log(userId, listId, createdAt, status);

    const result = await listsServices.updateTaskStatus(
      userId,
      listId,
      createdAt,
      status
    );
    console.log(result);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    // Catches error and send it to the error middle ware
    next(err);
  }
};

export default { getLists, addList, addTask, deleteTask, updateTaskStatus };
