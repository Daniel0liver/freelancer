import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#222831',
      white: '#FFFFFF',
    },
    primary: {
      main: '#6C63FF',
      surface: '#FFFFFF',
      background: '#F5F6FC',
      contrastText: '#000000DE',
    },
    secondary: {
      main: '#F9A826',
      surface: '#FFFFFF',
      background: '#F5F6FC',
      contrastText: '#000000DE',
    },
  },
};

export const darkTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#222831',
      white: '#FFFFFF',
    },
    primary: {
      main: '#6C63FF',
      surface: '#333333',
      background: '#202020',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F9A826',
      surface: '#333333',
      background: '#202020',
      contrastText: '#FFFFFF',
    },
  },
};
