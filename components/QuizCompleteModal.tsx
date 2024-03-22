'use client';

import { Button, Modal, Stack, Typography, useTheme } from '@mui/material';

interface QuizCompleteModalProps {
  open: boolean;
  onClose: (buttonPressed: 'quit' | 'retry') => void;
}

export default function QuizCompleteModal(props: QuizCompleteModalProps) {
  const { open, onClose } = props;
  const theme = useTheme();
  return (
    <Modal open={open} aria-labelledby="modal-modal-title">
      <Stack
        alignItems="center"
        spacing={theme.space.l}
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
          p: theme.space.xl,
        }}
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Quiz Over
        </Typography>
        <Stack direction="row" spacing={theme.space.m}>
          <Button variant="outlined" onClick={() => onClose('quit')}>
            Quit
          </Button>
          <Button variant="contained" onClick={() => onClose('retry')}>
            Retry
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
