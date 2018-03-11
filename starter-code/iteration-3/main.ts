// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';

// 1. Create a class Todo that implements the Interface created before.

class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  isDone() {
    this.status != this.status;
    this.updatedAt = new Date;
  };
  constructor(title: string = "New task") {
    this.title = title;
    this.updatedAt = new Date();
  };
}

class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.tasks.push(task)
    console.log(task.title + " was added to the list.");
    return  this.tasks.length;
  };

  listAllTasks(): void {
    console.log("all task:");
    for (let item of this.tasks) {
      console.log(`${item.title}, ${item.updatedAt}`)
    }
  };

  listUncomplete(): void {
    for (let item of this.tasks) {
      if (!item.status) {
        console.log(`Pending: ${item.title}, ${item.updatedAt}`)
      }
    }
  };

  deleteTask(task: TodoItem): number {
    let index: number = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log(task.title + " was deleted from the list.");
    return this.tasks.length;
  };
}

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

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
