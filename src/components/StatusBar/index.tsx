import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBarProps } from 'react-native';
import { StatusBar } from './styles';

export default function CustomStatusBar({
  barStyle,
  backgroundColor,
}: StatusBarProps) {
  const theme = useTheme();

  return (
    <StatusBar
      barStyle={barStyle || 'dark-content'}
      backgroundColor={backgroundColor || theme.palette.primary.surface}
    />
  );
}
