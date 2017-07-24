// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  toDoArrayIteration2: Array<string>;

  constructor () {
    this.toDoArrayIteration2 = [];
  }

  addTask(task): number {
    this.toDoArrayIteration2.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task "+ task +" inserted in the list");
    return this.toDoArrayIteration2.length;
  }

  listAllTasks(): void {
    console.log("=========== LIST OF TASKS ===========");
    this.toDoArrayIteration2.forEach(function(task: string) {
      console.log("- ", task);
    })
  }

  deleteTask(task): void {
    let taskIndex = this.toDoArrayIteration2.indexOf(task);
    this.toDoArrayIteration2.splice(taskIndex,1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task "+ task +" removed from the list");
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
