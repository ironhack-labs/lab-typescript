// Add the reference to the interface

import { Item } from './interfaces';
import { List } from './interfaces';

// Create class TodoItem that implements the corresponding interface

class TodoItem implements Item {


  constructor(
    public title: string,
    public status: boolean,
    public updatedAt: Date,
  ) { }

  toggleStatus(): boolean {
    if (this.status === true) { return this.status = false }
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements List {

  TodoList: string[] = [];


  addTask(TodoItem: any): number {

    this.TodoList.push(TodoItem);
    return this.TodoList.length
  };

  listAllTasks() {
    for (var i = 0; i < this.TodoList.length; i++) {
      console.log(this.TodoList[i]);
    }
  };

  deleteTask(TodoItem: any) {
    this.TodoList.splice(0, 1);
    console.log('deleted');
    return this.TodoList.length;
  };

}

// Execution
let task1 = new TodoItem('This is our first task', true, new Date);
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date);
let task3 = new TodoItem('Finish this iteration 1!! 🤓', true, new Date);
let task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date);
let task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date);

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));

// myTodos.listUncomplete();

