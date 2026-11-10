import { Visibility, Weather, type NewDiaryEntry } from './types.ts';
import { z } from 'zod';

const NewEntrySchema = z.object({
    weather: z.enum(Weather),
    visibility: z.enum(Visibility),
    date: z.iso.date(),
    comment: z.string().optional()
});

const parseNewDiaryEntry = (object: unknown): NewDiaryEntry => {
    return NewEntrySchema.parse(object);

};

export default parseNewDiaryEntry;