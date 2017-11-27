// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  tasks: Array<string>= [];

  addTask(task : string):number {
    this.tasks.push(task);
    return this.tasks.length;
  }
  listAllTasks():void {
    this.tasks.forEach(e => {
      console.log(e);
    })
  }
  deleteTask(task : string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(`Task ${task} removed from the list. Number of items: ${this.tasks.length}`)
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
