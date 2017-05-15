// Write the interface for class Todo. It must have:
// - An array of strings as a property.

export interface TodoInterface {
  todos: Array<String>;
  addTask(todo: string):void;
  listAllTasks():void;
  deleteTask(todo:string):void;
}



