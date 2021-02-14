import React, { useState, useEffect } from 'react';

import { CardStateProps, ICardTaskCountProps } from './types';
import { Container, Card, Title, Subtitle } from './styles';

export default function CardTaskCount({ onChange }: ICardTaskCountProps) {
  const [activeCard, setActiveCard] = useState<CardStateProps>('active');

  useEffect(() => {
    onChange(activeCard);
  }, [activeCard]);

  const hasActive = () => {
    return activeCard === 'active';
  };

  const hasOngoing = () => {
    return activeCard === 'ongoing';
  };

  const hasDone = () => {
    return activeCard === 'done';
  };

  return (
    <Container>
      <Card onPress={() => setActiveCard('active')} isActive={hasActive()}>
        <Title isActive={hasActive()}>18</Title>
        <Subtitle isActive={hasActive()}>Active</Subtitle>
      </Card>
      <Card onPress={() => setActiveCard('ongoing')} isActive={hasOngoing()}>
        <Title isActive={hasOngoing()}>13</Title>
        <Subtitle isActive={hasOngoing()}>Ongoing</Subtitle>
      </Card>
      <Card onPress={() => setActiveCard('done')} isActive={hasDone()}>
        <Title isActive={hasDone()}>5</Title>
        <Subtitle isActive={hasDone()}>Done</Subtitle>
      </Card>
    </Container>
  );
}
