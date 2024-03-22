import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import FullDifficultyDot from './svg-components/FullDifficultyDot';
import ZeroDifficultyDot from './svg-components/ZeroDifficultyDot';
import HalfDifficultyDot from './svg-components/HalfDifficultyDot';

interface DifficultyCirclesProps {
  difficulty: number;
  size?: 'medium' | 'large';
}

export default function DifficultyCircles({ difficulty, size = 'medium' }: DifficultyCirclesProps) {
  const theme = useTheme();

  let difficultyColour = theme.palette['picton-blue-6'].main;

  if (difficulty > 41) {
    difficulty = difficulty % 42;
  }

  if (difficulty > 34) {
    difficultyColour = theme.palette['indian-red-6'].main;
  } else if (difficulty > 27) {
    difficultyColour = theme.palette['amethyst-6'].main;
  } else if (difficulty > 20) {
    difficultyColour = theme.palette['crayola-blue-6'].main;
  } else if (difficulty > 13) {
    difficultyColour = theme.palette['school-bus-yellow-6'].main;
  } else if (difficulty > 6) {
    difficultyColour = theme.palette['sgbus-green-6'].main;
  }

  if (difficulty % 7 == 0) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 1) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <HalfDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 2) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 3) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <HalfDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 4) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <ZeroDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 5) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <HalfDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  if (difficulty % 7 == 6) {
    return (
      <Stack direction="row" spacing={theme.spacing(1)}>
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <FullDifficultyDot colour={difficultyColour} size={size} />
        <FullDifficultyDot colour={difficultyColour} size={size} />
      </Stack>
    );
  }

  return <div />;
}
