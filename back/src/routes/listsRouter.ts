import { Router } from 'express';
import listsControllers from '../controllers/listsControllers';

const listsRouter = Router();

listsRouter.get('/:userId', listsControllers.getLists);
listsRouter.put('/:userId', listsControllers.addList);
listsRouter.put('/add-task/:userId', listsControllers.addTask);
listsRouter.delete('/delete-task/:userId', listsControllers.deleteTask);
listsRouter.put('/status/:userId', listsControllers.updateTaskStatus);

export default listsRouter;
