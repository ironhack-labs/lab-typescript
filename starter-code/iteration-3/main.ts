// Add the reference to the interface

import { TodoItemInterface } from './interfaces';
import { TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  constructor(public title: String, public status: Boolean, public updatedAt: Date) {}
  toggleStatus(){
    if(this.status === false) {
      this.status == true;
    }
    this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  constructor(public myArray: Array<string>) {}

  addTask(task: string):Number {
    this.myArray.push(task);
    console.log(task + "inserted in the list");
    console.log("Number of items " + this.myArray.length);
    return this.myArray.length;
  }

  listAllTasks():void {
    for (var i = 0; i < this.myArray.length; i++) {
      console.log(this.myArray[i].title);
      this.myArray[i].toggleStatus();
      console.log(this.myArray.updateAt);
    }
  }

  deleteTask(task: string): Number {
    this.myArray.splice(this.myArray.indexOf(task), 1);
    console.log(task + "remove from the list");
    console.log("Number of items " + this.myArray.length);
    return this.myArray.length;
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

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
myTodos.listUncomplete();
