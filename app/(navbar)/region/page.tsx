'use client';
import { transformQueryParam } from '@/utils/utils';
import { Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Region() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const theme = useTheme();

  return (
    <Stack direction="column" height={'100%'} rowGap={1}>
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
          {category ? transformQueryParam(category) : ''}
        </Typography>
        <CircleIcon sx={{ color: theme.palette['indian-red-6'].main }} />
        <Typography variant="h4" component="h2">
          Select Region
        </Typography>
      </Stack>
      <Stack direction="row" spacing={'24px'} alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={'24px'}>
          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'north-america', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#3278E2',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/NorthAmerica.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              North America
            </Button>
          </Link>

          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'europe', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#DC5050',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/Europe.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              Europe
            </Button>
          </Link>

          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'asia', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#F9DB39',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/Asia.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              Asia
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={'24px'}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: '24px' }}
      >
        <Stack direction="row" spacing={'24px'}>
          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'south-america', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#F59746',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/SouthAmerica.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              South America
            </Button>
          </Link>

          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'africa', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#77D13A',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/Africa.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              Africa
            </Button>
          </Link>

          <Link
            href={{
              pathname: '/quizzes',
              query: { region: 'oceania', category: category },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '570px',
                height: '188px',
                borderRadius: '59px',
                backgroundColor: '#4BB8F2',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
                fontFamily: 'Viga',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 30,
                lineHeight: '160%',
                textAlign: 'center',
                letterSpacing: '0.15px',
                color: '#FFFFFF',
                backgroundImage: 'url("/images/oceania.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8,
              }}
            >
              Oceania
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={'24px'} alignItems="center" justifyContent="center">
        <Link
          href={{
            pathname: '/quizzes',
            query: { region: 'world', category: category },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '1768px',
              height: '200px',
              borderRadius: '59px',
              backgroundColor: '#AF6AD5',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
              fontFamily: 'Viga',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 30,
              lineHeight: '160%',
              textAlign: 'center',
              letterSpacing: '0.15px',
              color: '#FFFFFF',
              marginTop: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'url("/images/FullWorld.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
            }}
          >
            Full World
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
