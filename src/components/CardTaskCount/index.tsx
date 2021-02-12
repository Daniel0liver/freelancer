import React, { useState } from 'react';

import { CardStateProps, ICardProps } from './types';
import { Container, Card, Title, Subtitle } from './styles';

export default function CardTaskCount({ onChange }: ICardProps) {
  const [activeCard, setActiveCard] = useState<CardStateProps>('active');

  const handleChange = (type: CardStateProps) => {
    setActiveCard(type);
    onChange(type);
  };

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
      <Card onPress={() => handleChange('active')} isActive={hasActive()}>
        <Title isActive={hasActive()}>18</Title>
        <Subtitle isActive={hasActive()}>Active</Subtitle>
      </Card>
      <Card onPress={() => handleChange('ongoing')} isActive={hasOngoing()}>
        <Title isActive={hasOngoing()}>13</Title>
        <Subtitle isActive={hasOngoing()}>Ongoing</Subtitle>
      </Card>
      <Card onPress={() => handleChange('done')} isActive={hasDone()}>
        <Title isActive={hasDone()}>5</Title>
        <Subtitle isActive={hasDone()}>Done</Subtitle>
      </Card>
    </Container>
  );
}
