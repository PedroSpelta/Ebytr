import express from 'express';
import listsRouter from './listsRouter';

const router = express.Router()

// router.use('/user', userRouter);
router.use('/lists', listsRouter);


export default router;