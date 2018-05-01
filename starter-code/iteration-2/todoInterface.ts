export interface TodoInterface {

  // Write the interface for class Todo. It must have:
  // - An array of strings as a property.
  tasksArr: Array<String>;
// - Method for adding task where will receive a string, doesn't return anything.
  addTask(task: string):number;
// - Method for listing all task in the console, doesn't return anything.
  listAllTasks():void;
// - Method for delete a task where will receive a string, doesn't return anything.
  deleteTask(task: string): number;

}