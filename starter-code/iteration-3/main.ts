// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

// Execution

import { interTodo, interTask } from "./interfaces.js";

class TodoItem implements interTodo {
  constructor(public task:string) { }

  title = this.task;
  status: boolean;
  updatedAt: Date;
  toogleStatus() {
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}

class TodoList implements interTask {
  constructor() {}

  arr3 = [];

  addTask3(task) {
    this.arr3.push(task.title);
  }

  listAllTasks3() {
    console.log(this.arr3);
  }

  deleteTask3(task) {
    if (this.arr3.indexOf(task.title) >= 0) {
      this.arr3.splice(this.arr3.indexOf(task), 1);
    }
  }

  listUncomplete() {
    this.arr3.forEach(e => {if (!e.status) {
      console.log(e);
    }})
  }
}

let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask3(task1));
console.log("Number of items:", myTodos.addTask3(task2));
console.log("Number of items:", myTodos.addTask3(task3));
console.log("Number of items:", myTodos.addTask3(task4));
console.log("Number of items:", myTodos.addTask3(task5));
myTodos.listAllTasks3();
console.log("Number of items:", myTodos.deleteTask3(task3));
console.log("Number of items:", myTodos.deleteTask3(task4));
console.log("Number of items:", myTodos.deleteTask3(task5));
myTodos.listUncomplete();
