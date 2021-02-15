import React from 'react';
import { format } from 'date-fns'

import { StackHeaderProps } from '@react-navigation/stack';

import { Container, Left, Center, Right, Button, Profile, Icon, Title, Subtitle } from './styles';

type THeaderProps = Omit<StackHeaderProps, "mode" | "layout" | "insets" | "styleInterpolator">

export default function Header({ scene, navigation, previous }: THeaderProps) {
  const { options } = scene.descriptor;
  const title = options.title;

  return (
    <Container>
      <Left>
        <Profile>
          <Icon name="emotsmile" size={22} color="#fff" />
        </Profile>
      </Left>
      <Center>
        <Subtitle>{format(new Date(), 'ccc, dd LLLL yyyy')}</Subtitle>
        <Title>{title}</Title>
      </Center>
      <Right>
        <Button>
          <Icon name="settings" size={22} color="#000" />
        </Button>
      </Right>
    </Container>
  )
}