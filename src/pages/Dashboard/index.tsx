import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Header,
  HeaderLeft,
  HeaderRight,
  ContainerTitle,
  WelcomeUser,
  MenuIcon,
  NotificationIcon,
  UserIcon,
} from './styles';

export default function Dashboard() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Header>
        <HeaderLeft>
          <MenuIcon />
        </HeaderLeft>
        <HeaderRight>
          <NotificationIcon />
          <UserIcon />
        </HeaderRight>
      </Header>
      <ContainerTitle>
        <WelcomeUser>{'Hello,\nDaniel Oliveira'}</WelcomeUser>
      </ContainerTitle>
    </SafeAreaView>
  );
}
