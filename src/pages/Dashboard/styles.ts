import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))``;

export const Header = styled.View.attrs({
  padding: 16,
})`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ContainerTitle = styled.View.attrs({
  padding: 16,
})``;

export const WelcomeUser = styled.Text.attrs({
  fontSize: 30,
})`
  font-size: 30px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

// Icons
export const MenuIcon = styled(MaterialCommunityIcons).attrs({
  name: 'text',
  size: 30,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const NotificationIcon = styled(MaterialCommunityIcons).attrs({
  name: 'bell-outline',
  size: 30,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const UserIcon = styled(AntDesignIcons).attrs({
  name: 'user',
  size: 30,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SearchIcon = styled(MaterialCommunityIcons).attrs({
  name: 'magnify',
  size: 30,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
