'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Box, Typography, Link } from '@mui/material';
import WorldMapSvg from '@/components/dashboard/WorldMapSvg/WorldMapSvg';
import CategoryButton from '@/components/shared/CategoryButton';
import { Category } from '@/utils/enums/Category';
import { Region } from '@/utils/enums/Region';

const Home = () => {
  const router = useRouter();

  const allCategories = Object.values(Category);
  const topCategories = allCategories.slice(0, Math.floor(allCategories.length / 2));
  const bottomCategories = allCategories.slice(Math.floor(allCategories.length / 2));

  const regionOnSelect = (region: Region) => {
    setTimeout(() => {
      router.push(`/category?region=${region.split(' ').join('-').toLowerCase()}`);
    }, 480);
  };

  const renderCategoryButtons = (categories: string[]) => {
    return categories.map((category, index) => <CategoryButton category={category} key={index} />);
  };

  return (
    <Grid container minHeight="100%" alignItems="center" justifyContent="center" direction="column">
      <Grid
        item
        display="flex"
        justifyContent="space-around"
        style={{
          outline: '0px solid black',
          width: '100%',
          maxHeight: '76px',
          padding: '16px 0',
        }}
      >
        {renderCategoryButtons(topCategories)}
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="space-around"
        style={{
          outline: '0px solid black',
          width: '100%',
          height: 'calc(100vh - 112px - 64px - 72px)',
        }}
      >
        <Grid
          container
          style={{
            height: '100%',
            width: '100%',
            outline: '0px solid red',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            style={{
              outline: '0px solid black',
              height: '100%',
              width: '100%',
              margin: '0px 100px 0px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <WorldMapSvg
              onClickAfrica={() => regionOnSelect(Region.Africa)}
              onClickAsia={() => regionOnSelect(Region.Asia)}
              onClickEurope={() => regionOnSelect(Region.Europe)}
              onClickNorthAmerica={() => regionOnSelect(Region.NorthAmerica)}
              onClickOceania={() => regionOnSelect(Region.Oceania)}
              onClickSouthAmerica={() => regionOnSelect(Region.SouthAmerica)}
              height={'125%'}
            />
          </Box>
          <Link href="/dailychallenge">
            <FloatingCircleButton tiltTextRight={false}>
              {`Complete Today's Challenge`}
            </FloatingCircleButton>
          </Link>
          <Link href="/flashcards">
            <FloatingCircleButton tiltTextRight={true}>
              {`Review Your Learning`}
            </FloatingCircleButton>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="space-around"
        style={{
          outline: '0px solid black',
          width: '100%',
          padding: '16px 0',
        }}
      >
        {renderCategoryButtons(bottomCategories)}
      </Grid>
    </Grid>
  );
};

const FloatingCircleButton = ({
  children: text,
  tiltTextRight,
}: {
  children: string;
  tiltTextRight: boolean;
}) => {
  const [hover, setHover] = useState(false);
  const formattedText: JSX.Element[] = [];
  text.split(' ').forEach((word, index) => {
    formattedText.push(<span key={index}>{word}</span>);
    formattedText.push(<br key={`br-${index}`} />);
  });

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `${1}px solid ${tiltTextRight ? '#4BB8F2' : '#DC5050'}`,
        position: 'absolute',
        left: tiltTextRight ? '48px' : '',
        right: tiltTextRight ? '' : '48px',
        bottom: tiltTextRight ? '48px' : '',
        top: tiltTextRight ? '' : '48px',
        height: 180,
        width: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.1s ease',
        transform: `scale(${hover ? 1.1 : 1})`,
        borderRadius: 90,
        cursor: 'pointer',
      }}
    >
      <Typography
        fontSize={24}
        align="center"
        style={{
          transform: `rotate(${tiltTextRight ? 7 : -7}deg)`,
          textTransform: 'uppercase',
          fontWeight: '700',
          color: tiltTextRight ? '#4BB8F2' : '#DC5050',
        }}
      >
        {formattedText}
      </Typography>
    </Box>
  );
};

export default Home;
