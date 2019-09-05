import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

const validatePostId = (req, res, next) => {

};

export default router;
