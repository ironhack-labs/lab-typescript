// Add the reference to the interface
import { TodoItemInterface } from './interfaces';
import { TodoListInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: String;
  status: Boolean;
  updatedAt: Date;
  constructor(title: String) {
    this.title = title;
    this.status = false;
    this.updatedAt = new Date();
  }
  toogleStatus(): void {
    this.status === true ? this.status = false : this.status = true;
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  myTasks: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.myTasks.push(task);
    console.log("\n=========== NEW TASK ===========");
    return this.myTasks.length;
  }

  listAllTasks(): void {
    console.log("\n=========== LIST TASKS ===========")
    this.myTasks.forEach(elem => {
      console.log(elem.title);
    })
  }

  deleteTask(task: TodoItem): number {
    console.log("\n=========== TASK REMOVED ===========");
    this.myTasks = this.myTasks.filter(item => {
      return item === task;
    });
    return this.myTasks.length;
  }

  listUncomplete(): void {
    this.myTasks.forEach(elem => {
      if (elem.status === false) {
        console.log(elem.title);
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