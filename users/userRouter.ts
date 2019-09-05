import * as express from 'express';

export const router = express.Router();

const validateUserId = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {

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

router.get('/', (req, res) => {
  res.end();
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

export default router;
