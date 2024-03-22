import { Player } from '@/models/Player';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const RunnerUpPlayerList = ({ players }: { players: Player[] }) => {
  const formatPlayerTime = (totalSeconds: number) => {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  return (
    <TableContainer
      sx={{
        maxHeight: '100%',
        minWidth: '90vw',
        pt: '16px',
        outline: '0px solid black',
        bgColor: 'pink',
      }}
    >
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: '90vw' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ outline: '0px solid black', width: '25%' }}>
              <Typography fontWeight="medium">Place</Typography>
            </TableCell>
            <TableCell style={{ outline: '0px solid black', width: '25%' }}>
              <Typography fontWeight="medium">Username</Typography>
            </TableCell>
            <TableCell style={{ outline: '0px solid black', width: '25%' }}>
              <Typography fontWeight="medium">Points</Typography>
            </TableCell>
            <TableCell style={{ outline: '0px solid black', width: '25%' }}>
              <Typography fontWeight="medium">Time</Typography>
            </TableCell>
            <TableCell
              style={{
                outline: '0px solid black',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <IconButton
                size="small"
                style={{ display: 'flex', alignItems: 'end', outline: '0px solid black' }}
              >
                <SearchIcon style={{ fontSize: '24px', color: '#DC5050' }} />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.slice(3).map((player: Player, index: number) => (
            <TableRow
              key={player.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  columnGap: '4px',
                }}
              >
                <MilitaryTechIcon style={{ height: 20, width: 'auto', color: 'black' }} />
                <Typography>{`${index + 4}th`}</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>{player.username}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{player.points.toLocaleString()}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{formatPlayerTime(player.time)}</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
