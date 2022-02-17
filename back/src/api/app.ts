import express from 'express';
import cors from 'cors';

import errorMiddleware from '../middlewares/errorMiddleware';
import router from '../routes';

const app = express();

app.use(cors())
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('Hello');
});

app.use(router);
app.use(errorMiddleware);

export default app;
