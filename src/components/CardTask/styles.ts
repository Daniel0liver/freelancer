import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View.attrs({
  marginVertical: 10,
})``;

export const Card = styled(RectButton).attrs(({ theme }) => ({
  borderRadius: theme.borderRadius,
  underlayColor: theme.palette.primary.main,
  padding: 20,
  ...theme.boxShadow,
}))`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.surface};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Subtitle = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.subtitle};
`;

export const Date = styled(Subtitle)`
  margin-top: 0px;
`;
