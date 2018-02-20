// Add the reference to the "TodoInterface"

import { ToDoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoInterface {
  task: string;
  tasks: Array<string>;

  constructor(tasks: Array<string>){}
  
  addTask(task: string){
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========
    Task "${task}" inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks() {
    this.tasks.forEach(task  => console.log(task));
  }

  deleteTask(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(this.tasks.length);
    return this.tasks.length;
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


