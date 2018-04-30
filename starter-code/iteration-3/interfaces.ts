export interface TodoItemInterface {
// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
  title: String;
// - A boolean to mark if it's done.
  status: Boolean;
// - A property updatedAt, obiously is a date.
  updatedAt: Date;
// - Method for toogle if it's done or not, doesn't return anything.
  toggleStatus():void;
}

export interface TodoListInterface {
// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
  TodoItems: Array<TodoItemInterface>;
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
  addTask(task:TodoItemInterface ):number
// - Method for listing all task in the console, doesn't return anything.
  listAllTasks():void
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
  deleteTask(task:TodoItemInterface): number
// - Method for show all tasks that are not yet done, doesn't return anything.
}

