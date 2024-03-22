import { Button, Stack, Typography, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import DifficultyCircles from './DifficultyCircles';

interface QuizSelectBoxProps {
  title: string;
  difficulty: number;
  quizId: number;
}

export default function QuizSelectBox(props: QuizSelectBoxProps) {
  const { title, difficulty, quizId } = props;
  const theme = useTheme();
  return (
    <Stack border={1} borderRadius={theme.radius.s} padding={theme.space.l} spacing={theme.space.s}>
      <Stack direction="row" spacing={theme.space.l}>
        <Typography variant="h6" component="h5" alignSelf={'start'}>
          {title}
        </Typography>
        <MoreVertIcon sx={{ cursor: 'pointer' }} />
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={theme.space.s}>
        <Link
          href={{
            pathname: '/quizzes/study',
            query: { quiz: quizId },
          }}
        >
          <Button sx={{ borderRadius: theme.radius.l }} variant="outlined">
            Study
          </Button>
        </Link>
        <Link
          href={{
            pathname: '/quizzes/practice',
            query: { quiz: quizId },
          }}
        >
          <Button sx={{ borderRadius: theme.radius.l }} variant="outlined">
            Practice
          </Button>
        </Link>
        <Link
          href={{
            pathname: '/quizzes/game',
            query: { quiz: quizId },
          }}
        >
          <Button sx={{ borderRadius: theme.radius.l }} variant="outlined">
            Game
          </Button>
        </Link>
      </Stack>
      <Stack direction="row" justifyContent="end" spacing={theme.space.s}>
        <Typography variant="body2" component="h5" alignSelf={'end'}>
          Difficulty:
        </Typography>
        <DifficultyCircles difficulty={difficulty + quizId * 6} />
      </Stack>
    </Stack>
  );
}
