import React from 'react';
import { useTheme } from 'styled-components';

import StatusBar from '../../components/StatusBar';

import { DashboardScreenNavigationProp } from '../../navigation/types';

import Tasksimage from '../../assets/images/TaskList.svg';

import {
  SafeAreaView,
  ImageContainer,
  Footer,
  TitleContainer,
  ButtonContainer,
  Title,
  SubTitle,
  Button,
  ButtonSignIn,
  Label,
} from './styles';

interface IOnBoard {
  navigation: DashboardScreenNavigationProp;
}

export default function OnBoard({ navigation }: IOnBoard) {
  const theme = useTheme();

  const goToDashboard = () => navigation.replace('Dashboard');

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.palette.primary.main}
      />
      <ImageContainer>
        <Tasksimage width={'100%'} height={'75%'} />
      </ImageContainer>
      <Footer>
        <TitleContainer>
          <Title>Hi, Freelancer</Title>
          <SubTitle>Finish your work</SubTitle>
        </TitleContainer>
        <ButtonContainer>
          <Button onPress={() => goToDashboard()}>
            <Label>Get started now</Label>
          </Button>
          <ButtonSignIn onPress={() => { }}>
            <Label>i am already registered</Label>
          </ButtonSignIn>
        </ButtonContainer>
      </Footer>
    </SafeAreaView>
  );
}
