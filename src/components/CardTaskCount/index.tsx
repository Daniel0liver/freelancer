import React, { useState, useEffect } from 'react';

import { CardStateProps, ICardTaskCountProps } from './types';
import { Container, Card, Title, Subtitle } from './styles';

export default function CardTaskCount({ activeLength, ongoingLength, doneLength, onChange }: ICardTaskCountProps) {
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
        <Title isActive={hasActive()}>{activeLength}</Title>
        <Subtitle isActive={hasActive()}>Active</Subtitle>
      </Card>
      <Card onPress={() => setActiveCard('ongoing')} isActive={hasOngoing()}>
        <Title isActive={hasOngoing()}>{ongoingLength}</Title>
        <Subtitle isActive={hasOngoing()}>Ongoing</Subtitle>
      </Card>
      <Card onPress={() => setActiveCard('done')} isActive={hasDone()}>
        <Title isActive={hasDone()}>{doneLength}</Title>
        <Subtitle isActive={hasDone()}>Done</Subtitle>
      </Card>
    </Container>
  );
}
