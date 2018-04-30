// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoInterface} from "./interfaces";
// Create class TodoList that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean = false;
  updatedAt: object = new Date();
  toogleStatus():void {
    if(this.status === false) { this.status = true }
    else {this.status = false }
  }
  constructor(title: string) {
    this.toogleStatus()
  }
}

class TodoList implements TodoInterface {
  TodoItem: Array<string>=[];
  addTask(value):number {
    this.TodoItem.push(value)
    console.log("Element inserted", this.TodoItem.length)
    return this.TodoItem.length
  }
  listAllTask():void {
    console.log(this.TodoItem)
  };
  delete(value):number {
    this.TodoItem.splice(this.TodoItem.indexOf(value), 1)
    console.log("Element deleted", this.TodoItem.length)
    return this.TodoItem.length
  }
  constructor(){

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
myTodos.listAllTask();
console.log("Number of items:", myTodos.delete(task3));
console.log("Number of items:", myTodos.delete(task4));
console.log("Number of items:", myTodos.delete(task5));
