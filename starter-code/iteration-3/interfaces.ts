export interface TodoItemInterface{
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus(task): boolean;
}

export interface TodoListInterface{
  title: string;
  updatedAt: Date;
  todoItem: Array<string>;
  addTask(todoItem): number;
  listAllTasks():void;
  deleteTask(todoItem):number;
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
