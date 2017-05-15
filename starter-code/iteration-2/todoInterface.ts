// Write the interface for class Todo. It must have:
export interface interfaceToDo {
  toDoArray: Array<string>;
  addToList(task:string):number;
  listTasks():void;
  deleteOneTask(task:string):number;
}


// - An array of strings as a property.
// - Method for adding task where will receive a string, returns a number.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string,  returns a number.
