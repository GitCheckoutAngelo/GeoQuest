'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSearchParams } from 'next/navigation';
import QuizSelectBox from '@/components/QuizSelectBox';
import { useState } from 'react';
import { quizzesData } from '@/data/quizzes-data';
import { Quiz } from '@/models/quiz-model';
import Link from 'next/link';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import { transformQueryParam } from '@/utils/utils';

export default function Quizzes() {
  const searchParams = useSearchParams();
  const theme = useTheme();

  const category = searchParams.get('category');
  const region = searchParams.get('region');
  if (!category || !region) {
    throw new Error('You are missing either the region or category parameter');
  }

  const [quizzes] = useState<Quiz[]>(
    quizzesData.filter((quizzes) => quizzes.category === category && quizzes.region === region)
  );

  return (
    <Stack
      spacing={theme.space.l}
      paddingLeft={theme.space.xl5}
      paddingRight={theme.space.xl5}
      height="100%"
      sx={{
        backgroundImage: 'url(./categoryBackground.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right bottom',
      }}
    >
      <Stack
        direction="row"
        spacing={theme.space.l}
        sx={{
          alignItems: 'center',
          padding: '2rem',
          paddingLeft: 0,
        }}
      >
        <Typography variant="h3" component="h1" fontFamily={theme.fonts.viga}>
          {`${transformQueryParam(category)} In ${transformQueryParam(region)}`}
        </Typography>
        <CircleIcon sx={{ color: theme.palette['indian-red-6'].main }} />
        <Typography variant="h4" component="h2">
          Select Quiz
        </Typography>
        <Box flexGrow={1} />
        <Link
          href={{
            pathname: '/addquiz',
            query: { category: category, region: region },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ maxWidth: '3rem', maxHeight: '3rem', minWidth: '3rem', minHeight: '3rem' }}
            sx={{
              backgroundColor: theme.palette['indian-red-6'].main,
              borderRadius: '50%',
              height: '3rem',
              width: '3rem',
              boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.25)',
              '&:hover': {
                backgroundColor: theme.palette['indian-red-7'].main,
              },
            }}
          >
            <AddIcon />
          </Button>
        </Link>
      </Stack>

      {quizzes
        .filter((q1) => q1.id === quizzes.find((q2) => q2.subcategory === q1.subcategory)?.id)
        .map((q) => (
          <Accordion key={q.id} sx={{ width: '100%', border: 1, boxShadow: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${q.id}-content`}
              id={`panel${q.id}-header`}
            >
              <Typography variant="h5" component="h4">
                {q.subcategory}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={theme.space.l} useFlexGap flexWrap="wrap">
                {quizzes
                  .filter((quizzes) => quizzes.subcategory === q.subcategory)
                  .map((quiz) => (
                    <QuizSelectBox
                      key={quiz.id}
                      title={quiz.title}
                      difficulty={quiz.difficulty}
                      quizId={quiz.id}
                    />
                  ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
    </Stack>
  );
}
