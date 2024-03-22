import React from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import { Box, IconButton } from '@mui/material';
import { ZoomIn, ZoomOut, SettingsBackupRestore } from '@mui/icons-material';

const ZoomableImage = () => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <Box sx={{ position: 'absolute', top: '160px', left: '15px', zIndex: 1 }}>
        <IconButton onClick={() => zoomIn()} sx={{ backgroundColor: 'white' }}>
          <ZoomIn />
        </IconButton>
        <IconButton onClick={() => zoomOut()} sx={{ backgroundColor: 'white', ml: '0.5rem' }}>
          <ZoomOut />
        </IconButton>
        <IconButton
          onClick={() => resetTransform()}
          sx={{ backgroundColor: 'white', ml: '0.5rem' }}
        >
          <SettingsBackupRestore />
        </IconButton>
      </Box>
    );
  };
  return (
    <TransformWrapper>
      <TransformComponent
        contentStyle={{
          width: '100%',
          height: 'calc(100vh - 144px)',
          objectFit: 'contain',
        }}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src="challenge.png" alt="challenge" width="100%" />
        }
      </TransformComponent>
      <Controls />
    </TransformWrapper>
  );
};

export default ZoomableImage;
