import * as express from 'express';

import {
  get,
  getById,
  getUserPosts,
  insert,
  update,
  remove,
} from './userDb';

export const router = express.Router();

interface User {
  id: number,
  name: string,
}

interface ValidatedUserIdRequest extends express.Request {
  user: User,
}

const validateUserId = async (
  req: ValidatedUserIdRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;

  const result = await getById(id);
  if (result === undefined) return res.status(400).send({ message: `invalid user id of ${id}` });
  req.user = result;
  next();
};

const validateUser = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {

};

const validatePost = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {

};

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
  const result = await get();
  res.status(200).json(result);
});

router.get('/:id', validateUserId, (req: ValidatedUserIdRequest, res) => {
  res.status(200).json(req.user);
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

export default router;
