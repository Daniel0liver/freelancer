import { lightColors, darkColors } from './colors';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
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

export { theme };
