import styled, { css } from 'styled-components/native';

interface IFocusProps {
  isFocused: boolean;
}

export const Container = styled.View`
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const Label = styled.Text<IFocusProps>`
  ${({ isFocused, theme }) =>
    css`
      position: absolute;
      left: 0;
      top: ${isFocused ? '0px' : '10px'};
      font-size: ${isFocused ? '14px' : '16px'};
      color: ${isFocused
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText};
    `}
`;

export const Input = styled.TextInput<IFocusProps>`
  ${({ isFocused, theme }) =>
    css`
      height: 46px;
      font-size: 16px;
      color: ${theme.palette.primary.contrastText};
      border-bottom-width: ${isFocused ? '2px' : '1px'};
      border-bottom-color: ${isFocused ? theme.palette.primary.main : '#555'};
    `}
`;
