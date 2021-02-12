import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OnBoard from './pages/OnBoard';
import Dashboard from './pages/Dashboard';

import { Stack } from './navigation';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoard">
        <Stack.Screen
          name="onBoard"
          component={OnBoard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
