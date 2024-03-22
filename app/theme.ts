'use client';

import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    common: {
      black: '#000',
    },
    text: {
      primary: '#2F3336',
      secondary: '#2f3336cc',
      disabled: '#2f333680',
    },
    primary: {
      main: '#000',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#DC5050', // indian-red-6
      contrastText: '#FFF',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FAFF00',
    },
    info: {
      main: '#00D1FF',
    },
    success: {
      main: '#33FF00',
    },

    'amethyst-1': {
      main: '#f7f0fb',
    },
    'amethyst-2': {
      main: '#efe1f7',
    },
    'amethyst-3': {
      main: '#dfc3ee',
    },
    'amethyst-4': {
      main: '#cfa6e6',
    },
    'amethyst-5': {
      main: '#bf88dd',
    },
    'amethyst-6': {
      main: '#AF6AD5',
    },
    'amethyst-7': {
      main: '#8c55aa',
    },
    'amethyst-8': {
      main: '#694080',
    },
    'amethyst-9': {
      main: '#462a55',
    },
    'amethyst-10': {
      main: '#23152b',
    },

    'crayola-blue-1': {
      main: '#ebf2fc',
    },
    'crayola-blue-2': {
      main: '#d6e4f9',
    },
    'crayola-blue-3': {
      main: '#adc9f3',
    },
    'crayola-blue-4': {
      main: '#84aeee',
    },
    'crayola-blue-5': {
      main: '#5b93e8',
    },
    'crayola-blue-6': {
      main: '#3278E2',
    },
    'crayola-blue-7': {
      main: '#2860b5',
    },
    'crayola-blue-8': {
      main: '#1e4888',
    },
    'crayola-blue-9': {
      main: '#14305a',
    },
    'crayola-blue-10': {
      main: '#0a182d',
    },

    'picton-blue-1': {
      main: '#edf8fe',
    },
    'picton-blue-2': {
      main: '#dbf1fc',
    },
    'picton-blue-3': {
      main: '#b7e3fa',
    },
    'picton-blue-4': {
      main: '#93d4f7',
    },
    'picton-blue-5': {
      main: '#6fc6f5',
    },
    'picton-blue-6': {
      main: '#4BB8F2',
    },
    'picton-blue-7': {
      main: '#3c93c2',
    },
    'picton-blue-8': {
      main: '#2d6e91',
    },
    'picton-blue-9': {
      main: '#1e4a61',
    },
    'picton-blue-10': {
      main: '#0f2530',
    },

    'sgbus-green-1': {
      main: '#f1faeb',
    },
    'sgbus-green-2': {
      main: '#e4f6d8',
    },
    'sgbus-green-3': {
      main: '#c9edb0',
    },
    'sgbus-green-4': {
      main: '#ade389',
    },
    'sgbus-green-5': {
      main: '#92da61',
    },
    'sgbus-green-6': {
      main: '#77D13A',
    },
    'sgbus-green-7': {
      main: '#5fa72e',
    },
    'sgbus-green-8': {
      main: '#477d23',
    },
    'sgbus-green-9': {
      main: '#305417',
    },
    'sgbus-green-10': {
      main: '#182a0c',
    },

    'school-bus-yellow-1': {
      main: '#fefbeb',
    },
    'school-bus-yellow-2': {
      main: '#fef8d7',
    },
    'school-bus-yellow-3': {
      main: '#fdf1b0',
    },
    'school-bus-yellow-4': {
      main: '#fbe988',
    },
    'school-bus-yellow-5': {
      main: '#fae261',
    },
    'school-bus-yellow-6': {
      main: '#F9DB39',
    },
    'school-bus-yellow-7': {
      main: '#c7af2e',
    },
    'school-bus-yellow-8': {
      main: '#958322',
    },
    'school-bus-yellow-9': {
      main: '#645817',
    },
    'school-bus-yellow-10': {
      main: '#322c0b',
    },

    'sandy-brown-1': {
      main: '#fef5ed',
    },
    'sandy-brown-2': {
      main: '#fdeada',
    },
    'sandy-brown-3': {
      main: '#fbd5b5',
    },
    'sandy-brown-4': {
      main: '#f9c190',
    },
    'sandy-brown-5': {
      main: '#f7ac6b',
    },
    'sandy-brown-6': {
      main: '#F59746',
    },
    'sandy-brown-7': {
      main: '#c47938',
    },
    'sandy-brown-8': {
      main: '#935b2a',
    },
    'sandy-brown-9': {
      main: '#623c1c',
    },
    'sandy-brown-10': {
      main: '#311e0e',
    },

    'indian-red-1': {
      main: '#fceeee',
    },
    'indian-red-2': {
      main: '#f8dcdc',
    },
    'indian-red-3': {
      main: '#f1b9b9',
    },
    'indian-red-4': {
      main: '#ea9696',
    },
    'indian-red-5': {
      main: '#e37373',
    },
    'indian-red-6': {
      main: '#DC5050',
    },
    'indian-red-7': {
      main: '#b04040',
    },
    'indian-red-8': {
      main: '#843030',
    },
    'indian-red-9': {
      main: '#582020',
    },
    'indian-red-10': {
      main: '#2c1010',
    },
  },

  space: {
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '16px',
    xl: '24px',
    xl2: '32px',
    xl3: '40px',
    xl4: '48px',
    xl5: '80px',
  },

  radius: {
    s: '4px', // default
    l: '40px',
  },

  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },

  fonts: {
    viga: ['Viga', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    radius: Radius;
    space: SpacingOptions;
    fonts: Fonts;
  }

  interface ThemeOptions {
    radius: Radius;
    space: SpacingOptions;
    fonts: Fonts;
  }

  interface Radius {
    s: string;
    l: string;
  }

  interface SpacingOptions {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xl2: string;
    xl3: string;
    xl4: string;
    xl5: string;
  }

  interface Fonts {
    viga: string;
  }

  interface Palette {
    'amethyst-1': {
      main: string;
    };
    'amethyst-2': {
      main: string;
    };
    'amethyst-3': {
      main: string;
    };
    'amethyst-4': {
      main: string;
    };
    'amethyst-5': {
      main: string;
    };
    'amethyst-6': {
      main: string;
    };
    'amethyst-7': {
      main: string;
    };
    'amethyst-8': {
      main: string;
    };
    'amethyst-9': {
      main: string;
    };
    'amethyst-10': {
      main: string;
    };

    'crayola-blue-1': {
      main: string;
    };
    'crayola-blue-2': {
      main: string;
    };
    'crayola-blue-3': {
      main: string;
    };
    'crayola-blue-4': {
      main: string;
    };
    'crayola-blue-5': {
      main: string;
    };
    'crayola-blue-6': {
      main: string;
    };
    'crayola-blue-7': {
      main: string;
    };
    'crayola-blue-8': {
      main: string;
    };
    'crayola-blue-9': {
      main: string;
    };
    'crayola-blue-10': {
      main: string;
    };

    'picton-blue-1': {
      main: string;
    };
    'picton-blue-2': {
      main: string;
    };
    'picton-blue-3': {
      main: string;
    };
    'picton-blue-4': {
      main: string;
    };
    'picton-blue-5': {
      main: string;
    };
    'picton-blue-6': {
      main: string;
    };
    'picton-blue-7': {
      main: string;
    };
    'picton-blue-8': {
      main: string;
    };
    'picton-blue-9': {
      main: string;
    };
    'picton-blue-10': {
      main: string;
    };

    'sgbus-green-1': {
      main: string;
    };
    'sgbus-green-2': {
      main: string;
    };
    'sgbus-green-3': {
      main: string;
    };
    'sgbus-green-4': {
      main: string;
    };
    'sgbus-green-5': {
      main: string;
    };
    'sgbus-green-6': {
      main: string;
    };
    'sgbus-green-7': {
      main: string;
    };
    'sgbus-green-8': {
      main: string;
    };
    'sgbus-green-9': {
      main: string;
    };
    'sgbus-green-10': {
      main: string;
    };

    'school-bus-yellow-1': {
      main: string;
    };
    'school-bus-yellow-2': {
      main: string;
    };
    'school-bus-yellow-3': {
      main: string;
    };
    'school-bus-yellow-4': {
      main: string;
    };
    'school-bus-yellow-5': {
      main: string;
    };
    'school-bus-yellow-6': {
      main: string;
    };
    'school-bus-yellow-7': {
      main: string;
    };
    'school-bus-yellow-8': {
      main: string;
    };
    'school-bus-yellow-9': {
      main: string;
    };
    'school-bus-yellow-10': {
      main: string;
    };

    'sandy-brown-1': {
      main: string;
    };
    'sandy-brown-2': {
      main: string;
    };
    'sandy-brown-3': {
      main: string;
    };
    'sandy-brown-4': {
      main: string;
    };
    'sandy-brown-5': {
      main: string;
    };
    'sandy-brown-6': {
      main: string;
    };
    'sandy-brown-7': {
      main: string;
    };
    'sandy-brown-8': {
      main: string;
    };
    'sandy-brown-9': {
      main: string;
    };
    'sandy-brown-10': {
      main: string;
    };

    'indian-red-1': {
      main: string;
    };
    'indian-red-2': {
      main: string;
    };
    'indian-red-3': {
      main: string;
    };
    'indian-red-4': {
      main: string;
    };
    'indian-red-5': {
      main: string;
    };
    'indian-red-6': {
      main: string;
    };
    'indian-red-7': {
      main: string;
    };
    'indian-red-8': {
      main: string;
    };
    'indian-red-9': {
      main: string;
    };
    'indian-red-10': {
      main: string;
    };
  }

  interface PaletteOptions {
    'amethyst-1'?: {
      main?: string;
    };
    'amethyst-2'?: {
      main?: string;
    };
    'amethyst-3'?: {
      main?: string;
    };
    'amethyst-4'?: {
      main?: string;
    };
    'amethyst-5'?: {
      main?: string;
    };
    'amethyst-6'?: {
      main?: string;
    };
    'amethyst-7'?: {
      main?: string;
    };
    'amethyst-8'?: {
      main?: string;
    };
    'amethyst-9'?: {
      main?: string;
    };
    'amethyst-10'?: {
      main?: string;
    };

    'crayola-blue-1'?: {
      main?: string;
    };
    'crayola-blue-2'?: {
      main?: string;
    };
    'crayola-blue-3'?: {
      main?: string;
    };
    'crayola-blue-4'?: {
      main?: string;
    };
    'crayola-blue-5'?: {
      main?: string;
    };
    'crayola-blue-6'?: {
      main?: string;
    };
    'crayola-blue-7'?: {
      main?: string;
    };
    'crayola-blue-8'?: {
      main?: string;
    };
    'crayola-blue-9'?: {
      main?: string;
    };
    'crayola-blue-10'?: {
      main?: string;
    };

    'picton-blue-1'?: {
      main?: string;
    };
    'picton-blue-2'?: {
      main?: string;
    };
    'picton-blue-3'?: {
      main?: string;
    };
    'picton-blue-4'?: {
      main?: string;
    };
    'picton-blue-5'?: {
      main?: string;
    };
    'picton-blue-6'?: {
      main?: string;
    };
    'picton-blue-7'?: {
      main?: string;
    };
    'picton-blue-8'?: {
      main?: string;
    };
    'picton-blue-9'?: {
      main?: string;
    };
    'picton-blue-10'?: {
      main?: string;
    };

    'sgbus-green-1'?: {
      main?: string;
    };
    'sgbus-green-2'?: {
      main?: string;
    };
    'sgbus-green-3'?: {
      main?: string;
    };
    'sgbus-green-4'?: {
      main?: string;
    };
    'sgbus-green-5'?: {
      main?: string;
    };
    'sgbus-green-6'?: {
      main?: string;
    };
    'sgbus-green-7'?: {
      main?: string;
    };
    'sgbus-green-8'?: {
      main?: string;
    };
    'sgbus-green-9'?: {
      main?: string;
    };
    'sgbus-green-10'?: {
      main?: string;
    };

    'school-bus-yellow-1'?: {
      main?: string;
    };
    'school-bus-yellow-2'?: {
      main?: string;
    };
    'school-bus-yellow-3'?: {
      main?: string;
    };
    'school-bus-yellow-4'?: {
      main?: string;
    };
    'school-bus-yellow-5'?: {
      main?: string;
    };
    'school-bus-yellow-6'?: {
      main?: string;
    };
    'school-bus-yellow-7'?: {
      main?: string;
    };
    'school-bus-yellow-8'?: {
      main?: string;
    };
    'school-bus-yellow-9'?: {
      main?: string;
    };
    'school-bus-yellow-10'?: {
      main?: string;
    };

    'sandy-brown-1'?: {
      main?: string;
    };
    'sandy-brown-2'?: {
      main?: string;
    };
    'sandy-brown-3'?: {
      main?: string;
    };
    'sandy-brown-4'?: {
      main?: string;
    };
    'sandy-brown-5'?: {
      main?: string;
    };
    'sandy-brown-6'?: {
      main?: string;
    };
    'sandy-brown-7'?: {
      main?: string;
    };
    'sandy-brown-8'?: {
      main?: string;
    };
    'sandy-brown-9'?: {
      main?: string;
    };
    'sandy-brown-10'?: {
      main?: string;
    };

    'indian-red-1'?: {
      main?: string;
    };
    'indian-red-2'?: {
      main?: string;
    };
    'indian-red-3'?: {
      main?: string;
    };
    'indian-red-4'?: {
      main?: string;
    };
    'indian-red-5'?: {
      main?: string;
    };
    'indian-red-6'?: {
      main?: string;
    };
    'indian-red-7'?: {
      main?: string;
    };
    'indian-red-8'?: {
      main?: string;
    };
    'indian-red-9'?: {
      main?: string;
    };
    'indian-red-10'?: {
      main?: string;
    };
  }
}
