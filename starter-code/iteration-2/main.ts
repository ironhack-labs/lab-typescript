// Add the reference to the "TodoInterface"
import {toDoInterface} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.

class Todo implements toDoInterface {

  tasks: Array<string> = []
  constructor(){}
  addTask (task:string){
  this.tasks.push(task);
  return this.tasks.length;
  }

  listAllTasks(task:string){
    this.tasks.forEach((task)=>{
    });
  return this.tasks;
  }
  
  deleteTask(task:string){
  this.tasks.splice(this.tasks.indexOf(task), 1);
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
