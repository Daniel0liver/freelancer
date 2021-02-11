import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import { defaultTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
