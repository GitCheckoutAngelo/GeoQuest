'use client';
import { Box, Button, Stack, TextField, Autocomplete, Typography, useTheme } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import DifficultyCircles from '@/components/DifficultyCircles';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CloudUpload } from '@mui/icons-material';
import { transformQueryParam } from '@/utils/utils';
import { COUNTRY_LIST } from '@/data/country-list';

interface Question {
  questionName: string;
  country: string[];
  image: File | null;
}

export default function AddQuiz() {
  const searchParams = useSearchParams();
  const theme = useTheme();

  const category = searchParams.get('category');
  const region = searchParams.get('region');
  if (!category || !region) {
    throw new Error('You are missing either the region or category parameter');
  }

  const [quizName, setQuizName] = useState('Untitled Quiz');
  const [difficulty, setDifficulty] = useState(0);

  const [questions, setQuestions] = useState<Question[]>([
    { questionName: 'Untitled Question', country: [], image: null },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { questionName: 'Untitled Question', country: [], image: null }]);
  };

  const increaseDifficulty = () => {
    if (difficulty < 41) {
      setDifficulty(difficulty + 1);
    }
  };

  const decreaseDifficulty = () => {
    if (difficulty > 0) {
      setDifficulty(difficulty - 1);
    }
  };

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
        overflowY: 'auto',
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
          Create Quiz
        </Typography>
        <Box flexGrow={1} />
      </Stack>
      <Stack
        spacing={theme.space.l}
        direction="row"
        sx={{
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: '1rem',
          border: `1px solid black`,
        }}
      >
        <TextField
          label="Quiz Name"
          variant="standard"
          value={quizName}
          size="medium"
          onChange={(e) => setQuizName(e.target.value)}
          sx={{ width: '80%' }}
          inputProps={{
            style: {
              height: '50px',
              fontSize: '2rem',
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Typography fontSize={'1rem'} fontWeight={500} mb={1}>
            Difficulty
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button
              variant="outlined"
              onClick={decreaseDifficulty}
              style={{ maxWidth: '1rem', maxHeight: '2rem', minWidth: '1rem', minHeight: '2rem' }}
              sx={{ border: `1px solid black` }}
            >
              <RemoveIcon />
            </Button>
            <DifficultyCircles difficulty={difficulty} size={'large'} />
            <Button
              variant="outlined"
              onClick={increaseDifficulty}
              style={{ maxWidth: '1rem', maxHeight: '2rem', minWidth: '1rem', minHeight: '2rem' }}
              sx={{ border: `1px solid black` }}
            >
              <AddIcon />
            </Button>
          </Stack>
        </Box>
      </Stack>

      {questions.map((question, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: 'white',
            padding: '2rem 1rem 2rem 1rem',
            border: `1px solid black`,
            display: 'flex',
          }}
        >
          <Stack
            key={index}
            spacing={theme.space.l}
            sx={{
              width: '80%',
              mr: '1rem',
            }}
          >
            <TextField
              label="Question Name"
              variant="standard"
              value={question.questionName}
              onChange={(e) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].questionName = e.target.value;
                setQuestions(updatedQuestions);
              }}
            />
            <Autocomplete
              options={COUNTRY_LIST}
              value={question.country}
              multiple
              getOptionLabel={(option) => option}
              filterSelectedOptions
              onChange={(event, value) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].country = value;
                setQuestions(updatedQuestions);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Country/Countries" variant="outlined" />
              )}
              freeSolo={false}
            />
          </Stack>
          <Box
            sx={{
              border: `1px dashed grey`,
              padding: '1rem',
              display: 'flex',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" component="h2">
              <CloudUpload sx={{ verticalAlign: 'middle' }} /> Upload Image
            </Typography>
          </Box>
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={addQuestion}
          sx={{
            width: '4rem',
            height: '4rem',
            backgroundColor: 'white',
            border: '1px solid black',
            '&:hover': {
              backgroundColor: 'grey',
            },
            mb: '1rem',
          }}
        >
          <AddIcon sx={{ color: 'black' }} />
        </Button>
      </Box>
    </Stack>
  );
}
