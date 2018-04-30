export interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus(): void;
}
export interface TodoListInterface {
  array: Array<Object>;
  addTask(todoItem: Object): number;
  listAllTasks(): void;
  deleteTask(todoItem: Object): number;
  
}
