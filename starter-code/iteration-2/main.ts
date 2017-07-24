// Add the reference to the "TodoInterface"
import TodoInterface from './todoInterface';
// const todoInterface = require('./todoInterface');

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {

  constructor(public tasks: Array<string>) {}

  addTask(task: string){
    this.tasks.push(task);
  }
  listAllTasks(){
    this.tasks.forEach( elem => console.log(elem) );
  }
  deleteTask(task: string){
    this.tasks = this.tasks.filter( e => e !== task );
  }
}
// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
