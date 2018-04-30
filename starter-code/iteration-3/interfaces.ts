// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toggle if it's done or not, doesn't return anything.

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.

export interface ItemInterface {
  title: string;
  check: boolean;
  updatedAt: String;

  toggle();

}


export interface TodoInterface {
  myArray: Array<string>; 

  addTask(task: string);
  listAllTasks();
  deleteTask(task: string);
  listUncomplete();

};