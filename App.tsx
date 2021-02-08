import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './src/pages/Dashboard';
import { defaultTheme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
