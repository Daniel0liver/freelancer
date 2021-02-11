import React from 'react';

import Tasksimage from '../../assets/images/TaskList.svg';

import {
  SafeAreaView,
  StatusBar,
  ImageContainer,
  Footer,
  TitleContainer,
  ButtonContainer,
  Title,
  SubTitle,
  Button,
  FooterLink,
} from './styles';

export default function OnBoard() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ImageContainer>
        <Tasksimage width={'100%'} height={'75%'} />
      </ImageContainer>
      <Footer>
        <TitleContainer>
          <Title>Hi, Freelancer</Title>
          <SubTitle>Finish your work</SubTitle>
        </TitleContainer>
        <ButtonContainer>
          <Button>
            <SubTitle>Get started now</SubTitle>
          </Button>
          <FooterLink>Do you have on account? login</FooterLink>
        </ButtonContainer>
      </Footer>
    </SafeAreaView>
  );
}
