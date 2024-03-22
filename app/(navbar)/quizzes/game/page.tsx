'use client';

import QuizMap from '@/components/QuizMap';
import { getAllAnswers } from '@/utils/quiz-utils';
import { Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { quizzesData } from '@/data/quizzes-data';
import { Countries } from '@/models/countries';
import confetti from 'canvas-confetti';
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

export default function Game() {
  const theme = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { seconds, minutes, pause, reset } = useStopwatch({
    autoStart: true,
  });

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

  const [questions, setQuestions] = useState(shuffle(quiz.questions));
  const [clickedCountries, setClickedCountries] = useState<Countries[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const nextQuestion = () => {
      setClickedCountries([]);

      if (questions.length - 1 <= activeQuestionIndex) {
        if (score >= questions.length * 2) {
          confetti({
            particleCount: 150,
            spread: 90,
            startVelocity: 160,
            decay: 0.8,
            origin: { x: 0.5, y: 1 },
          });
        }
        setQuizCompleted(true);
        pause();
      } else {
        setActiveQuestionIndex(activeQuestionIndex + 1);
      }
    };

    const incorrectGuesses = clickedCountries.reduce(
      (acc, val) => (questions[activeQuestionIndex].answers.includes(val) ? acc : acc + 1),
      0
    );

    if (incorrectGuesses >= 3) {
      nextQuestion();
    }

    for (const answer of questions[activeQuestionIndex].answers) {
      if (!clickedCountries.includes(answer)) {
        return;
      }
    }

    setScore(score + (3 - incorrectGuesses));
    nextQuestion();
  }, [activeQuestionIndex, clickedCountries, pause, questions, score]);

  useEffect(() => {
    if (minutes >= 59) {
      pause();
    }
  }, [minutes, pause]);

  const onCountryClick = (country: Countries) => {
    if (!allAnswers.includes(country) || clickedCountries.includes(country)) {
      return;
    }

    setClickedCountries([...clickedCountries, country]);
  };

  const onRetryClick = () => {
    setQuizCompleted(false);
    setQuestions(shuffle(quiz.questions));
    setActiveQuestionIndex(0);
    setScore(0);
    setClickedCountries([]);
    reset();
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
          sx={{
            position: 'absolute',
            left: 180,
            top: theme.space.xl2,
          }}
        >
          {quiz.title}
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            position: 'absolute',
            right: theme.space.xl2,
            top: theme.space.xl2,
          }}
        >
          {`Score: ${score}/${questions.length * 3}`}
        </Typography>
        {quizCompleted ? (
          <QuizCompleteBox
            score={{ score, possibleScore: questions.length * 3 }}
            time={{ minutes, seconds }}
            onRetry={onRetryClick}
            onQuit={onQuitClick}
          />
        ) : (
          <QuizMap
            region={quiz.region}
            width={windowDimensions.width - 416}
            height={windowDimensions.height - 72}
            activeCountries={allAnswers}
            currentAnswers={questions[activeQuestionIndex].answers}
            clickedCountries={clickedCountries}
            onCountryClick={(country: Countries) => onCountryClick(country)}
          />
        )}
        <Typography
          variant="h4"
          component="h4"
          sx={{
            position: 'absolute',
            left: theme.space.xl2,
            bottom: theme.space.xl2,
          }}
        >{`${minutes.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:${seconds.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`}</Typography>
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
                style={{ width: '100%' }}
              />
            )}
          </Stack>
        )}
      </div>
    </Stack>
  );
}
