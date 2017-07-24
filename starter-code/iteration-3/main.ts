// Add the reference to the interface

import {TodoItemInterface} from './interfaces';
import {TodoListInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  constructor(public title: string) {}

  status: boolean
  updatedAt: Date

  toggleStatus() {
    if (this.status) {this.status = false;}
    else {this.status = true;}
    this.updatedAt = new Date();
  }
}

class TodoList implements TodoListInterface {
  constructor(public taskList: Array<TodoItemInterface>) {}

  addTask(task: TodoItemInterface): number {
    this.taskList.push(task);
    console.log(task + 'has been added to the task list');
    console.log('Number of tasks in list:', this.taskList.length);
    return this.taskList.length;
  }
  listAllTasks() {
    this.taskList.forEach((task) => {
      console.log('Task Title:', task.title, '\nTask Date:', task.updatedAt);
    });
  }
  deleteTask(task: TodoItemInterface): number {
    console.log('Task', task, 'deleted.' );
    console.log('Number of tasks in list:', this.taskList.length);
    return this.taskList.length;
  }
}

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([task1, task2, task3]);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of i  tems:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
