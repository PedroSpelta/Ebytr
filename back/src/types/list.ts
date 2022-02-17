export interface ITask {
  createdAt: string,
  message: string, 
  status: string;
}

export interface IList {
  listId: number,
  title: string, 
  tasks: Array<ITask>;
}

