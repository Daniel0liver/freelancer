import React from 'react';
import StatusBar from '../../components/StatusBar';
import { SafeAreaView } from './styles';

export default function Dashboard() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
