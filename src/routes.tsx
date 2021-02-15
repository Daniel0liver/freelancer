import React, { useRef } from 'react';
import { useTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { Stack } from './navigation';

import Header from './components/Header'

import OnBoard from './pages/OnBoard';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

import { Button, Icon } from './components/Header/styles';


export default function Routes() {
  const theme = useTheme();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="OnBoard" screenOptions={{
        header: ({ scene, navigation, previous }) => (
          <Header scene={scene} navigation={navigation} previous={previous} />
        )
      }}>
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Hi, Daniel Oliveira',
            headerRight: () => (
              <Button onPress={() => navigationRef.current?.navigate('Settings')}>
                <Icon name="settings" size={20} color={theme.palette.primary.contrastText} />
              </Button>
            )
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
