// Add the reference to the "TodoInterface"
import {TodoList} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoList {
  constructor(public tasks: string[]) {}

  addTask(task: string): void {
    this.tasks.push(task);
  }

  listAllTasks(): void {
    this.tasks.forEach(task => {
      console.log(task);
    })
  }

  deleteTask(task: string): void {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
}

// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
