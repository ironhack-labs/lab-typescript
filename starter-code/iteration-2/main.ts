// Add the reference to the "TodoInterface"

import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  constructor(public taskList: Array<string>) {}

  addTask(task: string): number {
    this.taskList.push(task);
    console.log(task + 'has been added to the task list');
    console.log('Number of tasks in list:', this.taskList.length);
    return this.taskList.length;
  }
  listAllTasks() {
    this.taskList.forEach((task, index) => {
      console.log('task', index + ':', task);
    });
  }
  deleteTask(task: string): number {
    let indexOfTask = this.taskList.indexOf(task);s
    this.taskList.splice(indexOfTask, 1);
    console.log('Task', task, 'deleted.' );
    console.log('Number of tasks in list:', this.taskList.length);
    return this.taskList.length;
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
