'use client';

import { Button, Stack, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CardAsset from '../../../components/flashcards/CardAsset';
import './flashcards.scss';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useTheme } from '@mui/material/styles';
import Chat from '@/components/chat/Chat';

const blankCard = {
  id: 0,
  image: '',
  answer: '',
  description: '',
  tips: [''],
  warnings: [''],
};

const flashCardsDefault = [
  {
    id: 1,
    image: '/kenyanSnorkel.png',
    answer: 'Kenyan Snorkel',
    description:
      'This snorkel can be seen on the front right of the off-roader vehicle used for Google Maps footage in most parts of Kenya',
    tips: [
      'Be sure to check the car first if the location feels like Kenya!',
      'Scream "KENYAN SNORKEL" when you see it',
    ],
    warnings: [
      'A lot of footage in the Northeast of Kenya may not have this snorkel, although this footage is more rare',
    ],
  },
  {
    id: 2,
    image: '/polishPedestrian.png',
    answer: 'Polish Pedestrian',
    description:
      'This pedestrian sign is very unique, and only has one line that the pedestrian is walking over.',
    tips: ['If dropped in a European city area, try taking a look around for crossing signs'],
    warnings: [
      'The line has small cuts along where the legs are, but it is still one line going across the entire sign',
    ],
  },
];

export default function FlashCards() {
  const theme = useTheme();
  const chatFits = useMediaQuery('(max-width: 1200px)');

  const shuffleCards = () => {
    if (shuffleActive) {
      setFlashCards(flashCardsDefault);
      setCardNumber(0);
      setShuffleActive(false);
    } else {
      const tempFlashCards = [...flashCards];
      for (let i = tempFlashCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempFlashCards[i], tempFlashCards[j]] = [tempFlashCards[j], tempFlashCards[i]];
      }
      setFlashCards(tempFlashCards);
      setCardNumber(0);
      setShuffleActive(true);
    }
  };

  const changeCard = (direction: string) => {
    const flashCardTurning = setTimeout(() => {
      setCardTransition(false);
    }, 150);

    if (direction === 'left') {
      if (cardNumber === 0) {
        setTempCard({ ...flashCards[cardNumber], image: flashCards[flashCards.length - 1].image });
        setCardTransition(true);
        setCardNumber(flashCards.length - 1);
      } else {
        setTempCard({ ...flashCards[cardNumber], image: flashCards[cardNumber - 1].image });
        setCardTransition(true);
        setCardNumber(cardNumber - 1);
      }
    } else if (direction === 'right') {
      if (cardNumber === flashCards.length - 1) {
        setTempCard({ ...flashCards[cardNumber], image: flashCards[0].image });
        setCardTransition(true);
        setCardNumber(0);
      } else {
        setTempCard({ ...flashCards[cardNumber], image: flashCards[cardNumber + 1].image });
        setCardTransition(true);
        setCardNumber(cardNumber + 1);
      }
    }

    return () => {
      clearTimeout(flashCardTurning);
    };
  };

  useEffect(() => {
    const scrollCardKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        changeCard('left');
      } else if (e.key === 'ArrowRight') {
        changeCard('right');
      }
    };

    window.addEventListener('keydown', scrollCardKey);

    return () => {
      window.removeEventListener('keydown', scrollCardKey);
    };
  });

  const [tempCard, setTempCard] = useState(blankCard);
  const [cardTransition, setCardTransition] = useState(false);
  const [shuffleActive, setShuffleActive] = useState(false);
  const [flashCards, setFlashCards] = useState(flashCardsDefault);
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <Stack height="100%" alignItems="center" direction="row">
      <Stack
        id="cardInformation"
        direction="column"
        height={'100%'}
        width={'100%'}
        columnGap={1}
        justifySelf="center"
      >
        <Link href="/">
          <Button variant="text">
            <Stack direction="column" rowGap={1}>
              <p>Leave Reviews</p>
              <Stack
                direction="row"
                sx={{ marginTop: '-10px', color: theme.palette['indian-red-6'].main }}
              >
                <KeyboardBackspaceIcon />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
                <HorizontalRuleIcon sx={{ marginLeft: '-10px' }} />
              </Stack>
            </Stack>
          </Button>
        </Link>
        {cardTransition ? <CardAsset {...tempCard} /> : <CardAsset {...flashCards[cardNumber]} />}
        <Stack
          id="centerCardBar"
          direction="row"
          rowGap={1}
          maxWidth={'1200px'}
          width="100%"
          alignSelf={'center'}
        >
          <Stack id="cardBar" direction="row" rowGap={1} justifyContent={'space-between'}>
            <Stack id="leftIcons" direction="row" rowGap={1}>
              <PlayCircleOutlineIcon className="cardBarIcon" fontSize="large" />
              <ShuffleIcon
                className={shuffleActive ? 'cardBarIcon shuffleActive' : 'cardBarIcon'}
                fontSize="large"
                onClick={() => shuffleCards()}
              />
            </Stack>
            <Stack id="progressControls" direction="row" rowGap={1}>
              <NavigateBeforeIcon
                className="cardBarIcon"
                fontSize="large"
                onClick={() => changeCard('left')}
              />
              <p id="cardProgress">
                {cardNumber + 1}/{flashCards.length}
              </p>
              <NavigateNextIcon
                className="cardBarIcon"
                fontSize="large"
                onClick={() => changeCard('right')}
              />
            </Stack>
            <Stack id="rightIcons" direction="row" rowGap={1}>
              <FullscreenIcon className="cardBarIcon" fontSize="large" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {chatFits ? null : (
        <Stack
          justifySelf="flex-end"
          width="416px"
          height={`calc(100vh - 72px)`}
          sx={{ flex: '1' }}
        >
          <Chat />
        </Stack>
      )}
    </Stack>
  );
}
