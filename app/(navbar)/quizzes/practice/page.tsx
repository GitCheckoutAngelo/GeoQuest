'use client';

import QuizMap from '@/components/QuizMap';
import { getAllAnswers, questionModelToAnswerKeys } from '@/utils/quiz-utils';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { quizzesData } from '@/data/quizzes-data';
import { useRouter, useSearchParams } from 'next/navigation';
import { Countries } from '@/models/countries';
import { shuffle } from 'lodash';
import Link from 'next/link';
import Chat from '@/components/chat/Chat';
import QuizCompleteBox from '@/components/QuizCompleteBox';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Practice() {
  const theme = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const quiz = quizzesData.find((q) => q.id === Number(searchParams.get('quiz')));
  if (!quiz) {
    throw new Error('That Quiz Does Not Exist');
  }
  const allAnswers = getAllAnswers(quiz.questions);
  const answersToImages = questionModelToAnswerKeys(quiz.questions);

  const [questions, setQuestions] = useState(shuffle(quiz.questions));
  const [clickedCountries, setClickedCountries] = useState<Countries[]>([]);
  const [hoveredCountry, setHoveredCountry] = useState<Countries | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    for (const answer of questions[activeQuestionIndex].answers) {
      if (!clickedCountries.includes(answer)) {
        return;
      }
    }

    setQuestionCompleted(true);
  }, [activeQuestionIndex, answersToImages, clickedCountries, questions]);

  const onCountryClick = (country: Countries) => {
    if (!allAnswers.includes(country) || clickedCountries.includes(country)) {
      return;
    }
    if (!questions[activeQuestionIndex].answers.includes(country)) {
      setHoveredCountry(country);
    }
    setClickedCountries([...clickedCountries, country]);
  };

  const onCountryHover = (country: Countries | null) => {
    setHoveredCountry(country);
  };

  const nextQuestion = () => {
    setClickedCountries([]);
    setQuestionCompleted(false);

    if (questions.length - 1 <= activeQuestionIndex) {
      setQuizCompleted(true);
    } else {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const onRetryClick = () => {
    setQuizCompleted(false);
    setQuestions(shuffle(quiz.questions));
    setActiveQuestionIndex(0);
    setClickedCountries([]);
  };

  const onQuitClick = () => {
    router.push(`/quizzes?region=${quiz.region}&category=${quiz.category}`);
  };

  return (
    <Stack minHeight="100%" alignItems="center" direction="row" sx={{ overflow: 'hidden' }}>
      <div
        style={{
          position: 'relative',
          width: `${windowDimensions.width - 416}px`,
          height: `${windowDimensions.height - 72}px`,
          pointerEvents: questionCompleted ? 'none' : 'auto',
        }}
      >
        <Link
          href={{
            pathname: '/quizzes',
            query: { category: quiz.category, region: quiz.region },
          }}
        >
          <Image
            src={'/leave-quiz.svg'}
            alt="Leave quiz button"
            width={93}
            height={34}
            style={{
              position: 'absolute',
              left: theme.space.xl2,
              top: theme.space.xl2,
              cursor: 'pointer',
            }}
            onClick={() => history.back()}
          />
        </Link>
        <Typography
          variant="h3"
          component="h2"
          style={{
            position: 'absolute',
            left: 180,
            top: theme.space.xl2,
          }}
        >
          {quiz.title}
        </Typography>
        {quizCompleted ? (
          <QuizCompleteBox onRetry={onRetryClick} onQuit={onQuitClick} />
        ) : (
          <QuizMap
            region={quiz.region}
            width={windowDimensions.width - 416}
            height={windowDimensions.height - 72}
            activeCountries={allAnswers}
            currentAnswers={questions[activeQuestionIndex].answers}
            clickedCountries={clickedCountries}
            onCountryClick={(country: Countries) => onCountryClick(country)}
            onCountryHover={(country: Countries | null) => onCountryHover(country)}
            tooltipContent={allAnswers.reduce((acc, val) => {
              const imageArr = hoveredCountry ? answersToImages[hoveredCountry] : [];
              return {
                ...acc,
                [val]:
                  hoveredCountry === val ? (
                    <>
                      <Stack direction="row" spacing={1}>
                        {imageArr &&
                          imageArr.map((image: string) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={image}
                              src={image}
                              alt="pedestrian sign"
                              style={{ width: 150 }}
                            />
                          ))}
                      </Stack>
                    </>
                  ) : undefined,
              };
            }, {})}
          />
        )}
      </div>

      <div
        style={{
          width: `${416}px`,
          height: `${windowDimensions.height - 72}px`,
        }}
      >
        {quizCompleted ? (
          <Chat />
        ) : (
          <Stack
            alignItems="center"
            spacing={theme.space.l}
            useFlexGap
            sx={{ padding: theme.space.l }}
          >
            <Typography variant="h4" component="h3" textAlign="center">
              {questions[activeQuestionIndex].prompt}
            </Typography>
            {questions[activeQuestionIndex].image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={questions[activeQuestionIndex].image}
                alt="pedestrian sign"
                style={{ width: '100%', borderRadius: theme.radius.s }}
              />
            )}
            {questionCompleted && (
              <Typography variant="h5" component="h5" textAlign="center">
                Done, The Answers Were: {questions[activeQuestionIndex].answers.join(', ')}
              </Typography>
            )}
            {questionCompleted && (
              <Button variant="contained" onClick={nextQuestion}>
                Next Question
              </Button>
            )}
            {!questionCompleted && (
              <Button variant="outlined" endIcon={<SkipNextIcon />} onClick={nextQuestion}>
                Skip
              </Button>
            )}
          </Stack>
        )}
      </div>
    </Stack>
  );
}
