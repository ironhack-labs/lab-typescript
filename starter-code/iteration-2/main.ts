// Add the reference to the "TodoInterface"
import { ITodo } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements ITodo {
  tasks: Array<string>;
  constructor() {
    this.tasks = [];
  }

  addTask(newTask: string) {
    return this.tasks.push(newTask);
  };

  listAllTasks() {
    this.tasks.forEach(t => console.log(t));
  };

  deleteTask(taskToRemove: string) {
    let i: number = this.tasks.indexOf(taskToRemove);
    return this.tasks.splice(i, 1).length;
  };

}

// Execution
let myTodos: Todo = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
