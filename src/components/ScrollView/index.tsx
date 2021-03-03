import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

interface IScrollViewProps {
  children: ScrollViewProps;
}

export default function CustomScrollView({ children }: IScrollViewProps) {
  return (
    <ScrollView
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}>
      {children}
    </ScrollView>
  );
}
