import React from 'react';
import { ScrollView, Animated, ScrollViewProps } from 'react-native';

interface IScrollViewProps {
  children: ScrollViewProps;
}

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function CustomScrollView({ children }: IScrollViewProps) {
  return (
    <AnimatedScrollView
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}>
      {children}
    </AnimatedScrollView>
  );
}
