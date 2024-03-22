'use client';

import React, { useEffect, useState } from 'react';
import { players as PLAYERS } from '@/utils/data/data';
import { Player } from '@/models/Player';

import { Box, Grid } from '@mui/material';
import { LocationSelector } from './components/LocationSelector';
import { TopPlayerPodium } from './components/TopPlayerPodium';
import { RunnerUpPlayerList } from './components/RunnerUpPlayerList';
import { Region } from '@/utils/enums/Region';

export default function LeaderBoard() {
  const [players] = useState<Player[]>(PLAYERS);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  useEffect(() => console.log(`SELECTED: ${selectedRegion}`));

  const getPlayersFromSelectedLocation = () => {
    return selectedRegion ? players.filter((player) => player.region === selectedRegion) : players;
  };

  return (
    <Grid container maxHeight="100vh" alignItems="center" justifyContent="start" direction="column">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%', height: '60px' }}
      >
        <LocationSelector
          location={selectedRegion}
          setLocation={(selectedLocation: Region | null) => setSelectedRegion(selectedLocation)}
        />
      </Box>
      <Box style={{ outline: '0px solid black', width: '100%' }}>
        <TopPlayerPodium
          players={getPlayersFromSelectedLocation()}
          selectedRegion={selectedRegion}
        />
      </Box>
      <Box>
        <RunnerUpPlayerList players={getPlayersFromSelectedLocation()} />
      </Box>
    </Grid>
  );
}
