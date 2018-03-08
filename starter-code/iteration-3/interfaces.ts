// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.

export interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus():void;
}

export interface TodoListInterface {
  todoList: string[];
  addTask(todoItem:string):number;
  listAllTasks():void;
  deleteTask(todoItem:string):number;
  showPendingTasks():void;
}




