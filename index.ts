import * as express from 'express';

import { postRouter } from './posts';
import { userRouter } from './users';

const server = express();

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const date = new Date(Date.now());
  console.log(`${req.method} ${req.url} ${date.toISOString()}`);
  next();
};

server.use(express.json());
server.use(logger);
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.listen(5000, () => console.log('listening on port 5000'));
