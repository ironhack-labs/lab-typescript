// Add the reference to the interface

import {TodoItemInterface} from "./interfaces";
import {TodoListInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {

  status: boolen;
  updatedAt: Date;

  constructor(public title: string) {
    this.status = false;
    this.updatedAt = new Date();
  }

togglestatus() {
  this.status = !this.status;
  this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {

  constructor(public tasks: Array<TodoItem>) {
  }

  addTask(task: TodoItem): number {
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========
  Task "${task.title}" inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks(): void {
    this.tasks.forEach(task => {
      console.log(task.title);
    })
  }

  deleteTask(task: TodoItem): number {
    let index: number = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log(`=========== TASK REMOVED ===========
  Task "${task.title}" removed from the list`);
    return this.tasks.length;
  }

  listUncomplete(): void {
    {
      this.tasks.forEach(task => {
        if (this.status === false) {
          console.log(task.title);
        }
      })
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([]);

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
