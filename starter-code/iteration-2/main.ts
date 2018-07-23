// Add the reference to the "TodoInterface"
import { ToDoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDoInterface {
  tasks: Array<string> = [];

  addTask(task: string): number {
    let l = this.tasks.push(task);
    console.log(`Task "${task}" inserted in the list`);
    return l;
  }
  listAllTasks(): void {
    console.log(this.tasks);
  }
  deleteTask(task: string): number {
    let pos = this.tasks.indexOf(task);
    if (pos != -1) {
      this.tasks.splice(pos, 1);
      console.log(`Task "${task}" removed from the list.`);
    }
    return this.tasks.length;
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
