import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './CardAsset.scss';
import Image from 'next/image';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import flashCardProps from './FlashCardProps';
import { useTheme } from '@mui/material/styles';

export default function CardAsset(props: flashCardProps) {
  const theme = useTheme();

  function flipCard() {
    if (flipped) {
      setFlipped(false);
    } else {
      setFlipped(true);
    }
  }

  useEffect(() => {
    setFlipped(false);
  }, [props]);

  const [flipped, setFlipped] = useState(false);

  return (
    <Stack id="fullCard" direction="column" onClick={() => flipCard()} rowGap={1}>
      <Stack
        id="cardContents"
        className={flipped ? 'cardFlipped' : ''}
        direction="column"
        rowGap={1}
      >
        <Stack id="cardFront" direction="column" rowGap={1} justifyContent={'flex-start'}>
          <div id="flashCardImgContainer">
            <Image id="flashCardImg" src={props.image} alt="card image" fill />
          </div>
          <Stack id="flipText" direction="row" rowGap={1} justifyContent={'center'}>
            <p style={{ color: theme.palette['indian-red-6'].main, fontSize: '20px' }}>Press to flip the card</p>
            <TouchAppIcon fontSize='large' sx={{ color: theme.palette['indian-red-6'].main }}/>
          </Stack>
        </Stack>
        <Stack
          id="cardBack"
          direction="column"
          rowGap={1}
          alignItems={'left'}
          justifyContent={'center'}
        >
          <p className="answer" style={{ fontWeight: 600, color: theme.palette['amethyst-5'].main }}>{props.answer}</p>
          <div>
            <p className="descriptionTitle" style={{ color: theme.palette['crayola-blue-6'].main }}>Description:&nbsp;</p>
            <p>{props.description}</p>
          </div>
          <br />
          {props.tips && props.tips.length > 0 && (
            <div>
              <p className="tipsTitle" style={{ color: theme.palette['sgbus-green-6'].main }}>Tips:</p>
              <ul>
                {props.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          <br />
          {props.warnings && props.warnings.length > 0 && (
            <div>
              <p className="warningsTitle" style={{ color: theme.palette['indian-red-6'].main }}>Warnings:</p>
              <ul>
                {props.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
