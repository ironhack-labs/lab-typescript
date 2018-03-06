// Add the reference to the interface
import { todoItem } from './interfaces.js';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements todoItem{
title:string;
isDone:boolean;
updatedAt:string;

toogleDone():void;
}

// Create class TodoList that implements the corresponding interface
class TodoList implements todo{
  todoItem:Array<string>;

  addTask(todoItem:string):void;
  listAllTasks():void;
  deleteTask(todoItem:string):void;
  showNotDoneTasks():void;
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
