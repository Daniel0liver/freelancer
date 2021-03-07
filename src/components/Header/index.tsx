import React from 'react';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';
import { StackHeaderProps } from '@react-navigation/stack';

import {
  Container,
  Left,
  Center,
  Right,
  Button,
  Profile,
  Icon,
  Title,
  Subtitle,
} from './styles';

type THeaderProps = Omit<
  StackHeaderProps,
  'mode' | 'layout' | 'insets' | 'styleInterpolator'
>;

export default function Header({ scene, navigation, previous }: THeaderProps) {
  const theme = useTheme();

  const { options } = scene.descriptor;
  const { name } = scene.route;
  const title = options.title;
  const headerRight = options.headerRight;

  return (
    <Container>
      <Left>
        {previous ? (
          <Button onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={20}
              color={theme.palette.primary.contrastText}
            />
          </Button>
        ) : (
          <Profile>
            <Icon
              name="emotsmile"
              size={20}
              color={theme.palette.common.white}
            />
          </Profile>
        )}
      </Left>
      <Center>
        {name === 'Dashboard' && (
          <Subtitle>{format(new Date(), 'ccc, dd LLLL yyyy')}</Subtitle>
        )}
        <Title>{title}</Title>
      </Center>
      <Right>{(headerRight && headerRight()) || null}</Right>
    </Container>
  );
}
