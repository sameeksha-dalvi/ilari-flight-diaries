import type { NewDiaryEntry } from './types.ts';

const parseNewDiaryEntry = (object: unknown): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        weather: 'cloudy', // fake the return value
        visibility: 'great',
        date: '2026-1-1',
        comment: 'fake news'
    };

    return newEntry;
};

export default parseNewDiaryEntry;