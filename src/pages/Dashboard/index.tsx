import React from 'react';
import StatusBar from '../../components/StatusBar';
import CardTaskCount from '../../components/CardTaskCount';

import { CardStateProps } from '../../components/CardTaskCount/types';

import { SafeAreaView } from './styles';

export default function Dashboard() {
  const handleChangeCard = (card: CardStateProps) => {
    console.log(card);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <CardTaskCount onChange={handleChangeCard} />
    </SafeAreaView>
  );
}
