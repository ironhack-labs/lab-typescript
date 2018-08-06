// Add the reference to the interface
import { ToDoItemInterface, ToDoListInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface

  class TodoItem implements ToDoItemInterface {

    constructor(public title:string, public updatedAt: Date = new Date()) {}

    
    status: boolean = false;

    toggleStatus(): void {
      this.updatedAt = new Date();
      this.status = !this.status;
    } 
  }

  class TodoList implements ToDoListInterface {

    list: Array<ToDoItemInterface> = [];

    addTask(target: ToDoItemInterface): number {
      this.list.push(target);
      
      return this.list.length;
    }

    listAllTasks(): void {
      console.log(...this.list);
    }

    deleteTask(target:ToDoItemInterface): number {
      let tempIndex: number = this.list.indexOf(target);
      this.list.splice(tempIndex,1);
      return this.list.length;
    }
  }
// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
task3.toggleStatus();
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
task4.toggleStatus();
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
task5.toggleStatus();

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