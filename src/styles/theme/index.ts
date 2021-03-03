import React, { useMemo } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { lightColors, darkColors } from './colors';
import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: 20,
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  ...lightColors,
};

const darkTheme: DefaultTheme = {
  borderRadius: 20,
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  ...darkColors,
};

export const useTheme = () => {
  const deviceTheme: ColorSchemeName = useColorScheme();

  const theme = useMemo(() => {
    if (deviceTheme === 'dark') {
      return darkTheme
    } else {
      return lightTheme
    }
  }, [deviceTheme])

  return theme;
}
