'use client';

import { Button, Stack, Typography, useTheme } from '@mui/material';

interface QuizCompleteBoxProps {
  score?: { score: number; possibleScore?: number };
  time?: { minutes: number; seconds: number };
  onRetry: () => void;
  onQuit: () => void;
}

export default function QuizCompleteBox(props: QuizCompleteBoxProps) {
  const { score, time, onRetry, onQuit } = props;
  const theme = useTheme();
  return (
    <Stack
      alignItems="center"
      spacing={theme.space.m}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'white',
        border: '2px solid #000',
        borderRadius: theme.radius.l,
        boxShadow: 24,
        p: theme.space.xl2,
      }}
    >
      <Typography id="modal-modal-title" variant="h5" component="h3">
        Quiz Over
      </Typography>
      {score && (
        <Typography variant="h6" component="h6">
          {`Score: ${score.score}/${score.possibleScore}`}
        </Typography>
      )}
      {time && (
        <Typography variant="h6" component="h6">{`Time: ${time.minutes.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:${time.seconds.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}`}</Typography>
      )}
      <Stack direction="row" spacing={theme.space.m}>
        <Button variant="outlined" onClick={() => onQuit()}>
          Quit
        </Button>
        <Button variant="contained" onClick={() => onRetry()}>
          Retry
        </Button>
      </Stack>
    </Stack>
  );
}
