// Add the reference to the interface
import { TodoItemInterface} from "./interfaces";
import { TodoListInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor(public title: string) {}
  updatedAt:Date = new Date.now();
  status:boolean = true;
  toggleStatus(status:boolean):void {
    if (status === true) {
      status = false;
    } else status = true;
    updatedAt = new Date.now();
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks:Array<string> = [];

  addTask(task:string):number {
    tasks.push(task);
    return tasks.length;
  }
}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
