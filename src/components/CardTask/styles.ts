import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.primary.surface};
`;

export const Left = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const Right = styled(Left)`
  flex: 4;
`;

export const Icon = styled(SimpleLineIcons)`
  padding: 14px 15px;
  border-radius: 100px;
  color: #ffffff;
  background: ${({ color }) => color};
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
