import './TopPlayerPodium.css';
import { Player } from '@/models/Player';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Region } from '@/utils/enums/Region';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const GOLD = 'gold';
const SILVER = '#B7E3FA';
const BRONZE = '#CD7F32';

const defaultPlayer: Player = {
  username: '--',
  points: 0,
  time: 0,
  region: Region.Asia,
  avatar: null,
};

interface TopPlayerPodiumProps {
  players: Player[];
  selectedRegion: Region | null;
}

export const TopPlayerPodium = ({ players, selectedRegion }: TopPlayerPodiumProps) => {
  const gold: Player | undefined = players.length > 0 ? players[0] : defaultPlayer;
  const silver: Player | undefined = players.length > 1 ? players[1] : defaultPlayer;
  const bronze: Player | undefined = players.length > 2 ? players[2] : defaultPlayer;

  const formatPlayerTime = (totalSeconds: number) => {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const goldTime = formatPlayerTime(gold?.time);
  const silverTime = formatPlayerTime(silver?.time);
  const bronzeTime = formatPlayerTime(bronze?.time);

  return (
    <>
      <Grid
        container
        style={{ height: '360px', width: '100%', outline: '0px solid black', paddingTop: '16px' }}
      >
        <Grid item style={{ width: '30%' }}>
          <Box
            style={{
              height: '100%',
              outline: '0px solid black',
            }}
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            rowGap="16px"
          >
            {players.length < 2 ? (
              <QuestionMarkIcon style={{ width: 80, height: 80 }} />
            ) : (
              silver.avatar && (
                <Avatar
                  src={silver.avatar}
                  style={{ width: 80, height: 80, pointerEvents: 'none' }}
                ></Avatar>
              )
            )}
            <Typography variant="h6">{`${silver?.username}`}</Typography>
            <Box
              style={{
                height: '100%',
                borderLeft: '1px solid black',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                maxHeight: '40%',
                width: '100%',
                backgroundColor: '',
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              rowGap="20px"
            >
              <MilitaryTechIcon style={{ height: 56, width: 56, color: SILVER }} />
              <Box display="flex" justifyContent="center" alignItems="center" columnGap="12px">
                <Typography variant="h6">{`${silver?.points.toLocaleString()} total points`}</Typography>
                <div className="podium-dot" style={{ backgroundColor: SILVER }} />
                <Typography variant="h6">{silverTime}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item style={{ width: '40%' }}>
          <Box
            style={{
              height: '100%',
              outline: '0px solid black',
            }}
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            rowGap="16px"
          >
            {players.length < 1 ? (
              <QuestionMarkIcon style={{ width: 80, height: 80 }} />
            ) : (
              gold.avatar && (
                <Avatar
                  src={gold.avatar}
                  style={{ width: 80, height: 80, pointerEvents: 'none' }}
                ></Avatar>
              )
            )}
            <Typography variant="h6">{`${gold?.username}`}</Typography>
            <Box
              style={{
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderTop: '1px solid black',
                minHeight: '60%',
                width: '100%',
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              rowGap="20px"
            >
              <MilitaryTechIcon style={{ height: 56, width: 56, color: GOLD }} />
              <Typography variant="h4" fontWeight="bold">{`${
                selectedRegion === null ? 'Overall Global' : selectedRegion
              } Champion`}</Typography>
              <Box display="flex" justifyContent={'center'} alignItems="center" columnGap="12px">
                <Typography variant="h6">{`${gold?.points.toLocaleString()} total points`}</Typography>
                <div className="podium-dot" style={{ backgroundColor: GOLD }} />
                <Typography variant="h6">{goldTime}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item style={{ width: '30%' }}>
          <Box
            style={{
              height: '100%',
              outline: '0px solid black',
            }}
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            rowGap="16px"
          >
            {players.length < 3 ? (
              <QuestionMarkIcon style={{ width: 80, height: 80 }} />
            ) : (
              bronze.avatar && (
                <Avatar
                  src={bronze.avatar}
                  style={{ width: 80, height: 80, pointerEvents: 'none' }}
                />
              )
            )}
            <Typography variant="h6">{`${bronze?.username}`}</Typography>
            <Box
              style={{
                height: '100%',
                borderRight: '1px solid black',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                maxHeight: '40%',
                width: '100%',
                backgroundColor: '',
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              rowGap="20px"
            >
              <MilitaryTechIcon style={{ height: 56, width: 56, color: BRONZE }} />
              <Box display="flex" justifyContent={'center'} alignItems="center" columnGap="12px">
                <Typography variant="h6">{`${bronze?.points.toLocaleString()} total points`}</Typography>
                <div className="podium-dot" style={{ backgroundColor: GOLD }} />
                <Typography variant="h6">{bronzeTime}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
