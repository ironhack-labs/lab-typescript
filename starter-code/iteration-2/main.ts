// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.

class Todo implements todoInterface {
  constructor(public arr: Array<string>) {}
  addTask(task: string) {
    this.arr.push(task);
    console.log("completed");
    console.log(this.arr.length);
    return this.arr.length;
  }
  listAllTasks() {
    this.arr.forEach(function(x) {
      console.log(x);
    });
  }
  deleteTask(y: string) {
    this.arr.splice(this.arr.indexOf(y), 1);
  }
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 2!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 3!! 🤓")
);
myTodos.listAllTasks();
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 2!! 🤓")
);
myTodos.listAllTasks();
