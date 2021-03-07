import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled.View.attrs(({ theme }) => ({
  paddingHorizontal: 10,
  ...theme.boxShadow,
}))`
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.primary.surface};
  height: 60px;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const Center = styled.View`
  flex: 4;
  justify-content: center;
  align-items: flex-start;
`;

export const Right = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.subtitle};
`;

export const Button = styled(RectButton)`
  width: 42px;
  height: 42px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.surface};
`;

export const Profile = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Icon = styled(SimpleLineIcons)``;
