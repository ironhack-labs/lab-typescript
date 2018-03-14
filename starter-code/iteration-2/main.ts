// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  tasks: Array<string>;

  constructor() {
    this.tasks = [];
  }

  addTask = (task: string): number => {
    this.tasks.push(task);
    console.log(`Task "${task}" inserted in the list`);
    return this.tasks.length;
  };

  listAllTasks = (): void => {
    this.tasks.forEach((task) => {
      console.log(task);
    })
  }

  deleteTask = (task: string): number => {
    let index: number = tasks.indexOf(task);
    tasks.splice(index, 1);
    console.log(`Task "${task}" removed from the list`);
    return tasks.length;
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
