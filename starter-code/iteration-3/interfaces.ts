// Write the interface for class TodoItem. It must have:
export interface ITodoItem {
  title: string;
  done: boolean;
  updatedAt: Date;
  toogle(): void;
}

export interface ITodoList {
  todoItems: ITodoItem[];
  addTask(task: ITodoItem): number;
  listAllTasks(): void;
  deleteTask(task: ITodoItem): number;
  listUncomplete(): void;
}
// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
