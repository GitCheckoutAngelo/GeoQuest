import { questionsData } from '@/data/questions-data';
import { Categories } from '@/models/categories';
import { Countries } from '@/models/countries';
import { Question } from '@/models/question-model';
import { Regions } from '@/models/regions';

export const questionModelToAnswerKeys = function (questions: Question[]): Partial<{
  [key in Countries]: string[];
}> {
  return Object.values(questions).reduce(
    (accumulator: { [key: string]: string[] }, currentValue) => {
      for (const answer of currentValue.answers) {
        if (!accumulator.hasOwnProperty(answer)) {
          accumulator[answer] = [];
        }
        accumulator[answer].push(currentValue.image);
      }
      return accumulator;
    },
    {}
  );
};

export const getAllAnswers = function (questions: Question[]): Countries[] {
  return Object.keys(questionModelToAnswerKeys(questions)) as Countries[];
};

export const getAllQuestionsFromCategoryAndRegion = function (
  category: Categories,
  region: Regions
): Question[] {
  const questionsArray = questionsData?.[category]?.[region];
  if (!questionsArray) {
    return [];
  }

  return questionsArray;
};
