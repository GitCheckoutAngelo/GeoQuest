import { Categories } from './categories';
import { Question } from './question-model';
import { Regions } from './regions';

export interface Quiz {
  id: number;
  region: Regions;
  category: Categories;
  subcategory: string;
  title: string;
  difficulty: number;
  questions: Question[];
}
