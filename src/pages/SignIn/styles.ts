import styled from 'styled-components/native';
import { ImageProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export const SafeAreaView = styled.SafeAreaView.attrs({
  paddingHorizontal: 20,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.background};
`;

export const ImageContainer = styled.View`
  margin-top: 30px;
`;

export const Image = styled.Image<ImageProps>``;

export const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Button = styled(RectButton)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 54px;
  height: 54px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const ArrowLeftIcon = styled(AntDesignIcons).attrs(({ theme }) => ({
  name: 'arrowright',
  size: 28,
  color: theme.palette.common.white,
}))``;
