// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.

export interface InterfaceTodoItem {
  title:String;
  status:boolean;
  updatedAt:Date;
  toggleStatus():void;
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task that will receive an instance of TodoItem, returns number.
// - Method for listing all task in the console, doesn't return anything.
// - Method for deleting a task that will receive an instance of TodoItem, the number of elements in the list.
// - Method for show all tasks that are not yet done, doesn't return anything.

export interface interfaceTodo{
  todoItems: Array<InterfaceTodoItem>;
  addTask(task:InterfaceTodoItem):number;
  listAllTasks(tasks:Array<InterfaceTodoItem>):void;
  deleteTask(task:InterfaceTodoItem):number;
  listUncomplete(tasks:Array<InterfaceTodoItem>):void;
}
