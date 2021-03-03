import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { useTheme } from './styles/theme';

export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
