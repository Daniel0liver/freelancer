import { actives, ongoings, dones } from './data';
import { IDataState } from '../../pages/Dashboard/types';

export default {
  getActiveTasks: () => {
    return new Promise<IDataState>((resolve) => {
      setTimeout(() => {
        resolve(actives);
      }, 1000);
    });
  },

  getOngoingTasks: () => {
    return new Promise<IDataState>((resolve) => {
      setTimeout(() => {
        resolve(ongoings);
      }, 1000);
    });
  },

  getDoneTasks: () => {
    return new Promise<IDataState>((resolve) => {
      setTimeout(() => {
        resolve(dones);
      }, 1000);
    });
  },
};
