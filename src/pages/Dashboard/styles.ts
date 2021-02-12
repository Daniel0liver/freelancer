import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView.attrs({
  paddingHorizontal: 15,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.background};
`;
