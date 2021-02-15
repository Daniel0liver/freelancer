import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Onboard: undefined;
  Settings: undefined;
};

export type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;
