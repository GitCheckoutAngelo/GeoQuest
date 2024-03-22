'use client'; // Error components must be Client Components

import { Stack, Typography, useTheme } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const theme = useTheme();
  return (
    <Stack alignItems="center" padding={theme.space.l}>
      <Typography variant="h2" component="h2">
        {error.message}
      </Typography>
    </Stack>
  );
}
