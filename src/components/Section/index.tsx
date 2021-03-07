import React from 'react';

import { Container, Title } from './styles';

interface ISectionProps {
  title: string;
  children: Array<React.ReactElement>;
}

export default function Section({ title, children }: ISectionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
