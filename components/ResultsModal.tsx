import React from 'react';
import { Box, Modal, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { CheckCircleOutline, CancelOutlined } from '@mui/icons-material';
import { FailedQuestion } from '@/models/failed-question';

const style = {
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '1rem',
  boxShadow: 24,
  padding: '2rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default function failedQuestionsModal({
  open,
  failedQuestions,
}: {
  open: boolean;
  failedQuestions: FailedQuestion[];
}) {
  const isSuccess = failedQuestions.length === 0;
  const resultString = isSuccess ? 'All answers are correct!' : 'Some answers are incorrect!';

  const handleSubmit = () => {
    window.location.href = '/';
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isSuccess ? (
          <CheckCircleOutline sx={{ fontSize: '4rem', color: 'green' }} />
        ) : (
          <CancelOutlined sx={{ fontSize: '4rem', color: 'red' }} />
        )}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {resultString}
        </Typography>
        {failedQuestions && failedQuestions.length > 0 && (
          <Box sx={{ mt: '2rem' }}>
            <Typography variant="h6" component="h3">
              Failed Questions:
            </Typography>
            <List>
              {failedQuestions.map((result) => (
                <ListItem key={result.question}>
                  <ListItemText
                    primary={result.question}
                    secondary={
                      (result.missed && result.missed.length > 0
                        ? `Missed: ${result.missed.join(', ')}`
                        : '') +
                      (result.incorrect && result.incorrect.length > 0
                        ? ` Incorrect: ${result.incorrect.join(', ')}`
                        : '')
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <Button
          variant="outlined"
          size="large"
          sx={{ borderRadius: '50px', backgroundColor: 'white', border: '1.5px solid', mt: '2rem' }}
          onClick={handleSubmit}
        >
          Finish
        </Button>
      </Box>
    </Modal>
  );
}
