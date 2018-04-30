// Add the reference to the "TodoInterface"
import { task } from "./todoInterface";

class Todo implements task {
    myArray: Array<string> = [];
  constructor() {}

  addTask(task: string): number {
    this.myArray.push(task);
    console.log(`Add task ${task} inserted in the list`);
    return this.myArray.length;
  }

  listAllTasks(): void {
    this.myArray.forEach(e => {
      console.log(e);
    });
}

  deleteTask(task: string): number {
   this.myArray.splice(this.myArray.indexOf(task), 1)
    console.log(`Deleted task ${task} inserted in the list`)
    return(this.myArray.length)
  }
}

// 1. Create a class Todo that implements the Interface created before.

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
