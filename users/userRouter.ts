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
  return next();
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
  return next();
};

const validatePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { body } = req;

  if (body === undefined || body.text === undefined) {
    return res.status(400).json({
      message: (body === undefined)
        ? 'missing post data'
        : 'missing required text field',
    });
  }
  return next();
};

router.post('/', validateUser, async (req, res) => {
  const result = await insert(req.body);
  return (result === undefined)
    ? res.status(500).json({ message: 'error adding user' })
    : res.status(200).json(result);
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {

});

router.get('/', async (req, res) => {
  const result = await get();
  if (result === undefined) return res.status(500).json({ message: 'unable to get users' });
  return res.status(200).json(result);
});

const getUserById = async (
  req: ValidatedUserIdRequest,
  res: express.Response,
) => res.status(200).json(req.user);

router.get('/:id', validateUserId, getUserById);

router.get('/:id/posts', validateUserId, async (req, res) => {

});

router.delete('/:id', validateUserId, async (req: ValidatedUserIdRequest, res) => {
  const result = await remove(req.params.id);

  return (result === undefined || result < 1)
    ? res.status(500).json({ message: `error deleting id ${req.params.id}` })
    : res.status(200).json(req.user);
});

const putUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const result = await update(req.params.id, req.body);
  return (result === undefined || result < 1)
    ? res.status(500).json({ message: 'error updating user' })
    : next();
};

router.put('/:id', validateUserId, validateUser, putUser, validateUserId, getUserById);

export default router;
