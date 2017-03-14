// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
interface todoInterface {
  myArray: Array<string>;
  addTask(oneTask:string):number; //inside of paranthesis control input type, Out of parathesis output type.
  listAllTasks():void; //Output: return nothing.
  deleteTask(oneTask:string):number;
}

export { todoInterface };
