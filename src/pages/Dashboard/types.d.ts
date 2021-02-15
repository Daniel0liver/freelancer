import { DashboardScreenNavigationProp } from '../../navigation/types';

export interface ITask {
  id: number;
  title: string;
  description: string;
  date: string;
  color: string;
  icon: string;
}

export interface IDataState extends Array<ITask> { }

export interface IDashboard {
  navigation: DashboardScreenNavigationProp;
}