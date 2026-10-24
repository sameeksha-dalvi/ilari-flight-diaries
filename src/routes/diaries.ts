import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching all diaries!');
});

router.post('/', (req, res) => {
    res.send('Saving a diary!');
});

export default router;