// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  background: string;
  surface: string;
  contrastText: string;
  subtitle: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;
    borderRadius: number;
    boxShadow: object;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
