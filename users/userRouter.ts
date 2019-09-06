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
  if (result === undefined) return res.status(400).json({ message: `invalid user id of ${id}` });
  req.user = result;
  next();
  return true;
};

const validateUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { body } = req;

  if (body === undefined || body.name === undefined) {
    return res.status(400).json({
      message: (body === undefined)
        ? 'missing post data'
        : 'missing required text field',
    });
  }
  next();
  return true;
};

const validatePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  next();
  return true;
};

router.post('/', validateUser, async (req, res) => {
  const result = await insert(req.body);
  return (result === undefined)
    ? res.status(500).json({ message: 'error adding user' })
    : res.status(200).json(result);
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
  const result = await get();
  if (result === undefined) return res.status(500).json({ message: 'unable to get users' });
  return res.status(200).json(result);
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
