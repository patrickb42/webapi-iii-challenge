import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

const validateUserId = (req, res, next) => {

};

const validateUser = (req, res, next) => {

};

const validatePost = (req, res, next) => {

};

export default router;
