import React from 'react';

import { ICardTaskProps } from './types';
import { Container, Card, Title, Date, Subtitle } from './styles';

export default function CardTask({ data }: ICardTaskProps) {
  return (
    <Container>
      <Card onPress={() => {}}>
        <Title>{data.title}</Title>
        <Date>{data.date}</Date>
        <Subtitle>{data.description}</Subtitle>
      </Card>
    </Container>
  );
}
