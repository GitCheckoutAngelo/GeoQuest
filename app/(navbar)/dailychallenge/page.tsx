'use client';

import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import ZoomableImage from '../../../components/ZoomableImage';
import ResultsModal from '../../../components/ResultsModal';
import { COUNTRY_LIST } from '@/data/country-list';
import { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';
import { FailedQuestion } from '@/models/failed-question';
import { Hint } from '@/models/hint';
import { FormValues } from '@/models/form';
import Link from 'next/link';

const initialValues: FormValues = {
  country: null,
  hintOneCountries: [],
  hintTwoCountries: [],
  hintThreeCountries: [],
  hintFourCountries: [],
};

const ANSWERS = {
  country: 'Sri Lanka',
  hintOne: ['Sri Lanka', 'United Kingdom'],
  hintTwo: ['Sri Lanka'],
  hintThree: ['Sri Lanka'],
  hintFour: ['Sri Lanka'],
};

export default function DailyChallenge() {
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [failedQuestions, setFailedQuestions] = useState<FailedQuestion[]>([]);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleChange = (
    _event: React.SyntheticEvent,
    value: string | string[],
    name: keyof FormValues
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (
      formValues.country &&
      formValues.hintOneCountries.length &&
      formValues.hintTwoCountries.length &&
      formValues.hintThreeCountries.length &&
      formValues.hintFourCountries.length
    ) {
      checkResults();
    } else {
      toast.error('Please fill out all required fields');
    }
  };

  const checkResults = () => {
    const hints: Hint[] = [
      { name: 'Country', answer: [ANSWERS.country], userAnswer: [formValues.country || ''] },
      { name: 'Hint One', answer: ANSWERS.hintOne, userAnswer: formValues.hintOneCountries },
      { name: 'Hint Two', answer: ANSWERS.hintTwo, userAnswer: formValues.hintTwoCountries },
      { name: 'Hint Three', answer: ANSWERS.hintThree, userAnswer: formValues.hintThreeCountries },
      { name: 'Hint Four', answer: ANSWERS.hintFour, userAnswer: formValues.hintFourCountries },
    ];

    const failedQuestions: FailedQuestion[] = hints.reduce(
      (acc: FailedQuestion[], { name, answer, userAnswer }) => {
        const missed = answer.filter((country) => !userAnswer.includes(country));
        const incorrect = userAnswer.filter((country) => !answer.includes(country));
        if (missed.length > 0 || incorrect.length > 0) {
          acc.push({ question: name, missed, incorrect });
        }
        return acc;
      },
      []
    );

    if (failedQuestions.length === 0) {
      confetti({
        particleCount: 150,
        spread: 90,
        startVelocity: 160,
        decay: 0.8,
        origin: { x: 0.5, y: 1 },
      });
    }

    setFailedQuestions(failedQuestions);
    setShowResultsModal(true);
  };

  return (
    <Grid container sx={{ height: 'calc(100vh - 72px)' }}>
      <ResultsModal open={showResultsModal} failedQuestions={failedQuestions} />
      <Grid item xs={9}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            style={{
              display: 'flex',
              backgroundColor: 'white',
              borderStyle: 'solid',
              borderWidth: '0 0 1px 0',
              height: '72px',
              padding: '1rem',
              alignItems: 'center',
            }}
          >
            <Link
              href={{
                pathname: '/',
              }}
            >
              <IconButton sx={{ marginRight: '2rem', height: '100%' }}>
                <ArrowBack />
              </IconButton>
            </Link>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Daily Challenge
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: 'flex', width: '100%', height: 'calc(100vh - 144px)' }}>
          <ZoomableImage />
        </Box>
      </Grid>

      <Grid
        item
        xs={3}
        padding={'2rem'}
        style={{
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderWidth: '0 0 0 1px',
          overflow: 'auto',
          maxHeight: 'calc(100vh - 72px)',
        }}
      >
        <Stack direction={'column'} spacing={'1.5rem'}>
          <Typography variant="h4" sx={{ fontWeight: '500' }}>
            What country is this?
          </Typography>
          <Autocomplete
            id="country-autocomplete"
            options={COUNTRY_LIST}
            value={formValues.country}
            onChange={(event, value) => handleChange(event, value || '', 'country')}
            renderInput={(params) => <TextField {...params} label="Country" required />}
            freeSolo={false}
          />
          <Typography variant="h6" sx={{ fontWeight: '400' }}>
            What countries does hint <span style={{ color: '#f15854' }}>one</span> indicate?
          </Typography>
          <Autocomplete
            id="hint-one-autocomplete"
            multiple
            options={COUNTRY_LIST}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={formValues.hintOneCountries}
            onChange={(event, values) => handleChange(event, values, 'hintOneCountries')}
            renderInput={(params) => <TextField {...params} label="Countries" required />}
            freeSolo={false}
          />
          <Typography variant="h6" sx={{ fontWeight: '400' }}>
            What countries does hint <span style={{ color: '#faa43a' }}>two</span> indicate?
          </Typography>
          <Autocomplete
            id="hint-two-autocomplete"
            multiple
            options={COUNTRY_LIST}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={formValues.hintTwoCountries}
            onChange={(event, values) => handleChange(event, values, 'hintTwoCountries')}
            renderInput={(params) => <TextField {...params} label="Countries" required />}
            freeSolo={false}
          />
          <Typography variant="h6" sx={{ fontWeight: '400' }}>
            What countries does hint <span style={{ color: '#60bd68' }}>three</span> indicate?
          </Typography>
          <Autocomplete
            id="hint-three-autocomplete"
            multiple
            options={COUNTRY_LIST}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={formValues.hintThreeCountries}
            onChange={(event, values) => handleChange(event, values, 'hintThreeCountries')}
            renderInput={(params) => <TextField {...params} label="Countries" required />}
            freeSolo={false}
          />
          <Typography variant="h6" sx={{ fontWeight: '400' }}>
            What countries does hint <span style={{ color: '#2860f5' }}>four</span> indicate?
          </Typography>
          <Autocomplete
            id="hint-four-autocomplete"
            multiple
            options={COUNTRY_LIST}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={formValues.hintFourCountries}
            onChange={(event, values) => handleChange(event, values, 'hintFourCountries')}
            renderInput={(params) => <TextField {...params} label="Countries" required />}
            freeSolo={false}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderRadius: '50px', backgroundColor: 'white', border: '1.5px solid' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <ToastContainer />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
