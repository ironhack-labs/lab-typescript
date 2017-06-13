// Write the interface for class TodoItem. It must have:
interface ToItem {

// - A title of the task as a property.
 tittle:string;
// - A boolean to mark if it's done.
status:boolean;
// - A property updatedAt, obiously is a date.
updatedAt:number;
// - Method for toogle if it's done or not, doesn't return anything.
onORoff():void;
}

// Write the interface for class Todo. It must have:
interface To{
  // - An array of TodoItem as a property.
  lists:Array<string>;
  // - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
addTask(name):void;
// - Method for listing all task in the console, doesn't return anything.
listAllTasks():void;
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
deleteTask(name):void;
// - Method for showw all tasks that are not yet done, doesn't return anything.
listUncomplete():void;
}
