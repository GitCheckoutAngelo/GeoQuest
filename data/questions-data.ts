import { QuestionsModel } from '@/models/questions-model';

const imgurImagePrefix = `https://i.imgur.com/`;

// Add to this to add questions to the app

export const questionsData: QuestionsModel = {
  fundamentals: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  coverage: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['drive-side']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['license-plate']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['google-car']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [
      {
        id: 0,
        prompt: `Which country(s) is this car feature in?`,
        image: `${imgurImagePrefix}pQGOcbv.png`,
        hint: ``,
        answers: [`Kenya`],
        answerDescription: `This is the Kenyan Snorkel`,
        tips: [],
        warnings: [],
      },
      {
        id: 1,
        prompt: `Which country(s) is this car feature in?`,
        image: `${imgurImagePrefix}RliARst.png`,
        hint: ``,
        answers: [`Ghana`],
        answerDescription: `Duct tape on front right of Ghana google car`,
        tips: [],
        warnings: [],
      },
    ],
    asia: [],
    oceania: [],
  },
  ['follow-cars']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [
      {
        id: 0,
        prompt: `Which country(s) does this follow car show in?`,
        image: `${imgurImagePrefix}zTPe9k5.png`,
        hint: ``,
        answers: [`Tunisia`],
        answerDescription: `This military car follows the google car in Tunisia`,
        tips: [],
        warnings: [],
      },
      {
        id: 1,
        prompt: `Which country(s) does this follow car show in?`,
        image: `${imgurImagePrefix}MkMIt0q.png`,
        hint: ``,
        answers: [`Nigeria`],
        answerDescription: `This police car follows the google car in Nigeria`,
        tips: [],
        warnings: [],
      },
    ],
    asia: [],
    oceania: [],
  },
  ['camera-gen']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  bollards: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['road-markings']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  signs: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [
      {
        id: 0,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}Wis8nki.png`,
        hint: ``,
        answers: [
          `Albania`,
          `Montenegro`,
          `Italy`,
          `Malta`,
          `San Marino`,
          `Romania`,
          `Slovenia`,
          `Serbia`,
          `Turkey`,
        ],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 1,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}3jRma96.png`,
        hint: ``,
        answers: [`Andorra`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 2,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}XsZGmPT.png`,
        hint: ``,
        answers: [`Austria`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 3,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}5NdEJdw.png`,
        hint: ``,
        answers: [`Belgium`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 4,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}2VeukgT.png`,
        hint: ``,
        answers: [`Bulgaria`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 5,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}vnhPgdM.png`,
        hint: ``,
        answers: [`Croatia`, `Montenegro`, `North Macedonia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 6,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}hqh6B8T.png`,
        hint: ``,
        answers: [`Czechia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 7,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}AKImOwL.png`,
        hint: ``,
        answers: [`Denmark`, `Faeroe Is.`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 8,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}DUCbyGa.png`,
        hint: ``,
        answers: [`Denmark`, `Faeroe Is.`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 9,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}yLAo5c6.png`,
        hint: ``,
        answers: [`Estonia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 10,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}4jySiGd.png`,
        hint: ``,
        answers: [`Finland`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 11,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}oaWzxZC.png`,
        hint: ``,
        answers: [`France`, `Monaco`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 12,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}LVGHxDL.png`,
        hint: ``,
        answers: [`Germany`, `Luxembourg`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 13,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}5OdFxbk.png`,
        hint: ``,
        answers: [`Germany`, `Luxembourg`, `Slovakia`, `North Macedonia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 14,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}vK7v2XA.png`,
        hint: ``,
        answers: [`Greece`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 15,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}9U6RoAw.png`,
        hint: ``,
        answers: [`Hungary`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 16,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}TW4DePf.png`,
        hint: ``,
        answers: [`Iceland`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 17,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}JXN4LTS.png`,
        hint: ``,
        answers: [`Ireland`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 18,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}TQc6uz0.png`,
        hint: ``,
        answers: [`Ireland`, `United Kingdom`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 19,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}6Qpdr3r.png`,
        hint: ``,
        answers: [`Latvia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 20,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}bzX3Sqv.png`,
        hint: ``,
        answers: [`Lithuania`, `Russia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 21,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}Y3iLqYK.png`,
        hint: ``,
        answers: [`Netherlands`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 22,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}opNdfLj.png`,
        hint: ``,
        answers: [`Norway`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 23,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}Qlk37fa.png`,
        hint: ``,
        answers: [`Norway`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 24,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}HlOqPgj.png`,
        hint: ``,
        answers: [`Poland`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 25,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}RBoQST1.png`,
        hint: ``,
        answers: [`Portugal`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 26,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}GIcsvnz.png`,
        hint: ``,
        answers: [`Slovakia`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 27,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}xCDbswg.png`,
        hint: ``,
        answers: [`Spain`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 28,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}KlwoWL9.png`,
        hint: ``,
        answers: [`Spain`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 29,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}3wkhLfB.png`,
        hint: ``,
        answers: [`Sweden`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 30,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}gYJCyKK.png`,
        hint: ``,
        answers: [`Switzerland`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
      {
        id: 31,
        prompt: `Which country(s) is this sign found in?`,
        image: `${imgurImagePrefix}df6c0Ik.png`,
        hint: ``,
        answers: [`Ukraine`],
        answerDescription: ``,
        tips: [],
        warnings: [],
      },
    ],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['guard-rail']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  poles: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  language: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['street-suffix']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['phone-no']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
  ['other-tips']: {
    ['north-america']: [],
    ['south-america']: [],
    europe: [],
    africa: [],
    asia: [],
    oceania: [],
  },
};
