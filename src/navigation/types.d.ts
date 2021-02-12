import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  dashboard: undefined;
  onboard: undefined;
};

export type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'dashboard'
>;
