// Add the reference to the interface
import {todoListInterface, todoItemInterface} from "./interfaces.js";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements todoItemInterface {
  done: boolean;
  updatedAt: Date;
  constructor(public title: string) {
    this.done = false;
    this.updatedAt = new Date();
  }
  toggle(): void {
    this.done = !this.done;
    this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements todoListInterface {
  tasks: Array<TodoItem> = [];
  addTask(task: TodoItem): number {
    this.tasks.push(task);
    return this.tasks.length;
  }
  listAllTasks(): void {
    this.tasks.forEach((task)=> {
      console.log(task.title);
    });
  }
  deleteTask(task: TodoItem): number {
    this.tasks.forEach((oneTask, i)=> {
      if (oneTask === task) {
        this.tasks.splice(i, 1);
      }
    });
    return this.tasks.length;
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

export {TodoItem, TodoList};
