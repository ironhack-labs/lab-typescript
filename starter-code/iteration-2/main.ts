// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  tasks;

  constructor(){
    this.tasks = [];
  }

  addTask(task:string){
    this.tasks.push(task);
    return this.tasks.length;
  }

  listAllTasks(){
    this.tasks.forEach(function(task){
      console.log(task);
    });
  }

  deleteTask(task:string){
    let found: number = this.tasks.indexOf(task);
    if (found < 0){
      console.log('no se encontó');
      return this.tasks.length;
    } else {
      let deleted: Array<string> = this.tasks.splice(found, 1);
      return this.tasks.length;
    }
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