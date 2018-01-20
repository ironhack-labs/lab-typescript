// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
export interface itemInterface {
  taskTitle:     string;
  done:          boolean;
  updatedAt:     Date;
  toggle():      void;
}

//not sure if this will help me fix the --->exports.__esModule = true; line that I keep getting
// this import idea got it from Gus, so that my results don't just show up as object,object.
import { TodoItem } from './main'
// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
export interface listInterface {
  itemList:                        TodoItem[];
  addTask(task: TodoItem ):        number;
  listAllTasks():                  number;
  deleteTask(task: TodoItem ):     number;
  showPending():                   void;
}
