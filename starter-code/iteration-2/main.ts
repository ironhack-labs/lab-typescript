// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that impl,ements the Interface created before.
class Todo implements TodoInterface {
  allTasks: Array<string> = [];

  constructor() {}

  addTask(task: string): number {
    this.allTasks.push(task);
    console.log(`Task ${task} inserted in the list`);
    console.log(`Number of items: ${this.allTasks.length}`);
    return this.allTasks.length;
  }

  listAllTasks(): void {
    this.allTasks.forEach(t => {
      console.log(t);
    });
  }

  deleteTask(task: string): number {
    this.allTasks.splice(this.allTasks.indexOf(task), 1);
    console.log("Task " + task + " removed from the list");
    console.log("Number of items: " + this.allTasks.length);
    return this.allTasks.length;
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
