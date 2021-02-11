import React from 'react';
import { ThemeProvider } from 'styled-components';

import OnBoard from './pages/OnBoard';
import { lightTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <OnBoard />
    </ThemeProvider>
  );
}
