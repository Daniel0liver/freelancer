import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { ICardStyles } from './types';

export const Container = styled.View.attrs({
  marginVertical: 25,
})`
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled(RectButton).attrs(({ theme }) => ({
  borderRadius: theme.borderRadius,
  ...theme.boxShadow,
}))<ICardStyles>`
  width: 30%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.main : theme.palette.primary.surface};
`;

export const Title = styled.Text<ICardStyles>`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.common.white : theme.palette.primary.contrastText};
`;

export const Subtitle = styled.Text<ICardStyles>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.common.white : theme.palette.primary.contrastText};
`;
