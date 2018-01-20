// Add the reference to the "TodoInterface"

import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  todoList: Array<string> = [];

  addTask(task: string): number {
    this.todoList.push(task);
    return this.todoList.length;
  }

  listAllTasks(): void{
    this.todoList.forEach((task)=> {
      console.log(task);
    });
  }

  deleteTask(task: string): number {
    var index = this.todoList.indexOf(task);
    this.todoList.splice(index, 1);
    return this.todoList.length;
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
