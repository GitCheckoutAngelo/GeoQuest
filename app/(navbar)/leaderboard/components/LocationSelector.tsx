import React, { useRef, useState } from 'react';
import { Region } from '@/utils/enums/Region';
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface LocationSelectorProps {
  location: Region | null;
  setLocation: (selectedLocation: Region | null) => void;
}

export const LocationSelector = ({ location, setLocation }: LocationSelectorProps) => {
  const [showRegionMenu, setShowRegionMenu] = useState(false);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  const handleSelectGlobal = () => {
    setLocation(null);
  };

  const handleSelectRegion = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    region: Region
  ) => {
    setLocation(region ? region : null);
    setShowRegionMenu(false);
  };

  const handleToggle = () => {
    setShowRegionMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (buttonGroupRef.current && buttonGroupRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setShowRegionMenu(false);
  };

  return (
    <>
      <ButtonGroup ref={buttonGroupRef}>
        <Button
          style={{
            padding: '10px 30px',
            borderRadius: '18px 0 0 18px',
            border: '1px solid black',
            height: '36px',
            width: '90px',
            backgroundColor: location ? '#FFFFFF' : '#DC5050',
          }}
          onClick={handleSelectGlobal}
          variant="outlined"
        >
          <Typography
            style={{ fontSize: '14px', color: location ? 'black' : '#FFFFFF', fontWeight: '500' }}
          >
            Global
          </Typography>
        </Button>
        <Button
          style={{
            borderRadius: '0 18px 18px 0',
            height: '36px',
            minWidth: '120px',
            border: '1px solid black',
            backgroundColor: location ? '#DC5050' : '#FFFFFF',
          }}
          size="small"
          onClick={handleToggle}
        >
          <Box display="flex" flexDirection="row" columnGap="10px">
            <Typography
              style={{
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: location ? '#FFFFFF' : 'black',
              }}
            >
              {location ? location : 'Regions'}
            </Typography>
            <ArrowDropDownIcon style={{ color: location ? '#FFFFFF' : '#DC5050' }} />
          </Box>
        </Button>
      </ButtonGroup>
      <Popper sx={{ zIndex: 1 }} open={showRegionMenu} anchorEl={buttonGroupRef.current} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {Object.values(Region).map((region) => (
                    <MenuItem
                      key={region}
                      selected={region === location}
                      onClick={(event) => handleSelectRegion(event, region)}
                    >
                      {region}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
