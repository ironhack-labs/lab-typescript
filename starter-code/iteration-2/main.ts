// Add the reference to the "TodoInterface"

// import { toDoInterface } from "./todoInterface";

interface toDoInterface {
  // - An array of strings as a property.
  toDos: Array<string>;
  // - Method for adding task where will receive a string, doesn't return anything.
  addTask(task: string): number;
  // - Method for listing all task in the console, doesn't return anything.
  listAllTasks(): void;
  // - Method for delete a task where will receive a string, doesn't return anything.
  deleteTask(task: string): number;
}

// 1. Create a class Todo that implements the Interface created before.

class Todo implements toDoInterface {
  
  toDos: Array<string> = [];

  constructor() {}

  addTask(task: string): number {
    this.toDos.push(task);
    return this.toDos.length;
  }

  listAllTasks(): void {
    this.toDos.forEach(element => {
      console.log(element);
    });
  }

  deleteTask(task: string): number {
    this.toDos.filter(item => item !== task);
    return this.toDos.length;
  }
}

// Execution
let myTodos = new Todo();

console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
