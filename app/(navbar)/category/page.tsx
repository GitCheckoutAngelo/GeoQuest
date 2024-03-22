'use client';

import { questionsData } from '@/data/questions-data';
import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/material/styles';
import { transformQueryParam } from '@/utils/utils';

export default function Category() {
  const searchParams = useSearchParams();
  const region = searchParams.get('region');
  const theme = useTheme();

  if (!region) {
    return <Link href="/category" />;
  }

  return (
    <Stack
      direction="column"
      height={'100%'}
      rowGap={1}
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
          paddingLeft: '5rem',
        }}
      >
        <Typography variant="h3" component="h1" fontFamily={theme.fonts.viga}>
          {transformQueryParam(region)}
        </Typography>
        <CircleIcon sx={{ color: theme.palette['indian-red-6'].main }} />
        <Typography variant="h4" component="h2">
          Select Category
        </Typography>
      </Stack>

      <Stack
        direction="row"
        columnGap={1}
        sx={{
          flexWrap: 'wrap',
          margin: '1rem',
          marginLeft: '5rem',
          marginRight: '5rem',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        {Object.keys(questionsData).map((category) => (
          <Stack direction="row" key={category}>
            <Link
              href={{
                pathname: '/quizzes',
                query: { region: searchParams.get('region'), category: category },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  minWidth: '190px',
                  minHeight: '70px',
                  margin: '0.5rem',
                  borderRadius: theme.radius.l,
                  backgroundColor: 'white',
                }}
              >
                {transformQueryParam(category)}
              </Button>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
