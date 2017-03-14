// Add the reference to the "TodoInterface"
import {toDoInterface} from "./todoInterface.js"

class Todo implements toDoInterface {

  tasks : Array<string>;

  constructor (){
    this.tasks = [];
}

  addTask(task: string) :number {
    this.tasks.push(task);
    return this.tasks.length;
  }

  listAllTasks() {
    this.tasks.forEach((task)=> {
      console.log(task);
    });
    return this.tasks.length;
  }

   deleteTask(task: string) {
    this.tasks.forEach((oneTask, i)=> {
      if (oneTask === task) {
        this.tasks.splice(i, 1);
      }
    });
    return this.tasks.length;
  }
}
// 1. Create a class Todo that implements the Interface created before.

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
