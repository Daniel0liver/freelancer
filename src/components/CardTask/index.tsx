import React from 'react';

import { ICardTaskProps } from './types';
import {
  Container,
  Card,
  Left,
  Right,
  Icon,
  Title,
  Date,
  Subtitle,
} from './styles';

export default function CardTask({ data }: ICardTaskProps) {
  return (
    <Container>
      <Card onPress={() => {}}>
        <Left>
          <Icon name={data.icon} size={22} color={data.color} />
        </Left>
        <Right>
          <Title>{data.title}</Title>
          <Date>{data.date}</Date>
          <Subtitle>{data.description}</Subtitle>
        </Right>
      </Card>
    </Container>
  );
}
