// Write the interface for class TodoItem. It must have:
interface TodoItemInterface {
  // - A title of the task as a property.
  title: string;

  // - A boolean to mark if it's done.
  done: boolean;

  // - A property updatedAt, obiously is a date.
  updatedAt: Date;

  // - Method for toogle if it's done or not, doesn't return anything.
  toggleDone(): void;
}

// Write the interface for class Todo. It must have:
interface TodoInterface {
  // - An array of TodoItem as a property.
  tasks: Array<TodoItemInterface>;

  // - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
  addTask(task: TodoItemInterface): void;

  // - Method for listing all task in the console, doesn't return anything.
  listAllTasks(): void;

  // - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
  deleteTask(task: TodoItemInterface): void;

  // - Method for show all tasks that are not yet done, doesn't return anything.
  listUncomplete(): void;
}

export {TodoItemInterface, TodoInterface}