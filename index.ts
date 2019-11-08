import * as dotenv from 'dotenv';
import * as express from 'express';

dotenv.config();

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

const port = process.env.PORT;

server.listen(port, () => console.log(`listening on port ${port}`));
