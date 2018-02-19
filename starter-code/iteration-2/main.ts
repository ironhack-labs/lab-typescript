// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';
let interfaceImport: TodoInterface;
// 1. Create a class Todo that implements the Interface created before.
class Todo {
  taskList: Array<string>;
  constructor(task:Array<string>) { };
  addTask(task:string): number {
    console.log("====== NEW TASK ======");
    console.log(`Task ${task} added to the list`);
    console.log("Number of items: " + this.taskList.length);
    return this.taskList.length;
  }
  listAllTasks (): void {
    for (let i:number = 0; i < this.taskList.length; i++) console.log(this.taskList[i]);
  }
  deleteTask (task:string): number {
    let index:number = this.taskList.indexOf(task);
    this.taskList.splice(index);
    console.log("====== TASK REMOVED ======");
    console.log(`Task ${task} removed from the list`);
    console.log("Number of items: " + this.taskList.length);
    return this.taskList.length;
  }
}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();


