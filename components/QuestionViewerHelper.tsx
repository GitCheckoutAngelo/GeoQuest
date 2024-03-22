/* eslint-disable @next/next/no-img-element */
import { questionsData } from '@/data/questions-data';
import { Stack, Typography } from '@mui/material';

export default function QuestionViewerHelper() {
  const questions = [...Object.values(questionsData.signs.europe)];
  return (
    <Stack spacing={4}>
      {questions.map((question) => (
        <Stack key={question.id} direction="row" spacing={2} alignItems={'center'}>
          <img src={question.image} alt={'image'} />
          <Typography variant="h1">{question.id}</Typography>
          <Typography variant="h4">{question.answers.join(', ')}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}
