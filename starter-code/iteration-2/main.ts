// Add the reference to the "TodoInterface"

import { todoInterface } from './todoInterface.js';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  tasks: Array<string> = [];
  addTasks(task:string):number{
    tasks.push(task);
    return tasks.length;
  }
  listAllTasks():void{
    tasks.forEach(task => {
      console.log(task)
    });
  }
  deleteTask(task:string):void{
    this.tasks = this.tasks.filter(t => {
      console.log()
    })
  }
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTasks('This is our first task'));
console.log("Number of items:", myTodos.addTasks('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTasks('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
