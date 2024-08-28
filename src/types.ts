import { z } from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NewEntrySchema } from './utils';

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export type NewDiaryEntry = z.infer<typeof NewEntrySchema>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
