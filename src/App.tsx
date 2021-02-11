import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import { lightTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
