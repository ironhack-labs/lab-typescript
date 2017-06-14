// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class Todo implements todoInterface {

  addTask(task) {

    this.tasks.push(task);
    console.log("Added " + task)
    return this.tasks.length;
  }

  listAllTasks() {
    console.log("--------------- Task List -------------")
    for (let listItem of this.tasks) {
      console.log(listItem);
    }
  }

  deleteTask(str) {
    let findTask = this.tasks.indexOf(str);
    console.log("Task # " + findTask);
    return this.tasks.length;
  }

  constructor() {}
}


// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addT
ask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
