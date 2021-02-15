import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header'

import OnBoard from './pages/OnBoard';
import Dashboard from './pages/Dashboard';

import { Stack } from './navigation';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoard" screenOptions={{
        header: ({ scene, navigation, previous }) => (
          <Header scene={scene} navigation={navigation} previous={previous} />
        )
      }}>
        <Stack.Screen
          name="onBoard"
          component={OnBoard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="dashboard" component={Dashboard} options={{
          title: 'Hi, Daniel Oliveira'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
