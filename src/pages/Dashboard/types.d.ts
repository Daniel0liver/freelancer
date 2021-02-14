export interface ITask {
  id: number;
  title: string;
  description: string;
  date: string;
  color: string;
  icon: string;
}

export interface IDataState extends Array<ITask> {}
