import React, { useState } from 'react';

import Api from '../../services/Api';

import CardTaskCount from '../../components/CardTaskCount';
import CardTask from '../../components/CardTask';
import ScrollView from '../../components/ScrollView';
import Section from '../../components/Section';
import StatusBar from '../../components/StatusBar';

import { CardStateProps } from '../../components/CardTaskCount/types';
import { IDataState } from './types';

import { SafeAreaView } from './styles';

export default function Dashboard() {
  const [data, setData] = useState<IDataState>([]);
  const [cardActive, setCardActive] = useState<CardStateProps>(null);

  const handleChangeCard = async (card: CardStateProps) => {
    setCardActive(card);

    if (card === 'active') setData(await Api.getActiveTasks());
    if (card === 'ongoing') setData(await Api.getOngoingTasks());
    if (card === 'done') setData(await Api.getDoneTasks());
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <CardTaskCount key={0} activeLength={12} ongoingLength={8} doneLength={4} onChange={handleChangeCard} />
        <Section title={`${cardActive} tasks`}>
          {data.map((item, index) => {
            return <CardTask key={index} data={item} />;
          })}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}
