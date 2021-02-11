import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View.attrs({
  paddingVertical: 0,
  borderRadius: 40,
  marginVertical: 20,
  paddingLeft: 10,
})`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.tint};
`;

export const Input = styled.TextInput.attrs({
  flex: 1,
  paddingLeft: 10,
  marginRight: 20,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const MicrofoneIcon = styled(MaterialCommunityIcons).attrs({
  name: 'microfonw',
  size: 25,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const FilterIcon = styled(MaterialCommunityIcons).attrs({
  name: 'tune',
  size: 25,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SearchIcon = styled(MaterialCommunityIcons).attrs({
  name: 'magnify',
  size: 25,
})`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
