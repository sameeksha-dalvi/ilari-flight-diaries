import express,{type Response} from 'express';
import diaryService from '../services/diaryService.ts';
import { NonSensitiveDiaryEntry } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
    res.send(diaryService.getNonSensitiveEntries());
});

router.post('/', (_req, res) => {
    res.send('add a new diary');
});

export default router;