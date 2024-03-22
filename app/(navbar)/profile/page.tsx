/* eslint-disable @next/next/no-img-element */
'use client';
import { Accordion, AccordionSummary, Stack, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const profileDetails = {
  name: 'Jane Doe',
  picture: 'https://i.imgur.com/rOYIbEw.png',
  level: 3,
  AccountCreated: '2022-02-05',
  LastActive: '2023-05-15',
  points: 3092,
  badges: [
    {
      id: 1,
      name: 'Complete 100 Quizzes',
      earned: '18/10/2023',
    },
    {
      id: 2,
      name: 'Play for 100 Hours',
      earned: '29/9/2023',
    },
    {
      id: 3,
      name: 'Complete all Europe signs',
      earned: '24/9/2023',
    },
    {
      id: 4,
      name: 'Complete 50 Quizzes',
      earned: '1/9/2023',
    },
    {
      id: 5,
      name: 'Complete 25 Quizzes',
      earned: '20/8/2023',
    },
  ],
  medals: {
    Europe: {
      Gold: 10,
      Silver: 5,
      Bronze: 3,
    },
    NorthAmerica: {
      Gold: 5,
      Silver: 3,
      Bronze: 3,
    },
    SouthAmerica: {
      Gold: 2,
      Silver: 4,
      Bronze: 1,
    },
    Africa: {
      Gold: 1,
      Silver: 1,
      Bronze: 1,
    },
    Asia: {
      Gold: 0,
      Silver: 0,
      Bronze: 0,
    },
    Oceania: {
      Gold: 0,
      Silver: 0,
      Bronze: 0,
    },
  },
};

const StyledAccordion = styled(Accordion)({
  border: '1px solid black',
  paddingRight: '25px',
});
const Content = styled('div')({
  margin: '0 auto',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Adjusted alignment to top
  height: '100%',
  paddingTop: '2rem',
  paddingLeft: '10rem',
  paddingRight: '10rem',
});

enum Region {
  Europe = 'Europe',
  NorthAmerica = 'NorthAmerica',
  SouthAmerica = 'SouthAmerica',
  Africa = 'Africa',
  Asia = 'Asia',
  Oceania = 'Oceania',
}

const BadgeIcon = () => {
  return (
    <img
      src="https://i.imgur.com/UrvAOJn.png"
      alt="Badge"
      style={{ maxWidth: '80px', marginLeft: '14px', marginRight: '28px', marginTop: '28px' }}
    />
  );
};

const MedalAccordion = ({ category }: { category: keyof typeof Region }) => {
  const region = Region[category];
  const medalTypeGold = profileDetails.medals[region].Gold;
  const medalTypeSilver = profileDetails.medals[region].Silver;
  const medalTypeBronze = profileDetails.medals[region].Bronze;
  const total = medalTypeGold + medalTypeSilver + medalTypeBronze;

  let displayCategory = region.toString();

  if (region === Region.NorthAmerica) {
    displayCategory = 'North America';
  } else if (region === Region.SouthAmerica) {
    displayCategory = 'South America';
  }

  return (
    <StyledAccordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography style={{ paddingLeft: '20px' }}>
          {displayCategory} Medals &nbsp;●&nbsp; {total}
        </Typography>
      </AccordionSummary>
      <Typography style={{ paddingLeft: '20px', paddingBottom: '20px' }}>
        {Array.from({ length: medalTypeGold }).map((_, index) => (
          <img
            key={index}
            src="https://i.imgur.com/18odPEw.png"
            alt="Badge"
            style={{ maxWidth: '80px', marginLeft: '14px', marginRight: '28px', marginTop: '28px' }}
          />
        ))}
        {Array.from({ length: medalTypeSilver }).map((_, index) => (
          <img
            key={index}
            src="https://i.imgur.com/MBfQCOq.png"
            alt="Badge"
            style={{ maxWidth: '80px', marginLeft: '14px', marginRight: '28px', marginTop: '28px' }}
          />
        ))}
        {Array.from({ length: medalTypeBronze }).map((_, index) => (
          <img
            key={index}
            src="https://i.imgur.com/RHTQIzV.png"
            alt="Badge"
            style={{ maxWidth: '80px', marginLeft: '14px', marginRight: '28px', marginTop: '28px' }}
          />
        ))}
      </Typography>
    </StyledAccordion>
  );
};

const BadgeDisplay = ({ badgeName }: { badgeName: string }) => {
  return (
    <Stack direction="column">
      <BadgeIcon />
      <Typography maxWidth={'100px'}>{badgeName}</Typography>
    </Stack>
  );
};

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (date: string) => {
    const dateToConvert = new Date(date);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - dateToConvert.getTime());
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const diffYears = Math.floor(diffDays / 365);
    const diffMonths = Math.floor((diffDays % 365) / 30);

    let result = '';
    if (diffYears > 0) {
      result += `${diffYears} ${diffYears === 1 ? 'year,' : 'years,'}`;
    }
    if (diffMonths > 0) {
      result += `${result.length > 0 ? ' ' : ''}${diffMonths} ${
        diffMonths === 1 ? 'month' : 'months'
      }`;
    }

    return result === '' ? diffDays + ' days ago' : result;
  };

  return (
    <Content id="pageContent">
      <Stack direction="row">
        <div id="left">
          <h1 style={{ paddingRight: '410px' }}>Profile</h1>

          <Stack direction="row">
            <img
              src={profileDetails.picture}
              alt="Profile Picture"
              style={{ maxHeight: '200px', marginRight: '30px' }}
            />
            <Stack direction="column">
              <h1>{profileDetails.name}</h1>

              <Stack direction="row">
                <Typography style={{ marginTop: '10px' }}>LVL {profileDetails.level}</Typography>
                <img
                  src="https://i.imgur.com/X1ep9U9.png"
                  alt=""
                  style={{
                    maxWidth: '175px',
                    maxHeight: '20px',
                    marginTop: '10px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />{' '}
                {/* Progress Bar */}
              </Stack>

              <Stack direction="row">
                <img
                  src="https://i.imgur.com/y7rWSlG.png"
                  alt="cake"
                  style={{ maxWidth: '30px', marginRight: '10px' }}
                />{' '}
                {/* Cake Icon*/}
                <Typography style={{ marginTop: '10px' }}>
                  Member for {formatDate(profileDetails.AccountCreated)}
                </Typography>
              </Stack>

              <Stack direction={'row'}>
                <img
                  src="https://i.imgur.com/04pRQ2U.png"
                  alt="clock"
                  style={{ maxWidth: '30px', marginTop: '10px', marginRight: '10px' }}
                />{' '}
                {/* Clock Icon */}
                <Typography style={{ marginTop: '12.5px' }}>
                  Last Active: {formatDate(profileDetails.LastActive)}
                </Typography>
              </Stack>

              <Stack direction="row">
                <img
                  src="https://i.imgur.com/pmXzsRs.png"
                  alt="medal"
                  style={{ maxWidth: '30px', marginTop: '10px', marginRight: '10px' }}
                />{' '}
                {/* Medal Icon */}
                <Typography style={{ marginTop: '10px' }}>
                  Total {profileDetails.points} points
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="column" columnGap={1}>
            <h1 style={{ marginTop: '28px' }}>Recent Badges</h1>

            <Stack direction="row" style={{ textAlign: 'center' }}>
              <BadgeDisplay badgeName={profileDetails.badges[0].name} />
              <BadgeDisplay badgeName={profileDetails.badges[1].name} />
              <BadgeDisplay badgeName={profileDetails.badges[2].name} />
              <BadgeDisplay badgeName={profileDetails.badges[3].name} />
            </Stack>

            <button
              style={{
                marginTop: '28px',
                marginLeft: '150px',
                borderRadius: '20px',
                height: '35px',
                width: '175px',
                backgroundColor: 'white',
              }}
              onClick={handleOpenModal}
            >
              <Typography>★ Show All Badges</Typography>
            </button>
          </Stack>
        </div>
        <div id="right">
          <Stack direction="column" columnGap={1}>
            <img
              src="https://i.imgur.com/M0oEHsR.png"
              alt="trophy"
              style={{ maxWidth: '100px', alignSelf: 'flex-end' }}
            />{' '}
            {/* Trophy Icon */}
            <div>
              <hr style={{ width: '100%', marginBottom: '5px' }} />
              <Typography style={{ paddingLeft: '20px' }}>Trophies</Typography>
              <hr style={{ width: '100%', marginTop: '5px', marginBottom: '20px' }} />
            </div>
            <MedalAccordion category={Region.Europe} />
            <MedalAccordion category={Region.NorthAmerica} />
            <MedalAccordion category={Region.SouthAmerica} />
            <MedalAccordion category={Region.Africa} />
            <MedalAccordion category={Region.Asia} />
            <MedalAccordion category={Region.Oceania} />
          </Stack>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',

              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: 'white',
                padding: '50px',
                borderRadius: '30px',
                border: '2px solid black',
              }}
            >
              <Typography>
                <h1>Badges:</h1>
              </Typography>
              <Stack direction="row">
                <ul>
                  {profileDetails.badges.map((badge) => (
                    <li key={badge.id}>
                      {badge.name} - {badge.earned}
                    </li>
                  ))}
                </ul>
              </Stack>
              <button
                style={{
                  marginTop: '28px',
                  marginLeft: '150px',
                  borderRadius: '20px',
                  height: '35px',
                  width: '175px',
                  backgroundColor: 'white',
                }}
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Stack>
    </Content>
  );
}
