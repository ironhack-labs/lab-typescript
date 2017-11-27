// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  constructor(){};

  tasks: Array<string> = [];

  addTask(task:string):number{
    this.tasks.push(task);
    console.log(`Tasks inserted: ${this.tasks.length} | Last: ${task[this.tasks.length-1]}`);
    return this.tasks.length;
  };

  listAllTasks():void{
    this.tasks.forEach(e => {
      console.log(e);
    });
  };

  deleteTask(task:string):number{
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(`Delete successful | Elements: ${this.tasks.length}`);
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
