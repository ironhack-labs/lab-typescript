// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface.js';
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {

  tasks: Array<string> = [];

  constructor(){};

  addTask(task: string):number{
    this.tasks.push(task);
    return tasks.length
  };
  listAllTasks():void{
    this.tasks.forEach(tasks => {
      console.log(task);
    })
  };
  deleteTask(task: string):number{
    this.tasks = this.tasks.filter(t => {
      return t !== task
    });
    console.log(`task deleted: ${task}`);
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
