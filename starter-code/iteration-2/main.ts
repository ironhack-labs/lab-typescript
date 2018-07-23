// Add the reference to the "TodoInterface"
// import { TodoInterface } from './todoInterface.ts';
// let todoVar = TodoInterface;

interface TodoInterface {
  tasks: Array<string>;
  addTask(task: string): number;
  listAllTasks();
  deleteTask(task: string): number;
}

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  tasks : Array<string> 
  constructor() {
    this.tasks = [];
  }
    
  addTask(task): number {
    this.tasks.push(task);
    console.log(`Number of items: ${this.tasks.length}`);
    return this.tasks.length;
  }
  listAllTasks() {
    for (let task of this.tasks) {
      console.log(task);
    }
  }
  deleteTask(task): number {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(`Number of items: ${this.tasks.length}`);
    return this.tasks.length;
  }
}

// Execution
let myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();