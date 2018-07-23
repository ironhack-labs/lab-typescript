// Add the reference to the interface

import { TodoItemInterface, TodoInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  status: boolean = false;
  updatedAt: Date;

  constructor(public title: string) {}

  toggleStatus(): void {
    this.status = !this.status;
    this.updatedAt = new Date();
  }

  toString(): string {
    return this.title;
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
  list: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    let l = this.list.push(task);
    console.log(`Task "${task}" inserted in the list`);
    return l;
  }
  listAllTasks(): void {
    console.log(this.list);
  }
  deleteTask(task: TodoItem): number {
    let pos = this.list.indexOf(task);
    if (pos != -1) {
      this.list.splice(pos, 1);
      console.log(`Task "${task}" removed from the list.`);
    }
    return this.list.length;
  }
  listUncomplete(): void {
    this.list.forEach(e => {
      if (!e.status) {
        console.log(e);
      }
    });
  }
}

// Execution
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");

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
