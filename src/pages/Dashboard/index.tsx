import React, { useState } from 'react';

import Api from '../../services/Api';

import CardTaskCount from '../../components/CardTaskCount';
import CardTask from '../../components/CardTask';
import ScrollView from '../../components/ScrollView';
import StatusBar from '../../components/StatusBar';

import { CardStateProps } from '../../components/CardTaskCount/types';
import { IDataState } from './types';

import { SafeAreaView } from './styles';

export default function Dashboard() {
  const [data, setData] = useState<IDataState>([]);

  const handleChangeCard = async (card: CardStateProps) => {
    if (card === 'active') {
      const active = await Api.getActiveTasks();
      setData(active);
    } else if (card === 'ongoing') {
      const ongoing = await Api.getOngoingTasks();
      setData(ongoing);
    } else {
      const done = await Api.getDoneTasks();
      setData(done);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <CardTaskCount key={0} onChange={handleChangeCard} />
        {data.map((item, index) => {
          return <CardTask key={index} data={item} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
