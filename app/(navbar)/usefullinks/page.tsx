'use client';

import UsefulLinksTile from '@/components/UsefulLinkTile';
import { Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';

interface UsefulLinks {
  image?: string;
  type: 'Information' | 'Community' | 'Quiz';
  title: string;
  link: string;
}

export default function UsefulLinks() {
  const theme = useTheme();

  const usefulLinks: UsefulLinks[] = [
    {
      image: 'https://i.imgur.com/ZXjjJH5.png',
      type: 'Information',
      title: 'Plonk It',
      link: 'https://www.plonkit.net/',
    },
    {
      type: 'Community',
      title: 'Plonk It Discord',
      link: 'https://discord.com/invite/plonkit',
    },
    {
      image: 'https://i.imgur.com/f7cEoRV.png',
      type: 'Quiz',
      title: 'Seterra',
      link: 'https://www.seterra.com/',
    },
    {
      type: 'Information',
      title: 'Geotips',
      link: 'https://geotips.net/',
    },
    {
      image: 'https://i.imgur.com/s456t2J.png',
      type: 'Information',
      title: 'GeoHints',
      link: 'https://geohints.com/',
    },
    {
      image: 'https://i.imgur.com/ZXjjJH5.png',
      type: 'Community',
      title: 'r/geoguessr',
      link: 'https://www.reddit.com/r/geoguessr/',
    },
  ];

  const linkScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const linkScrollElement = linkScroll.current;
    const horizontalScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (linkScrollElement) {
        linkScrollElement.scrollLeft += e.deltaY;
      }
    };

    if (linkScrollElement) {
      linkScrollElement.addEventListener('wheel', horizontalScroll);

      return () => {
        linkScrollElement.removeEventListener('wheel', horizontalScroll);
      };
    }
  }, []);

  return (
    <Stack
      height="100%"
      direction="column"
      spacing={theme.space.xl2}
      paddingTop={theme.space.xl}
      paddingLeft={theme.space.xl5}
      paddingRight={theme.space.xl5}
    >
      <Typography variant="h2">Useful Links</Typography>
      <Stack direction="row" spacing={theme.space.xl} sx={{ overflowX: 'auto' }} ref={linkScroll}>
        {usefulLinks.map((link) => (
          <UsefulLinksTile
            key={link.title + link.link}
            image={link.image}
            type={link.type}
            title={link.title}
            link={link.link}
          />
        ))}
      </Stack>
    </Stack>
  );
}
