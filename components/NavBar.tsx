'use client';

import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

interface NavBarProps {
  height: string;
}

export default function NavBar(props: NavBarProps) {
  const theme = useTheme();
  const { height } = props;

  const [regionsAnchorEl, setRegionsAnchorEl] = useState<null | HTMLElement>(null);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState<null | HTMLElement>(null);

  const regionsOpen = Boolean(regionsAnchorEl);
  const categoriesOpen = Boolean(categoriesAnchorEl);

  const handleRegionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRegionsAnchorEl(event.currentTarget);
  };
  const handleRegionsClose = () => {
    setRegionsAnchorEl(null);
  };

  const handleCategoriesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };
  const handleCategoriesClose = () => {
    setCategoriesAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      useFlexGap
      sx={{
        width: '100%',
        height: height,
        paddingRight: theme.space.l,
        paddingLeft: theme.space.l,
        borderBottom: '1px solid black',
      }}
    >
      <Link href="/" style={{ marginRight: 'auto', cursor: 'pointer' }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: theme.fonts.viga, color: theme.palette.secondary.main }}
        >
          GeoQuest
        </Typography>
      </Link>
      <Button
        id="regions-button"
        aria-controls={regionsOpen ? 'regions-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={regionsOpen ? 'true' : undefined}
        onClick={handleRegionsClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Regions
      </Button>
      <Menu
        id="regions-menu"
        anchorEl={regionsAnchorEl}
        open={regionsOpen}
        onClose={handleRegionsClose}
        MenuListProps={{
          'aria-labelledby': 'regions-button',
        }}
      >
        <Link href={{ pathname: '/category', query: { region: 'north-america' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            North America
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/category', query: { region: 'south-america' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            South America
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/category', query: { region: 'europe' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            Europe
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/category', query: { region: 'africa' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            Africa
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/category', query: { region: 'asia' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            Asia
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/category', query: { region: 'oceania' } }}>
          <MenuItem onClick={handleRegionsClose} disableRipple>
            Oceania
          </MenuItem>
        </Link>
      </Menu>
      <Button
        id="categories-button"
        aria-controls={categoriesOpen ? 'categories-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={categoriesOpen ? 'true' : undefined}
        onClick={handleCategoriesClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ lineHeight: 1 }}
      >
        Categories
      </Button>
      <Menu
        id="categories-menu"
        anchorEl={categoriesAnchorEl}
        open={categoriesOpen}
        onClose={handleCategoriesClose}
        MenuListProps={{
          'aria-labelledby': 'categories-button',
        }}
      >
        <Link href={{ pathname: '/region', query: { category: 'fundamentals' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Fundamentals
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'coverage' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Coverage
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'drive-side' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Drive Side
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'license-plate' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            License Plate
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'google-car' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Google Car
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'follow-cars' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Follow Cars
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'camera-gen' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Camera Gen
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'bollards' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Bollards
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'road-markings' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Road Markings
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'signs' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Signs
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'guard-rail' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Guard Rail
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'poles' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Poles
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'language' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Language
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'street-suffix' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Street Suffix
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'phone-no' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Phone No.
          </MenuItem>
        </Link>
        <Link href={{ pathname: '/region', query: { category: 'other-tips' } }}>
          <MenuItem onClick={handleCategoriesClose} disableRipple>
            Other Tips
          </MenuItem>
        </Link>
      </Menu>
      <Link href="/usefullinks">
        <Button>Useful Links</Button>
      </Link>
      <Link href="/leaderboard">
        <Button>Leaderboard</Button>
      </Link>
      <Link href="/profile" style={{ marginLeft: 'auto', cursor: 'pointer' }}>
        <Image
          src="https://i.imgur.com/rOYIbEw.png"
          alt="Profile Picture"
          width={200}
          height={200}
          style={{ width: 40, height: 40, borderRadius: '100%' }}
        />
      </Link>
    </Stack>
  );
}
