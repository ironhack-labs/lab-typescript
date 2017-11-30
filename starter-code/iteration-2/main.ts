// Add the reference to the "TodoInterface"

import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  constructor (
    public myArray: string[],
  ) {}
  addTask(oneItem: string) {
    return this.myArray.push(oneItem);
  }
  listAllTasks() {
    return console.log(this.myArray);
  }
  deleteTask(oneItem: string) {
    const deleteItem = this.myArray.indexOf(oneItem);
    this.myArray.splice(deleteItem, 1);
    return this.myArray.length;
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
