import { Countries } from './countries';

export interface Question {
  id: number;
  prompt: string;
  image: string;
  hint: string;
  answers: Countries[];
  answerDescription: string;
  tips: string[];
  warnings: string[];
}
