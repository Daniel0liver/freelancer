import React from 'react';
import { View, Text } from 'react-native';

import ScrollView from '../../components/ScrollView';
import StatusBar from '../../components/StatusBar';

import { SafeAreaView } from './styles';

export default function Settings() {
  const data = [{ title: 'Theme' }, { title: 'Language' }, { title: 'Premium' }]
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
