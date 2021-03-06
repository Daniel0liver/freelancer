import { DefaultTheme } from 'styled-components';

export const lightColors: Omit<DefaultTheme, 'borderRadius' | 'boxShadow'> = {
  dark: false,
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
      subtitle: '#8c8c8c',
    },
    secondary: {
      main: '#F9A826',
      surface: '#FFFFFF',
      background: '#F5F6FC',
      contrastText: '#000000DE',
      subtitle: '#8c8c8c',
    },
  },
};

export const darkColors: Omit<DefaultTheme, 'borderRadius' | 'boxShadow'> = {
  dark: true,
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
      subtitle: '#8c8c8c',
    },
    secondary: {
      main: '#F9A826',
      surface: '#333333',
      background: '#202020',
      contrastText: '#FFFFFF',
      subtitle: '#8c8c8c',
    },
  },
};
