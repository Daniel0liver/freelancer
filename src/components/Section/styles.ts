import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
