// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public tasksList: Array<string>) {}

  addTask(task: string): number {
    this.tasksList.push(task);
    console.log(`=========== NEW TASK ===========\n
                Task "${task}" inserted in the list\n
                Number of items: ${this.tasksList.length}`);
    return  this.tasksList.length;
  }

  listAllTasks(): void {
    this.tasksList.forEach(task => {
      console.log(`=========== TASK ===========\n
                  Task: "${task}"`);
    });
  }

  deleteTask(task: string): number {
    this.tasksList.splice(this.tasksList.indexOf(task), 1);
    console.log(`=========== TASK REMOVED ===========\n
                Task "${task}" removed from the list\n
                Number of items: ${this.tasksList.length}`);
    return  this.tasksList.length;
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
