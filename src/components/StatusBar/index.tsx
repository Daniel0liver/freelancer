import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBarProps } from 'react-native';
import { StatusBar } from './styles';

export default function CustomStatusBar({
  barStyle,
  backgroundColor,
}: StatusBarProps) {
  const theme = useTheme();
  const defaultBarStyled = theme.dark ? 'dark-content' : 'light-content';

  return (
    <StatusBar
      barStyle={barStyle ?? defaultBarStyled}
      backgroundColor={backgroundColor || theme.palette.primary.surface}
    />
  );
}
