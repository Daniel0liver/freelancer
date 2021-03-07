import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))``;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  flex: 1;
  padding: 0px 30px;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  height: 48px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignIn = styled(Button)`
  background-color: transparent;
  margin-top: 10px;
  height: 48px;
  border-radius: 100px;
`;

export const Label = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.common.white};
`;
