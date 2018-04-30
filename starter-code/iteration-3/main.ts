// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoInterface} from "./interfaces";
// Create class TodoList that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor(){ }
  title: string;
  status: boolean;
  updatedAt: string;
  toogleStatus():void {}
}

class TodoList implements TodoInterface {
  constructor(){ }
  TodoItem: Array<string>;
  addTask(value:string): number;
  listAllTask():void {};
  delete(value:string): number
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
