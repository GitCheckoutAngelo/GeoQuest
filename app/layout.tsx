'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './globals.scss';
import theme from './theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body suppressHydrationWarning={true}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
