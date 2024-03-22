'use client';

import QuizMap from '@/components/QuizMap';
import { getAllAnswers, questionModelToAnswerKeys } from '@/utils/quiz-utils';
import { Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { quizzesData } from '@/data/quizzes-data';
import { useSearchParams } from 'next/navigation';
import { Countries } from '@/models/countries';
import Link from 'next/link';
import Chat from '@/components/chat/Chat';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Study() {
  const theme = useTheme();
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

  const [clickedCountries, setClickedCountries] = useState<Countries[]>([]);

  const onCountryClick = (country: Countries) => {
    if (!allAnswers.includes(country)) {
      return;
    }

    if (clickedCountries.includes(country)) {
      const countryRemoved = clickedCountries.filter((val) => val !== country);
      setClickedCountries([...countryRemoved]);
    } else {
      setClickedCountries([...clickedCountries, country]);
    }
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
          style={{
            position: 'absolute',
            left: 180,
            top: theme.space.xl2,
          }}
        >
          {quiz.title}
        </Typography>
        <QuizMap
          region={quiz.region}
          width={windowDimensions.width - 416}
          height={windowDimensions.height - 72}
          activeCountries={allAnswers}
          clickedCountries={clickedCountries}
          onCountryClick={(country: Countries) => onCountryClick(country)}
          tooltipContent={allAnswers.reduce((acc, val) => {
            const imageArr = answersToImages[val];
            return {
              ...acc,
              [val]: clickedCountries.includes(val) ? (
                <>
                  <Stack direction="row" spacing={1}>
                    {imageArr &&
                      imageArr.map((image: string) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={image} src={image} alt="pedestrian sign" style={{ width: 150 }} />
                      ))}
                  </Stack>
                </>
              ) : undefined,
            };
          }, {})}
        />
      </div>

      <div
        style={{
          width: `${416}px`,
          height: `${windowDimensions.height - 72}px`,
        }}
      >
        <Chat />
      </div>
    </Stack>
  );
}
