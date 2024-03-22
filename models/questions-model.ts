import { Categories } from './categories';
import { Question } from './question-model';
import { Regions } from './regions';

export type QuestionsModel = {
  [key in Categories]: { [key in Regions]: Question[] };
};
