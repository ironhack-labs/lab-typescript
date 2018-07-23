// Add the reference to the "TodoInterface"
import { Inter } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.


class Todo implements Inter {
  public list: Array<string>=[]

  constructor() {}
  addTask(e: string) {
    this.list.push(e)
  }
  listAllTasks() {
    console.log(this.list)
  }
  deleteTask(task: string) {
    this.list.forEach(e => {
      if (e === task) {
        this.list.splice(this.list.indexOf(e), 1)
        return this.list;
      }
      return this.list;
    });
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
