import { ITask } from '../../pages/Dashboard/types';

export interface ICardTaskProps {
  data: ITask;
}

export type CardStateProps = 'active' | 'ongoing' | 'done';
