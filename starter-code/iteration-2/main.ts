// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  stringArrays = [];

  addTask(task: string) {
    this.stringArrays.push(task);
    console.log("=========== NEW TASK ===========");
    console.log(`Task ${task} inserted in the list`);
    return this.stringArrays.length;
  }

  listAllTasks() {
    console.log("=========== LISTADO DE TASKS ===========");

    for (const task of this.stringArrays) {
      console.log(task);
    }
  }

  deleteTask(task: string) {
    for (let i = 0; i < this.stringArrays.length; i++) {
      if (this.stringArrays[i] == task) {
        this.stringArrays.splice(i, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log('Task "' + task + '" removed from the list');
      }
    }

    return this.stringArrays.length;
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
