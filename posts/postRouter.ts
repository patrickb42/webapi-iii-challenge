import * as express from 'express';

export const router = express.Router();

// custom middleware

const validatePostId = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {

};

router.get('/', validatePostId, (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

export default router;
